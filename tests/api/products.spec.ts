import { test, expect } from "@playwright/test";

const API_BASE_URL = "http://localhost:4000";

test.describe("ShopLite Products API", () => {
  test("returns a product list", async ({ request }) => {
    const response = await request.get(`${API_BASE_URL}/api/products`);

    expect(response.status()).toBe(200);

    const products = await response.json();

    expect(Array.isArray(products)).toBe(true);
    expect(products.length).toBeGreaterThan(0);

    const keyboard = products.find(
      (product: { id: string }) => product.id === "p-101"
    );

    expect(keyboard).toBeDefined();
    expect(keyboard.name).toBe("Aurora Wireless Keyboard");
  });

  test("returns product details for a valid product", async ({
    request
  }) => {
    const response = await request.get(
      `${API_BASE_URL}/api/products/p-101`
    );

    expect(response.status()).toBe(200);

    const product = await response.json();

    expect(product.id).toBe("p-101");
    expect(product.name).toBe("Aurora Wireless Keyboard");
  });

  test("returns 404 for an unknown product", async ({ request }) => {
    const response = await request.get(
      `${API_BASE_URL}/api/products/unknown-product`
    );

    expect(response.status()).toBe(404);

    const errorResponse = await response.json();

    expect(errorResponse.error).toMatch(/product not found/i);
  });

  test("returns a controlled 500 response for the unstable product", async ({
    request
  }) => {
    const response = await request.get(
      `${API_BASE_URL}/api/products/p-999`
    );

    expect(response.status()).toBe(500);

    const errorResponse = await response.json();

    expect(errorResponse.error).toMatch(/unable to load this product/i);
  });
});