# CI/CD Integration

Continuous integration validates that approved, deterministic tests continue
to pass as the repository changes.

## What belongs in CI

Add a test to CI only after it is:

- Stable and repeatable.
- Independent of other tests.
- Reviewed by a human.
- Aligned with a real quality risk.
- Able to fail when the application is broken.
- Able to pass when the application works correctly.

## What does not belong directly in CI

Do not add unreviewed AI exploration directly to CI.

AI-generated tests should first be:

1. Generated or proposed by an agent.
2. Reviewed by a QA engineer.
3. Run locally.
4. Stabilized if needed.
5. Approved through a pull request.
6. Added to the regression suite.

## CI workflow

The repository uses GitHub Actions to:

1. Check out the code.
2. Install Node.js dependencies.
3. Install Playwright browsers.
4. Start the ShopLite demo environment.
5. Run the Playwright regression suite.
6. Upload the HTML report and failure traces.

## Reading CI results

| Result | Meaning | Action |
|---|---|---|
| Green | All approved tests passed | Merge only after review |
| Red | One or more approved tests failed | Investigate before merging |
| Flaky | A test passes and fails without an application change | Stabilize or quarantine the test |
| Missing artifact | Report or trace was not uploaded | Check workflow permissions and paths |

## Branch protection

For a team repository, protect `main` and require:

- A passing Playwright CI check.
- At least one approving review.
- No direct pushes to `main`.

GitHub supports required status checks and branch protection rules for this
purpose. [88][92][95]

## Local versus CI

Run tests locally before opening a pull request. CI is a safety net, not a
replacement for local verification.