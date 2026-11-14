import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("ShopLite image accessibility", () => {
  test("product images have accessible names", async ({ page }) => {
    await page.goto("/");

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa"])
      .analyze();

    const imageAltViolations = accessibilityScanResults.violations.filter(
      (violation) => violation.id === "image-alt"
    );

    expect(imageAltViolations).toHaveLength(0);
  });
});