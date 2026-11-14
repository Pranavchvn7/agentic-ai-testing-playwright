import { test, expect } from "@playwright/test";

test.describe("ShopLite coupons", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");

    await page
      .getByRole("link", { name: /aurora wireless keyboard/i })
      .click();

    await page.getByRole("button", { name: /add to cart/i }).click();

    await page.getByRole("link", { name: /cart \(1\)/i }).click();

    await page.getByRole("link", { name: /proceed to checkout/i }).click();
  });

  test("customer can apply SAVE10 and see a discount", async ({ page }) => {
    await page.getByLabel(/coupon code/i).fill("SAVE10");
    await page.getByRole("button", { name: /apply coupon/i }).click();

    await expect(
      page.getByText("Coupon applied: 10% discount.", { exact: true })
    ).toBeVisible();

    await expect(
      page.getByText(/^-₹\d+\.\d{2}$/)
    ).toBeVisible();
  });

  test("customer sees an expiry message for EXPIRED10", async ({ page }) => {
    await page.getByLabel(/coupon code/i).fill("EXPIRED10");
    await page.getByRole("button", { name: /apply coupon/i }).click();

    await expect(
      page.getByText(/this coupon has expired/i)
    ).toBeVisible();
  });

  test("customer sees an error for an invalid coupon", async ({ page }) => {
    await page.getByLabel(/coupon code/i).fill("INVALIDCODE");
    await page.getByRole("button", { name: /apply coupon/i }).click();

    await expect(
      page.getByText(/invalid coupon code/i)
    ).toBeVisible();
  });
});