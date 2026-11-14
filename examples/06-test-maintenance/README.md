# Exercise: Test Maintenance After a UI Change

In this exercise, you will make a controlled UI change, observe which tests
fail, investigate the failures, and update only the affected tests.

## Objective

By the end of this exercise, you should be able to:

- Identify tests affected by a UI change.
- Use Playwright traces and error context to investigate failures.
- Update selectors and assertions without weakening coverage.
- Keep unrelated tests stable.

## Steps

1. Create a branch:

```bash
git checkout -b exercise/product-heading-change
```

2. Change the catalog heading from:

```tsx
<h1>ShopLite Products</h1>
```

to:

```tsx
<h1>ShopLite Catalog</h1>
```

3. Run the tests:

```bash
npx playwright test
```

4. Identify the failing tests.

5. Use the trace and error context to understand why they failed.

6. Update only the affected tests.

7. Run the tests again.

8. Revert the application change or keep it, depending on the intended product change.

## Definition of done

- You can explain which tests failed and why.
- You updated selectors or assertions without weakening coverage.
- Unrelated tests continued to pass.
- You documented the maintenance decision.

## Accessibility test design

A defect-detection test intentionally passes when it finds an accessibility
violation. It is useful for demonstrating that a scanning tool works.

A regression test intentionally fails when it finds an accessibility
violation. It protects an already-accessible experience from future defects.

For this repository, use regression tests in the normal test suite.