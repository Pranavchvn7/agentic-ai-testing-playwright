# Generator Output Review Checklist

Before accepting a generated test:

- [ ] It tests a real user journey.
- [ ] It has a clear, descriptive test name.
- [ ] It uses accessible selectors where possible.
- [ ] It avoids CSS classes that may change.
- [ ] It avoids arbitrary sleeps.
- [ ] It asserts meaningful outcomes.
- [ ] It verifies more than page load.
- [ ] It uses synthetic test data.
- [ ] It does not depend on another test.
- [ ] It cleans up state where needed.
- [ ] It fails when the feature is broken.
- [ ] It adds coverage not already present.