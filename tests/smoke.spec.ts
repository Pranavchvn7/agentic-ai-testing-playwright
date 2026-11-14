import { test, expect } from "@playwright/test";

test.describe("ShopLite smoke tests", () => {
  test("home page loads and shows the product catalog", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/shoplite/i);

    await expect(
      page.getByRole("heading", { name: /shoplite products/i })
    ).toBeVisible();

    await expect(
      page.getByRole("list", { name: /product catalog/i })
    ).toBeVisible();

    await expect(
  page.getByRole("heading", {
    name: /^Aurora Wireless Keyboard/
  })
).toBeVisible();
  });
});