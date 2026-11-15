# Agentic AI Testing with Playwright

[![Playwright Tests](https://github.com/<Pranavchvn7>/agentic-ai-testing-playwright/actions/workflows/playwright.yml/badge.svg)](https://github.com/<Pranavchvn7>/agentic-ai-testing-playwright/actions/workflows/playwright.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-LTS-green.svg)](https://nodejs.org/)

A hands-on learning lab for QA engineers exploring **AI-assisted testing**,
**Playwright Test Agents**, **Playwright MCP**, and **CLI-based AI agents**.

The repository includes **ShopLite**, a small React + Express e-commerce
application, and a Playwright regression suite covering UI journeys, APIs,
accessibility, visual quality, coupons, checkout, and test maintenance.

> **Goal:** Use AI as a capable testing assistant—not as a replacement for QA
> judgment, test strategy, evidence, or final quality decisions.

## Table of contents

- [Why this project matters](#why-this-project-matters)
- [What you will learn](#what-you-will-learn)
- [ShopLite demo application](#shoplite-demo-application)
- [Test coverage](#test-coverage)
- [Quick start](#quick-start)
- [Run focused tests](#run-focused-tests)
- [CI and test reports](#ci-and-test-reports)
- [Learning paths](#learning-paths)
- [Repository structure](#repository-structure)
- [Project status](#project-status)
- [Lessons learned](#lessons-learned)
- [Responsible AI use](#responsible-ai-use)
- [Contributing](#contributing)
- [License](#license)

## Why this project matters

AI can accelerate test planning, test generation, failure analysis, and
documentation. But generated tests still need human review: they can use
ambiguous selectors, make incorrect assumptions, miss edge cases, or create
tests that are unstable in CI.

This repository teaches a practical workflow:

1. Define a quality risk or user journey.
2. Use AI to propose test ideas, data, or automation.
3. Review the proposal against business rules and technical constraints.
4. Run the tests and inspect traces, reports, and application behavior.
5. Improve and stabilize the tests before adding them to regression coverage.

## What you will learn

- Create risk-based test plans with AI assistance.
- Generate and critically review Playwright tests.
- Use Playwright Test Agents for planning, generation, and healing.
- Use Playwright MCP to explore a live application and collect evidence.
- Use CLI-based AI agents to investigate failures and improve test suites.
- Build reliable UI, API, accessibility, and visual regression tests.
- Recognize the risks and review requirements of AI-generated work.
- Maintain tests after intentional product changes.
- Build a maintainable automation project with documentation and CI.

## ShopLite demo application

ShopLite is a lightweight demo e-commerce application built with React and
Express. It provides a realistic but manageable target for learning modern
web testing.

### Customer journey

```text
Catalog
  → Product details
  → Add to cart
  → Cart
  → Checkout
  → Order confirmation
```

### Supported functionality

- Product catalog and product-detail pages
- Add-to-cart and cart item count
- Quantity updates and item removal
- Subtotal, tax, shipping, and total calculations
- Empty-cart state
- Checkout form and order creation
- Order-confirmation page
- Coupon validation and discount calculation
- Duplicate-order-submission protection
- Controlled API-failure scenario

## Test coverage

| Area | Coverage |
|---|---|
| Smoke testing | Catalog loading and core navigation |
| Cart testing | Add to cart, item count, quantity updates, removal |
| Checkout testing | Successful checkout, empty cart, order confirmation |
| Coupon testing | Valid coupon, expired coupon, invalid coupon |
| Order integrity | Duplicate-order protection |
| API testing | Product list, product details, unknown product, controlled failure |
| Accessibility | axe-core scans, accessible labels, keyboard navigation |
| Visual quality | Catalog and cart visual regression baselines |
| Test maintenance | Controlled UI-change and failure-investigation exercise |

## Quick start

### Prerequisites

- Node.js LTS
- npm
- Git

### Install dependencies

```bash
npm install
npm run demo:install
```

### Start ShopLite

```bash
npm run demo
```

The client runs at:

```text
http://localhost:5173
```

The API runs at:

```text
http://localhost:4000
```

### Run all tests

In a second terminal:

```bash
npx playwright test
```

### View the HTML report

```bash
npx playwright show-report
```

## Run focused tests

Run only smoke tests:

```bash
npx playwright test tests/smoke.spec.ts
```

Run cart tests:

```bash
npx playwright test tests/cart.spec.ts
```

Run checkout tests:

```bash
npx playwright test tests/checkout.spec.ts
```

Run coupon tests:

```bash
npx playwright test tests/coupons.spec.ts
```

Run API tests:

```bash
npx playwright test tests/api/products.spec.ts
```

Run accessibility tests:

```bash
npx playwright test tests/accessibility
```

Run visual regression tests:

```bash
npx playwright test tests/visual
```

Run a test repeatedly to check stability:

```bash
npx playwright test tests/cart.spec.ts --repeat-each=5
```

## CI and test reports

The GitHub Actions workflow:

- Installs root and demo-app dependencies
- Installs Playwright browsers
- Runs the full Playwright regression suite
- Uploads the Playwright HTML report
- Uploads traces when the test run fails

You can download the `playwright-report` artifact from any completed workflow
run under the **Actions** tab.

The visual snapshot workflow is intentionally manual. It generates
platform-specific Linux baselines in the same environment used by CI, so
visual comparisons remain consistent.

## Learning paths

### Manual QA to automation

Start with:

1. `docs/01-ai-testing-foundations.md`
2. `examples/01-test-plan-generation/`
3. `prompts/planner.md`
4. `prompts/test-case-design.md`

### Playwright and AI-generated tests

Continue with:

1. `examples/02-playwright-agents/`
2. `prompts/generator.md`
3. `prompts/reviewer.md`
4. `docs/02-playwright-test-agents.md`

### Browser-based AI agents

Explore:

1. `examples/03-mcp-browser-agent/`
2. `docs/03-playwright-mcp.md`
3. `prompts/exploratory-testing.md`

### CLI agents and maintenance

Finish with:

1. `examples/04-cli-agent/`
2. `examples/06-test-maintenance/`
3. `docs/04-cli-agents.md`
4. `prompts/bug-triage.md`

## Repository structure

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
│   ├── 04-cli-agent/
│   └── 06-test-maintenance/
├── prompts/
│   ├── planner.md
│   ├── test-case-design.md
│   ├── generator.md
│   ├── reviewer.md
│   ├── test-data.md
│   ├── exploratory-testing.md
│   └── bug-triage.md
├── tests/
│   ├── api/
│   ├── accessibility/
│   ├── visual/
│   ├── smoke.spec.ts
│   ├── cart.spec.ts
│   ├── checkout.spec.ts
│   ├── coupons.spec.ts
│   └── order-duplicate.spec.ts
├── demo-app/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   └── workflows/
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── SECURITY.md
└── LICENSE
```

## Project status

| Phase | Module | Status |
|---|---|---|
| 0 | Repository foundation | Complete |
| 1 | Demo application | Complete |
| 2 | AI-assisted QA workflow | Complete |
| 3 | Playwright Test Agents | Complete |
| 4 | Playwright MCP | Complete |
| 5 | CLI-based AI agents | Complete |
| 6 | CI, evaluation, and launch | Complete |
| 7 | ShopLite checkout journey | Complete |
| 8 | Advanced AI testing modules | Planned |

### Completed quality capabilities

- Checkout, coupons, and order confirmation
- Duplicate-order protection
- API regression coverage
- Controlled API-failure scenario
- Accessibility scans and keyboard navigation
- Visual regression baselines
- CI reporting and trace artifacts
- Test-maintenance exercise

### Planned enhancements

- Advanced AI evaluation case studies
- MCP client compatibility matrix
- Performance and reliability exercises
- Additional AI-agent benchmark examples

## Lessons learned

- A passing retry does not prove that a test is stable. Investigate the first
  failure and address the underlying selector, timing, or state issue.
- Accessible names can include text from nested elements. An image with alt
  text inside a heading becomes part of that heading’s accessible name.
- Use precise, role-based, or scoped locators when text-based locators can
  match multiple elements.
- Browser-context isolation does not automatically reset backend in-memory
  state. Tests that create orders need unique data or explicit state isolation.
- Visual baselines are platform- and browser-specific. Generate Linux baselines
  in the same Linux environment used by CI.
- AI-generated tests are useful drafts, not final quality decisions. Review
  selectors, assertions, test data, isolation, and business rules.

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
help with documentation, exercises, prompts, demo-app improvements, and AI-tool
compatibility.

## License

Released under the [MIT License](LICENSE).