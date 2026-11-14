import { test, expect } from "@playwright/test";

test.describe("ShopLite keyboard navigation", () => {
  test("customer can navigate from catalog to product using keyboard", async ({
    page
  }) => {
    await page.goto("/");

    await page
      .getByRole("link", { name: /aurora wireless keyboard/i })
      .focus();

    await page.keyboard.press("Enter");

    await expect(
      page.getByRole("heading", { name: /aurora wireless keyboard/i })
    ).toBeVisible();
  });

  test("customer can reach the add-to-cart button using keyboard", async ({
    page
  }) => {
    await page.goto("/products/p-101");

    await page
      .getByRole("button", { name: /add to cart/i })
      .focus();

    await page.keyboard.press("Enter");

    await expect(
      page.getByRole("link", { name: /cart \(1\)/i })
    ).toBeVisible();
  });
});