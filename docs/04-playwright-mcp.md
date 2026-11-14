# Playwright MCP

Playwright MCP is a Model Context Protocol server that gives an MCP-capable
AI client browser automation capabilities through Playwright.

Instead of relying only on screenshots or vision, the agent can interact with
a live browser and use structured accessibility snapshots to understand the
page.

## Why this matters for QA

MCP enables an agent to:

- Open a browser and navigate an application.
- Read page structure through accessibility snapshots.
- Click, type, select, and navigate.
- Observe application behavior.
- Collect evidence for test planning.
- Generate draft Playwright tests.
- Help investigate test failures.

## What MCP does not replace

A human QA engineer still owns:

- Test strategy and risk assessment.
- Business-rule validation.
- Final approval of automated tests.
- Root-cause analysis.
- Accessibility judgment.
- Security and privacy decisions.
- Release decisions.

## MCP versus traditional automation

| Area | Traditional Playwright | MCP-driven agent |
|---|---|---|
| Primary input | Human-written test code | Natural-language objective |
| Browser interaction | Scripted steps | Agent-driven exploration |
| Page understanding | Selectors and test code | Accessibility snapshots and tools |
| Output | Deterministic test run | Plan, evidence, draft tests, proposed fixes |
| Repeatability | High | Variable without guardrails |
| Best use | Regression and CI | Exploration, planning, investigation |

## Guardrails

Use MCP agents in a controlled local environment.

- Use synthetic data only.
- Do not provide production credentials or customer data.
- Do not allow automatic commits or merges.
- Review every proposed file change.
- Run tests locally before merging.
- Keep generated exploration artifacts out of the regression suite until reviewed.
- Treat agent observations as evidence, not as proof of correctness.

## Recommended workflow

1. Start ShopLite.
2. Configure Playwright MCP in your AI client.
3. Give the agent one narrow objective.
4. Ask it to explore and document observed behavior.
5. Ask it to create a test plan.
6. Review the plan against risks and requirements.
7. Ask it to generate one focused test.
8. Review selectors, assertions, waits, and coverage.
9. Run the test locally.
10. Promote only stable, approved tests into the regression suite.