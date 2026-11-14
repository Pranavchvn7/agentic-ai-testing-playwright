# MCP Test Generation Prompt

```text
Using the MCP exploration evidence and reviewed test plan below, create one
Playwright Test file.

Test objective:
Add an in-stock product to the cart and verify that it appears in the cart
with the correct name, quantity, and price.

Requirements:

- Use TypeScript and Playwright Test.
- Use baseURL from the Playwright configuration.
- Use accessible selectors where possible.
- Do not use generated CSS class names as primary selectors.
- Do not use page.waitForTimeout.
- Use Arrange, Act, Assert structure.
- Assert user-visible outcomes.
- Keep the test independent and repeatable.
- Use synthetic test data only.
- Do not modify application source code.

After the test, provide:

1. A short explanation of the coverage.
2. Missing coverage.
3. Potential flakiness risks.
4. A list of assumptions that need human verification.
```