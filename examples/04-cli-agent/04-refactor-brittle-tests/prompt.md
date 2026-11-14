# Brittle Test Refactoring Prompt

```text
You are a senior Playwright Test engineer.

Review the Playwright tests in this repository for maintainability and
reliability.

Do not modify any files yet.

Identify:

1. Brittle selectors
2. Weak or missing assertions
3. Arbitrary waits
4. Test-isolation problems
5. Duplicate coverage
6. Hard-coded URLs or data
7. Missing negative or boundary coverage
8. Accessibility concerns
9. Maintainability risks
10. Recommended refactoring priorities

For each issue, provide:

- File and test name
- Exact issue
- Why it matters
- Evidence from the code
- Recommended change
- Risk of changing it
- Suggested priority

Then create a phased refactoring plan.

Do not propose changes that reduce meaningful coverage.
Do not change application source code.
```