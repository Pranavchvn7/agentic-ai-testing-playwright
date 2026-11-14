import { test, expect } from "@playwright/test";

test("customer can add an in-stock product to the cart", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("link", { name: /aurora wireless keyboard/i }).click();

  await page.getByRole("button", { name: /add to cart/i }).click();

  await page.getByRole("link", { name: /cart/i }).click();

  await expect(
    page.getByRole("heading", { name: /shopping cart/i })
  ).toBeVisible();

  await expect(page.getByText(/aurora wireless keyboard/i)).toBeVisible();

  await expect(page.getByText("₹2,499")).toBeVisible();
});