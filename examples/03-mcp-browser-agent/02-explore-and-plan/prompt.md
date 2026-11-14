# MCP Exploration and Planning Prompt

```text
Use Playwright MCP to explore the ShopLite application at
http://localhost:5173.

Your objective is to understand the catalog-to-cart journey and create a
risk-based test plan.

Explore:

1. Product catalog
2. Product search
3. Category filtering
4. Product detail page
5. Add to cart
6. Cart page
7. Checkout entry

For each area, record:

- Page URL or route
- Main heading
- Key controls and their accessible names
- Important user-visible behavior
- Error, empty, loading, or edge-case states
- Potential test risks

Then create a Markdown test plan with:

- Objective
- In-scope journeys
- Out-of-scope items
- High-risk areas
- Functional scenarios
- Negative scenarios
- Boundary scenarios
- Accessibility considerations
- API and data-validation checks
- Priorities: P0, P1, P2
- Open questions

Rules:

- Do not modify files.
- Do not submit forms that create orders.
- Do not use real personal data.
- Base every statement on something you observed in the browser.
- Clearly separate observed facts from assumptions.
```