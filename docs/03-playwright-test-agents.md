# Playwright Test Agents

Playwright provides three built-in Test Agents:

| Agent | Purpose | Output |
|---|---|---|
| Planner | Explores the application and identifies what to test | Markdown test plan |
| Generator | Converts a test plan into Playwright Test files | `.spec.ts` files |
| Healer | Runs tests, investigates failures, and proposes repairs | Updated tests and fixes |

These agents are useful for accelerating test authoring and maintenance, but
they do not replace QA ownership.

## Core workflow

1. Start ShopLite locally.
2. Run the planner against a defined feature or user journey.
3. Review the generated Markdown test plan.
4. Run the generator to create draft Playwright tests.
5. Review selectors, assertions, waits, test isolation, and coverage.
6. Run the tests.
7. Use the healer only for a failing test after understanding the failure.
8. Review the healer’s proposed change before accepting it.
9. Add stable, approved tests to the regression suite.

## Human review rules

Never merge an agent-generated test without checking:

- Business correctness
- Meaningful assertions
- Stable and accessible selectors
- Absence of arbitrary waits
- Test independence
- Synthetic test data
- Coverage gaps
- False-positive and false-negative risk
- Impact on CI stability

## When to use agents

Use agents when you need to:

- Explore an unfamiliar flow.
- Create an initial test plan quickly.
- Generate a first draft of repetitive UI tests.
- Investigate a failing test.
- Repair a test after a controlled UI change.

Be cautious when:

- The feature involves money, security, privacy, or regulatory compliance.
- The test needs domain-specific business rules.
- The application has unstable or inaccessible markup.
- The agent proposes broad refactors or changes outside the test scope.
- You cannot explain why a proposed change fixes the failure.