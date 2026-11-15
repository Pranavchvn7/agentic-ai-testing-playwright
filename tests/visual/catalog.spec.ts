import { test, expect } from "@playwright/test";

test.describe("ShopLite visual regression", () => {
  test("catalog page matches the approved visual baseline", async ({
    page
  }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", { name: /shoplite products/i })
    ).toBeVisible();

    await expect(page).toHaveScreenshot("catalog-page.png", {
      fullPage: true,
      animations: "disabled"
    });
  });
});