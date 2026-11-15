import { test, expect } from "@playwright/test";

test.describe("ShopLite visual regression", () => {
  test("cart page matches the approved visual baseline", async ({ page }) => {
    await page.goto("/");

    await page
      .getByRole("link", { name: /aurora wireless keyboard/i })
      .click();

    await page.getByRole("button", { name: /add to cart/i }).click();

    await page.getByRole("link", { name: /cart \(1\)/i }).click();

    await expect(
      page.getByRole("heading", { name: /^cart$/i })
    ).toBeVisible();

    await expect(page).toHaveScreenshot("cart-page.png", {
      fullPage: true,
      animations: "disabled"
    });
  });
});