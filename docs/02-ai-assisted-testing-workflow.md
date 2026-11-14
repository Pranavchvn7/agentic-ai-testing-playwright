# AI-Assisted Testing Workflow

Use this workflow for ShopLite features before moving to Playwright Test
Agents, MCP, or CLI agents.

## Workflow

1. **Understand the requirement**
   - Identify users, workflows, data, rules, and risks.

2. **Generate a draft test plan**
   - Ask AI for test objectives, risks, scenarios, and priorities.

3. **Review and improve the plan**
   - Add missing risks, edge cases, accessibility checks, and data needs.

4. **Generate test data**
   - Create valid, invalid, boundary, and negative examples.

5. **Generate a draft Playwright test**
   - Ask AI to create one focused test at a time.

6. **Review the generated test**
   - Check selectors, assertions, waits, isolation, and maintainability.

7. **Run and refine**
   - Run locally, inspect failures, and improve the test.

8. **Document the outcome**
   - Record what AI suggested, what you accepted, changed, or rejected.

## Example: checkout

For the ShopLite checkout flow, a useful test plan should consider:

- Successful checkout with available stock.
- Required-field validation.
- Invalid email, phone, and postal-code formats.
- Empty cart prevention.
- Quantity changes before checkout.
- Coupon application and expiry.
- Out-of-stock products.
- Duplicate order submission.
- API failure handling.
- Order confirmation details.

## Human review checklist

Before accepting an AI-generated test:

- [ ] The test matches a real user journey.
- [ ] The expected result is explicit.
- [ ] Assertions verify meaningful behavior.
- [ ] Selectors are resilient and accessible.
- [ ] No arbitrary sleeps are used.
- [ ] Test data is synthetic and safe.
- [ ] The test is independent of other tests.
- [ ] The test fails when the feature is broken.
- [ ] The test adds valuable coverage.