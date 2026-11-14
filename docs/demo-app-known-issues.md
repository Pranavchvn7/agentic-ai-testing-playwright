# ShopLite Known Issues

This document lists intentionally included defects and edge cases.

Do not read this before attempting the exploratory-testing exercises if you
want to practice discovery.

## Intentional QA scenarios

| Area | Scenario | Expected learning outcome |
|---|---|---|
| Search | Leading/trailing spaces may prevent results | Input normalization |
| Quantity | Invalid quantities may be accepted through some UI paths | Boundary validation |
| Coupons | `SAVE10` applies; `EXPIRED10` returns an expiry error | Positive and negative testing |
| Checkout | Rapid duplicate submissions may create duplicate orders | Race conditions and idempotency |
| API | A special product ID returns a controlled server error | Error handling |
| Accessibility | An image may lack alt text; a control may have a poor accessible name | Accessibility auditing |
| Cart | Rapid quantity updates may briefly show an incorrect total | Timing and UI-state consistency |

## Rules

- These defects are for learning only.
- Do not submit security vulnerabilities from this app to third parties.
- Do not use real payment credentials or personal data.
- Document findings with reproduction steps, evidence, severity, and expected behavior.