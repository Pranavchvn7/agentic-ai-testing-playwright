import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("ShopLite accessibility", () => {
  test("catalog has no critical accessibility violations", async ({
    page
  }) => {
    await page.goto("/");

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("catalog has a meaningful page title and main heading", async ({
    page
  }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/shoplite/i);

    await expect(
      page.getByRole("heading", { name: /shoplite products/i, level: 1 })
    ).toBeVisible();
  });

  test("product catalog is exposed as a list", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.getByRole("list", { name: /product catalog/i })
    ).toBeVisible();
  });
});