# Exercise: Investigate a Failing Test with MCP

Use Playwright MCP to investigate a failing test and determine whether the
issue is an application defect or a test defect.

## Objective

By the end of this exercise, you should be able to:

- Use MCP evidence during failure investigation.
- Distinguish application defects from test defects.
- Document a root cause with evidence.
- Avoid accepting a fix that hides a real problem.

## Steps

1. Start ShopLite.
2. Run a failing test from the Playwright suite.
3. Use the prompt in `prompt.md`.
4. Save the agent response as `mcp-investigation.md`.
5. Review the response with `review-checklist.md`.
6. Decide whether to fix the test, report an application defect, or both.
7. Document the decision and evidence.

## Definition of done

- The failure is reproduced.
- Evidence is collected from the browser and test artifacts.
- The root cause is clearly separated from speculation.
- A decision is documented.
- No unreviewed application or test change is merged.