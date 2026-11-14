# Exercise: AI-Assisted Test Planning

In this exercise, you will use AI to create a test plan for the ShopLite
checkout flow, then improve it through human review.

## Objective

By the end of this exercise, you should be able to:

- Convert a requirement into a risk-based test plan.
- Identify missing edge cases in AI-generated plans.
- Create focused Playwright test scenarios.
- Review AI-generated tests before accepting them.

## Prerequisites

- ShopLite is running locally.
- You have access to an AI assistant.
- You understand basic Playwright Test concepts.

## Steps

1. Read `requirement.md`.
2. Use `../../prompts/planner.md` to generate a draft test plan.
3. Save the raw output as `ai-test-plan.md`.
4. Review it using `../../prompts/reviewer.md`.
5. Improve the plan and save it as `human-reviewed-test-plan.md`.
6. Generate one Playwright test for the highest-risk scenario.
7. Save the raw AI output as `ai-generated-test.spec.ts`.
8. Improve and save the final version as `human-reviewed-test.spec.ts`.
9. Record what you accepted, changed, or rejected.

## Definition of done

- A test plan covers functional, negative, boundary, and risk-based scenarios.
- At least one AI-generated test has been reviewed and improved.
- The final test runs successfully against the local ShopLite app.
- The review notes explain why changes were made.