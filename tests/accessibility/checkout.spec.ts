import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("ShopLite checkout accessibility", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");

    await page
      .getByRole("link", { name: /aurora wireless keyboard/i })
      .click();

    await page.getByRole("button", { name: /add to cart/i }).click();

    await page.getByRole("link", { name: /cart \(1\)/i }).click();

    await page.getByRole("link", { name: /proceed to checkout/i }).click();
  });

  test("checkout form fields have accessible labels", async ({ page }) => {
    await expect(page.getByLabel(/full name/i)).toBeVisible();
    await expect(page.getByLabel(/email/i)).toBeVisible();
    await expect(page.getByLabel(/phone/i)).toBeVisible();
    await expect(page.getByLabel(/address/i)).toBeVisible();
    await expect(page.getByLabel(/city/i)).toBeVisible();
    await expect(page.getByLabel(/postal code/i)).toBeVisible();
    await expect(page.getByLabel(/country/i)).toBeVisible();
  });

  test("checkout has no critical accessibility violations", async ({
    page
  }) => {
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});