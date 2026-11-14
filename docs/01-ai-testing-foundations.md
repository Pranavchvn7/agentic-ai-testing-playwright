# AI Testing Foundations

AI can accelerate QA work, but it does not remove the tester’s responsibility
for quality, risk, evidence, and final decisions.

## What AI can help with

- Summarize requirements and identify ambiguities.
- Generate initial test ideas and test plans.
- Suggest positive, negative, boundary, and edge-case scenarios.
- Create draft test data.
- Generate first versions of automated tests.
- Explain test failures and suggest possible causes.
- Help write bug reports and release notes.
- Review tests for common quality issues.

## What AI must not decide

AI should not independently decide:

- What is acceptable quality.
- Which risks matter most.
- Whether a test has passed.
- Whether a defect should block release.
- Whether generated automation is maintainable.
- Whether sensitive data may be shared with a tool.

## The QA review mindset

Treat every AI output as a draft that must be reviewed.

Ask:

- Is the requirement understood correctly?
- Are important risks missing?
- Are the expected results specific and measurable?
- Are selectors stable and meaningful?
- Are assertions strong enough?
- Are waits necessary and appropriate?
- Does the test isolate state and clean up after itself?
- Would this test fail for the right reason?
- Does it add value beyond existing coverage?

## Common AI testing risks

| Risk | Example | Mitigation |
|---|---|---|
| Hallucinated behavior | AI invents a feature that does not exist | Verify against the application and requirements |
| Weak assertions | A test only checks that a page loaded | Assert meaningful user-visible outcomes |
| Brittle selectors | AI uses unstable CSS classes | Prefer accessible roles, labels, text, and test IDs |
| Hidden waits | AI adds arbitrary sleeps | Use Playwright’s auto-waiting and explicit conditions |
| False confidence | AI says a test suite is comprehensive | Map coverage to risks and requirements |
| Data exposure | Credentials or customer data entered into a prompt | Use synthetic data and redact sensitive information |
| Non-determinism | AI produces different results each run | Save prompts, outputs, and review decisions |

## Responsible use

Never paste API keys, passwords, tokens, production URLs, customer data, or
proprietary source code into an AI tool.

Use synthetic data, local test environments, and least-privilege access.
Review every AI-generated command, file change, and test before committing it.