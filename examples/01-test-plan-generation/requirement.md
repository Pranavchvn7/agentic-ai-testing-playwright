# Requirement: ShopLite Checkout

Customers must be able to complete an order from their cart.

## Functional requirements

- A customer must provide a full name, email address, phone number,
  shipping address, city, postal code, and country.
- The customer must be able to review cart items, quantities, and totals.
- A customer may apply one coupon code.
- Coupon `SAVE10` gives 10% off the subtotal.
- Coupon `EXPIRED10` must show a clear expiry message.
- Orders must receive a unique order ID.
- After a successful order, the cart must be cleared.
- The customer must see an order confirmation page.

## Constraints

- Do not use real payment processing.
- Use synthetic data only.
- The app runs locally at http://localhost:5173.
- The API runs locally at http://localhost:4000.

## Quality risks

- Invalid or missing checkout data.
- Incorrect totals after coupon application.
- Duplicate orders from repeated submissions.
- Orders created with an empty cart.
- Orders created with unavailable products.
- Poor error messages or inaccessible form fields.