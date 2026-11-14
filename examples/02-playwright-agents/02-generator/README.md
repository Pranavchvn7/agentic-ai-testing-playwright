# Exercise: Generator Agent

Use the generator agent to turn the reviewed checkout test plan into Playwright
tests.

## Objective

By the end of this exercise, you should be able to:

- Generate Playwright tests from a test plan.
- Review generated selectors and assertions.
- Improve test quality before adding tests to the suite.
- Avoid accepting brittle or low-value automation.

## Steps

1. Ensure ShopLite is running.
2. Use the planner output from the previous exercise.
3. Run the generator prompt in `prompt.md`.
4. Save the generated test as `generated-checkout.spec.ts`.
5. Review it with `review-checklist.md`.
6. Improve and save the final version as `human-reviewed-checkout.spec.ts`.
7. Run the final test locally.
8. Record what you changed and why.

## Definition of done

- At least one meaningful checkout test is generated.
- The test uses resilient, accessible selectors.
- The test contains meaningful assertions.
- The test runs successfully.
- You documented the human review changes.