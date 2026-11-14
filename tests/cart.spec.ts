import { test, expect } from "@playwright/test";

test.describe("ShopLite cart", () => {
  test("customer can add a product to the cart", async ({ page }) => {
    await page.goto("/");

    await page
      .getByRole("link", { name: /aurora wireless keyboard/i })
      .click();

    await expect(
      page.getByRole("heading", { name: /aurora wireless keyboard/i })
    ).toBeVisible();

    await expect(
      page.getByRole("link", { name: /cart \(0\)/i })
    ).toBeVisible();

    await page.getByRole("button", { name: /add to cart/i }).click();

    await expect(
      page.getByRole("link", { name: /cart \(1\)/i })
    ).toBeVisible();

    await page.getByRole("link", { name: /cart \(1\)/i }).click();

    await expect(
      page.getByRole("heading", { name: /^cart$/i })
    ).toBeVisible();

    await expect(
      page.getByRole("heading", { name: /aurora wireless keyboard/i })
    ).toBeVisible();

    await expect(page.getByText(/1 item in cart/i)).toBeVisible();
  });
});