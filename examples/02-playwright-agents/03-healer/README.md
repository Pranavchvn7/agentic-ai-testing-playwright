# Exercise: Healer Agent

Use the Playwright healer agent to investigate and repair a deliberately
broken checkout test.

## Objective

By the end of this exercise, you should be able to:

- Run a failing Playwright test.
- Use the healer agent to investigate the failure.
- Review the proposed repair.
- Decide whether the repair is safe and maintainable.

## Steps

1. Start ShopLite.
2. Copy `broken-test.spec.ts` into your `tests/` folder.
3. Run the test:

```bash
npx playwright test tests/broken-checkout.spec.ts
```

4. Confirm that it fails.
5. Use the healer prompt in `prompt.md`.
6. Save the agent’s proposed fix as `healer-proposed-fix.md`.
7. Review the proposed change.
8. Apply only the changes you understand and approve.
9. Re-run the test.
10. Document the root cause, fix, and remaining risks.

## Definition of done

- The failing test and its failure evidence are understood.
- The healer proposed a specific repair.
- You reviewed the repair before applying it.
- The repaired test passes.
- You documented why the original test failed.