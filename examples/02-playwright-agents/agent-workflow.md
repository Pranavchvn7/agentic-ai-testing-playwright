# Recommended Agent Workflow

## Before using an agent

1. Start ShopLite.
2. Identify one feature or user journey.
3. Define the scope and success criteria.
4. Decide what evidence you need.
5. Create a dedicated Git branch.

## During agent work

1. Give the agent a narrow objective.
2. Ask for evidence before changes.
3. Review every proposed file change.
4. Run the affected tests locally.
5. Keep AI-generated drafts separate from approved regression tests.

## After agent work

1. Review the diff.
2. Run the full relevant test suite.
3. Check for flakiness.
4. Document accepted, changed, and rejected suggestions.
5. Open a pull request with a clear explanation.

## Example branch names

```text
feat/agent-checkout-plan
feat/agent-checkout-tests
fix/healer-cart-total-test
```

## Example commit messages

```text
test(checkout): add agent-generated checkout happy-path draft

docs(agents): add planner and generator exercises

fix(checkout): update product assertion after healer investigation
```