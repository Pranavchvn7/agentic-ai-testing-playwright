import { test, expect } from "@playwright/test";

test("checkout works", async ({ page }) => {
  await page.goto("http://localhost:5173");

  await page.waitForTimeout(3000);

  await page.click("text=Add to cart");
  await page.click("text=Cart");
  await page.click("text=Checkout");

  await page.fill("input", "Asha Rao");
  await page.click("text=Place order");

  await expect(page.locator("text=Order confirmed")).toBeVisible();
});