# Example AI Output Evaluation

## Artifact details

- Artifact type: AI-generated Playwright checkout test
- AI tool: Coding agent
- Feature or journey: Checkout happy path
- Date: 2026-11-14
- Reviewer: QA engineer

## Objective

Generate a Playwright test that adds an in-stock product to the cart and
completes checkout.

## Evidence reviewed

- Playwright test output
- Trace file
- Browser screenshot
- ShopLite checkout page
- Product and cart API responses

## Evaluation

| Dimension | Assessment | Evidence | Improvement needed |
|---|---|---|---|
| Accuracy | Partial | The agent used a product that exists, but assumed a label that was not visible | Verify accessible names |
| Completeness | Low | The test did not check quantity, price, or order ID | Add meaningful assertions |
| Correctness | Partial | The order confirmation was checked, but not its contents | Assert order details |
| Maintainability | Low | Generic text selectors were used | Use roles and labels |
| Stability | Low | A hard wait was used | Remove `waitForTimeout` |
| Accessibility | Low | The agent did not assess labels or keyboard navigation | Review accessibility |
| Security | Pass | No sensitive data was used | Keep synthetic data |
| Value | Partial | The test covered a useful journey but weakly | Strengthen assertions |

## Findings

### High priority

- Replace generic text selectors with accessible role and label selectors.
- Remove the hard wait.
- Assert product name, quantity, price, and order confirmation details.

### Medium priority

- Add validation for empty required fields.
- Add a separate test for duplicate order submission.
- Verify that the cart is cleared after checkout.

### Low priority

- Improve test naming for readability.
- Add comments only for non-obvious decisions.

## Decision

Accept after changes.

## Human changes

- Replaced generic selectors with role- and label-based selectors.
- Removed `waitForTimeout`.
- Added assertions for cart contents and order confirmation.
- Verified the test against the local ShopLite application.

## Final result

- Test command: `npx playwright test tests/checkout.spec.ts`
- Test result: Passed
- Remaining risks: Coupon calculation, duplicate submission, and API failure handling still need separate coverage.