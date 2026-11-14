# Generator Prompt

```text
Using the following reviewed test plan, create one Playwright Test file for
the highest-priority checkout scenario.

Requirements:

- Use TypeScript and Playwright Test.
- Target http://localhost:5173.
- Use accessible selectors such as getByRole, getByLabel, getByPlaceholder,
  getByText, or data-testid attributes.
- Do not use generated CSS class names as primary selectors.
- Do not use page.waitForTimeout.
- Use clear test names and Arrange, Act, Assert structure.
- Assert meaningful user-visible outcomes.
- Keep the test independent and repeatable.
- Use synthetic test data only.
- Do not modify application source code.

After the test, list:
1. What the test covers
2. What it does not cover
3. Potential flakiness risks
4. Suggested improvements
```