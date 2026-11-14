# Human-Reviewed Test Plan: Checkout

## Objective

Verify that customers can complete an order only under valid business
conditions, with clear validation, accurate totals, and reliable order
confirmation.

## In scope

- Cart review and checkout entry.
- Required-field validation.
- Email, phone, and postal-code validation.
- Coupon application and expiry.
- Order creation and confirmation.
- Cart clearing after successful checkout.
- Duplicate submission prevention.
- Out-of-stock product handling.
- API failure handling.

## Out of scope

- Real payment gateway integration.
- Refunds and cancellations.
- Multi-currency support.
- Performance testing.

## High-risk areas

| Risk | Why it matters | Priority |
|---|---|---|
| Incorrect order total | Customers may be charged incorrectly | P0 |
| Duplicate order creation | Inventory and order data may become inconsistent | P0 |
| Empty-cart checkout | Could create invalid orders | P0 |
| Coupon calculation errors | Pricing and promotions may be incorrect | P1 |
| Weak validation | Bad data may enter the system | P1 |
| Inaccessible form fields | Some users may be unable to complete checkout | P1 |
| API failure handling | Users may receive unclear errors or lose cart state | P1 |

## Priority scenarios

### P0

- Complete checkout with one in-stock product.
- Prevent checkout with an empty cart.
- Prevent duplicate order creation on rapid repeated submission.
- Verify subtotal, discount, tax, shipping, and total calculations.
- Confirm that the cart is cleared after a successful order.

### P1

- Validate required fields.
- Validate email, phone, and postal-code formats.
- Apply `SAVE10` and verify the 10% discount.
- Reject `EXPIRED10` with a clear message.
- Attempt checkout with an out-of-stock product.
- Handle a simulated API failure during order creation.

### P2

- Search and checkout with special characters in customer fields.
- Verify accessibility labels, keyboard navigation, and error announcements.
- Test long names, addresses, and postal codes.

## Test data

| Type | Example | Purpose |
|---|---|---|
| Valid customer | `Asha Rao`, `asha.rao+qa@example.test`, `9876543210` | Happy path |
| Invalid email | `not-an-email` | Format validation |
| Invalid phone | `abc` | Format validation |
| Invalid postal code | `!` | Format validation |
| Boundary quantity | `1`, maximum allowed quantity | Quantity rules |
| Coupon | `SAVE10` | Discount calculation |
| Expired coupon | `EXPIRED10` | Negative coupon path |

## Questions

- What is the maximum allowed quantity per product?
- What happens if stock changes between adding to cart and checkout?
- Should failed orders preserve cart contents?
- What error message should appear when the order API fails?