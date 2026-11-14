# AI Output Evaluation and Guardrails

AI can accelerate QA work, but its output must be evaluated before it becomes
part of a test suite, bug report, or release decision.

## Evaluation dimensions

| Dimension | Question | Evidence to collect |
|---|---|---|
| Accuracy | Does the output match observed behavior? | App screenshots, traces, API responses |
| Completeness | Are important risks and scenarios covered? | Requirement and risk matrix |
| Correctness | Are assertions and expected results right? | Test results and business rules |
| Maintainability | Can another engineer understand and maintain it? | Code review |
| Stability | Is the test deterministic? | Repeated local and CI runs |
| Accessibility | Are labels, roles, and keyboard paths usable? | Accessibility checks |
| Security | Could sensitive data be exposed? | Prompt and repository review |
| Value | Does this add coverage or reduce risk? | Coverage map and defect analysis |

## AI output quality checklist

Before accepting AI-generated work:

- [ ] The objective is clear.
- [ ] The output is based on evidence.
- [ ] Claims are separated from assumptions.
- [ ] Business rules are verified.
- [ ] Assertions are meaningful.
- [ ] Selectors are stable and accessible.
- [ ] No arbitrary waits are used.
- [ ] Test data is synthetic and safe.
- [ ] Tests are independent.
- [ ] The change is minimal and understandable.
- [ ] The tests pass locally.
- [ ] The work adds valuable coverage.
- [ ] Sensitive data was not exposed.
- [ ] A human approved the final change.

## Common failure patterns

| Pattern | Risk | Better approach |
|---|---|---|
| Generic assertions | Tests pass even when the feature is broken | Assert user-visible outcomes |
| Hard waits | Slow and flaky tests | Use Playwright auto-waiting and explicit conditions |
| CSS-only selectors | Tests break after UI changes | Prefer roles, labels, text, and test IDs |
| Broad refactors | Hard-to-review changes | Make small, focused changes |
| Invented coverage | False confidence | Map coverage to requirements and risks |
| Silent data exposure | Privacy and security risk | Use synthetic data and review prompts |
| Auto-accepted fixes | Hidden defects | Require evidence and human approval |

## Human accountability

AI may suggest a test, identify a possible defect, or propose a repair.
A human remains responsible for:

- Verifying the evidence.
- Deciding whether the issue is real.
- Approving the change.
- Ensuring the test suite remains trustworthy.
- Making release recommendations.