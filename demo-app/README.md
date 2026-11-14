# ShopLite Demo App

ShopLite is a small e-commerce application built for QA learning exercises
in this repository.

It provides realistic shopping workflows without using real payments,
production systems, or personal data.

## Features

- Product catalog
- Search, category filter, and sorting
- Product details
- Cart management
- Checkout form validation
- Simulated order creation
- Controlled edge cases for QA practice

## Quick start

From the repository root:

```bash
npm install
npm run demo:install
npm run demo
```

Open:

```text
http://localhost:5173
```

API base URL:

```text
http://localhost:4000
```

## Demo credentials

These are synthetic credentials for local testing only.

| Role | Email | Password |
|---|---|---|
| Customer | demo@shoplite.test | Test@1234 |
| Admin | admin@shoplite.test | Admin@1234 |

Do not use real credentials or personal data with this application.

## Intentional defects

Some behavior is intentionally imperfect so learners can practice exploratory
testing, bug reporting, API testing, and automation.

See `../docs/demo-app-known-issues.md` after attempting the exercises.