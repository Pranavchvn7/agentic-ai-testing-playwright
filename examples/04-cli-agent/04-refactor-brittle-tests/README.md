# Exercise: Refactor Brittle Playwright Tests

Use a CLI agent to identify and refactor brittle test patterns without
changing application behavior.

## Objective

By the end of this exercise, you should be able to:

- Identify common test-quality problems.
- Ask an agent for a prioritized refactoring plan.
- Review and apply a small, safe refactor.
- Preserve or improve test coverage.

## Steps

1. Create a branch:

```bash
git checkout -b refactor/brittle-tests
```

2. Use the prompt in `prompt.md`.

3. Save the agent response as `refactoring-plan.md`.

4. Review the plan with `review-checklist.md`.

5. Apply one improvement at a time.

6. Run the affected tests after each change.

7. Commit each logical improvement separately.

## Definition of done

- The agent identifies concrete quality issues.
- The refactor plan is prioritized.
- At least one brittle pattern is improved.
- Test behavior and coverage are preserved or improved.
- The affected tests pass.