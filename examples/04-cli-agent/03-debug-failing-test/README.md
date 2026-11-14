# Exercise: Debug a Failing Playwright Test

Use a CLI agent to investigate one failing Playwright test and propose a
minimal repair.

## Objective

By the end of this exercise, you should be able to:

- Use an AI agent to investigate a test failure.
- Review evidence before accepting a root cause.
- Apply a minimal, safe fix.
- Determine whether the issue is an application defect or test defect.

## Steps

1. Create a failing test or use an existing failing test.
2. Run only that test:

```bash
npx playwright test tests/your-failing-test.spec.ts
```

3. Use the prompt in `prompt.md`.
4. Save the agent response as `failure-analysis.md`.
5. Review the response with `review-checklist.md`.
6. Apply only changes you understand and approve.
7. Re-run the test.
8. Document the root cause, fix, and remaining risks.

## Definition of done

- The failure is reproduced.
- Evidence is collected before a fix is proposed.
- The proposed change is minimal.
- The repaired test passes.
- You can explain why the original test failed.