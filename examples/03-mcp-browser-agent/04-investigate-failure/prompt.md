# MCP Failure Investigation Prompt

```text
A Playwright test is failing against ShopLite.

Use Playwright MCP to investigate the failure.

Your objective is to determine whether this is an application defect or a
test defect.

Steps:

1. Open the application.
2. Follow the test steps manually through the browser.
3. Observe the actual behavior.
4. Compare it with the test’s expected behavior.
5. Identify the most likely root cause.
6. List the evidence supporting your conclusion.
7. Recommend the smallest safe next action.

Do not modify files.
Do not submit an order.
Do not use real personal data.

Clearly separate:

- Observed facts
- Assumptions
- Possible root causes
- Recommended action
```