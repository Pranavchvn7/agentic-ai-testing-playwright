# Playwright Test Generation Prompt

```text
You are a senior Playwright Test engineer.

Create a Playwright Test file for the following scenario.

Requirements:

- Use TypeScript.
- Use Playwright Test.
- Use accessible selectors where possible: getByRole, getByLabel,
  getByPlaceholder, getByText, or test IDs.
- Avoid CSS selectors based on generated class names.
- Do not use arbitrary sleeps such as page.waitForTimeout.
- Use clear test names.
- Use Arrange, Act, Assert structure.
- Assert meaningful user-visible outcomes.
- Keep the test independent and repeatable.
- Add comments only where they explain non-obvious decisions.

Provide:
1. The complete test file.
2. A short explanation of the test coverage.
3. Potential risks or missing coverage.
```