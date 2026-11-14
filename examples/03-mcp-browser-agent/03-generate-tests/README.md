# Exercise: Generate a Test from MCP Evidence

Use Playwright MCP evidence to generate one focused Playwright test.

## Objective

By the end of this exercise, you should be able to:

- Turn observed application behavior into a focused automated test.
- Review AI-generated selectors and assertions.
- Prevent low-value or brittle tests from entering the suite.

## Steps

1. Use the reviewed test plan from the previous exercise.
2. Use the prompt in `prompt.md`.
3. Save the generated test as `mcp-generated-test.spec.ts`.
4. Review it with `review-checklist.md`.
5. Improve and save it as `human-reviewed-test.spec.ts`.
6. Run the final test locally.
7. Record what you changed and why.

## Definition of done

- The test covers one meaningful user journey.
- The test uses resilient selectors.
- The test has meaningful assertions.
- The test passes locally.
- The human review notes explain accepted and rejected changes.