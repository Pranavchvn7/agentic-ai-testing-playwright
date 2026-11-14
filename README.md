# Agentic AI Testing with Playwright

A practical, hands-on learning lab for QA engineers who want to use AI
responsibly across the testing lifecycle.

This repository covers three complementary approaches:

1. **AI-assisted testing** — use LLMs for test planning, test design, test-data
   generation, review, and bug-triage support.
2. **MCP-based agentic testing** — let an AI agent interact with a real browser
   through Playwright MCP.
3. **CLI-based agentic testing** — use terminal AI agents to inspect a
   repository, run tests, analyze failures, and propose safe improvements.

The goal is not to replace QA judgment with AI. It is to help testers use AI
as a capable assistant while retaining ownership of test strategy, quality
risks, evidence, and final decisions.

## Who this is for

This repository is for:

- Manual QA engineers moving into automation.
- Automation engineers exploring AI-driven testing workflows.
- QA leads evaluating AI tools and guardrails.
- Developers and SDETs who want practical, test-focused AI examples.
- Anyone learning Playwright, MCP, and agentic AI workflows.

## What you will learn

By completing the exercises, you will be able to:

- Create risk-based test plans with AI assistance.
- Generate and critically review Playwright tests.
- Use Playwright Test Agents for planning, generation, and healing.
- Use Playwright MCP to explore a live application and produce test evidence.
- Use CLI-based AI agents to investigate test failures and improve test suites.
- Recognize the risks, limitations, and review requirements of AI-generated work.
- Build a maintainable automation project with documentation and CI.
- Build and test a complete e-commerce user journey.
- Use Playwright for UI, API, accessibility, and regression testing.

## Current ShopLite features

ShopLite currently supports:

- Product catalog
- Product detail pages
- Add to cart
- Cart state and item count
- Cart page with quantity updates and item removal
- Subtotal, tax, shipping, and total calculation
- Empty-cart state
- Playwright smoke and cart regression tests
- GitHub Actions CI with Playwright reports and traces
- Accessibility scans with axe-core
- Keyboard-navigation coverage
- Visual regression baselines for catalog and cart
- Intentional accessibility defect exercise
- Test-maintenance exercise

## In progress

- Checkout form and validation
- Coupon code handling
- Order creation
- Order confirmation page
- Cart clearing after successful checkout
- API failure and duplicate-submission scenarios
- Advanced AI evaluation case studies
- MCP client compatibility matrix
- Performance and reliability exercises

## Repository roadmap

| Phase | Module | Status |
|---|---|---|
| 0 | Repository foundation | Complete |
| 1 | Demo application | Complete |
| 2 | AI-assisted QA workflow | Complete |
| 3 | Playwright Test Agents | Complete |
| 4 | Playwright MCP | Complete |
| 5 | CLI-based AI agents | Complete |
| 6 | CI, evaluation, and launch | Complete |
| 7 | ShopLite checkout journey | In progress |
| 8 | Advanced AI testing modules | Planned |

## Planned structure

```text
agentic-ai-testing-playwright/
├── README.md
├── docs/
│   ├── 01-ai-testing-foundations.md
│   ├── 02-playwright-test-agents.md
│   ├── 03-playwright-mcp.md
│   ├── 04-cli-agents.md
│   ├── 05-prompt-library.md
│   ├── 06-evaluation-and-guardrails.md
│   └── 07-ci-cd-integration.md
├── examples/
│   ├── 01-test-plan-generation/
│   ├── 02-playwright-agents/
│   ├── 03-mcp-browser-agent/
│   └── 04-cli-agent/
├── prompts/
│   ├── planner.md
│   ├── test-case-design.md
│   ├── generator.md
│   ├── reviewer.md
│   ├── test-data.md
│   ├── exploratory-testing.md
│   └── bug-triage.md
├── demo-app/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   └── workflows/
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── SECURITY.md
└── LICENSE
```

## Principles

- **Human accountability:** AI can propose, but humans approve.
- **Evidence over claims:** Every exercise should show inputs, outputs, review notes, and test results.
- **Reproducibility:** Learners should be able to run examples locally with clear instructions.
- **Safety first:** Never commit credentials, customer data, private source code, or confidential test assets.
- **Maintainability:** AI-generated tests must meet the same quality standards as human-written tests.
- **Determinism in CI:** Use AI for exploration and proposal; stabilize approved tests before adding them to regression suites.

## Responsible AI use

Do not paste secrets, API keys, tokens, customer data, production URLs, or
proprietary code into AI tools.

Treat AI output as a draft:

- Verify business rules and expected behavior.
- Check selectors, waits, assertions, and test isolation.
- Confirm accessibility and error-state coverage.
- Run tests locally before merging.
- Review every change before committing or opening a pull request.

## Contributing

Contributions are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for ways to
help with documentation, exercises, prompts, demo-app improvements, and
AI-tool compatibility.

## License

Released under the [MIT License](LICENSE).