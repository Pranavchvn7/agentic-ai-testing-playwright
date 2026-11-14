# Exercise: Planner Agent

Use the Playwright planner agent to explore ShopLite and create a test plan
for the checkout journey.

## Objective

By the end of this exercise, you should be able to:

- Use the planner agent to explore a live application.
- Review an AI-generated test plan.
- Identify missing risks, edge cases, and accessibility concerns.
- Improve the plan before test generation.

## Prerequisites

- ShopLite is running locally.
- Playwright is installed.
- You have a Playwright-compatible coding agent configured.

## Steps

1. Start ShopLite:

```bash
npm run demo
```

2. Open a second terminal and initialize the agents:

```bash
npx playwright init-agents
```

3. Use the planner prompt in `prompt.md`.

4. Save the agent’s output as `planner-output.md`.

5. Review the output using `expected-output-checklist.md`.

6. Create an improved version called `human-reviewed-plan.md`.

## Definition of done

- The planner explored the ShopLite checkout flow.
- The generated plan includes functional, negative, boundary, and risk-based scenarios.
- You identified at least three improvements to the AI-generated plan.
- You saved both the raw output and your reviewed version.