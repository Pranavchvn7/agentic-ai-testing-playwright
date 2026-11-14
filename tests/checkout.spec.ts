import { test, expect } from "@playwright/test";

test.describe("ShopLite checkout", () => {
  test("customer can complete checkout with an in-stock product", async ({
    page
  }) => {
    await page.goto("/");

    await page
      .getByRole("link", { name: /aurora wireless keyboard/i })
      .click();

    await page.getByRole("button", { name: /add to cart/i }).click();

    await page.getByRole("link", { name: /cart \(1\)/i }).click();

    await page.getByRole("link", { name: /proceed to checkout/i }).click();

    await expect(
      page.getByRole("heading", { name: /^checkout$/i })
    ).toBeVisible();

    await page.getByLabel(/full name/i).fill("Asha Rao");
    await page.getByLabel(/email/i).fill("asha.rao+qa@example.test");
    await page.getByLabel(/phone/i).fill("9876543210");
    await page.getByLabel(/address/i).fill("12 Test Street");
    await page.getByLabel(/city/i).fill("Nashik");
    await page.getByLabel(/postal code/i).fill("422001");
    await page.getByLabel(/country/i).selectOption({ label: "India" });

    await page.getByRole("button", { name: /place order/i }).click();

    await expect(
      page.getByRole("heading", { name: /order confirmed/i })
    ).toBeVisible();

    await expect(page.getByText(/order id/i)).toBeVisible();
  });

  test("customer cannot check out with an empty cart", async ({ page }) => {
  await page.goto("/checkout");

  await expect(
    page.getByText(/your cart is empty/i)
  ).toBeVisible();

  await expect(
    page.getByRole("link", { name: /back to products/i })
  ).toBeVisible();
});
});