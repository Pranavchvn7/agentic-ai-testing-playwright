import { test, expect } from "@playwright/test";
import { randomUUID } from "node:crypto";

test.describe("ShopLite order submission", () => {
  test("prevents duplicate order creation for an identical submission", async ({
    request
  }) => {
    const uniqueEmail = `asha.rao+${randomUUID()}@example.test`;

    const orderPayload = {
      customer: {
        fullName: "Asha Rao",
        email: uniqueEmail,
        phone: "9876543210",
        address: "12 Test Street",
        city: "Nashik",
        postalCode: "422001",
        country: "India"
      },
      items: [
        {
          productId: "p-101",
          name: "Aurora Wireless Keyboard",
          price: 2499,
          quantity: 1
        }
      ],
      couponCode: null
    };

    const firstResponse = await request.post(
      "http://localhost:4000/api/orders",
      {
        data: orderPayload
      }
    );

    expect(firstResponse.status()).toBe(201);

    const secondResponse = await request.post(
      "http://localhost:4000/api/orders",
      {
        data: orderPayload
      }
    );

    expect(secondResponse.status()).toBe(409);

    const secondResponseData = await secondResponse.json();

    expect(secondResponseData.error).toMatch(/already been submitted/i);
  });
});