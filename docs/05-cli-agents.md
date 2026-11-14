# CLI-Based AI Agents

CLI-based AI agents work directly with a repository, terminal commands, files,
test output, and version-control workflows.

Unlike an MCP browser agent, a CLI agent does not primarily interact with a
live browser. It inspects code, runs commands, reads test results, and proposes
changes.

## What a CLI agent can help with

- Understand an unfamiliar repository.
- Identify test files, fixtures, helpers, and configuration.
- Run Playwright tests.
- Analyze failing tests and test artifacts.
- Find flaky patterns, weak assertions, and brittle selectors.
- Propose focused refactors.
- Create a branch and prepare a pull request.
- Explain a code change and its risks.

## What a CLI agent must not do without approval

A CLI agent should not independently:

- Merge code.
- Push directly to `main`.
- Delete branches, files, or test artifacts without confirmation.
- Change application behavior without a clear request.
- Add broad or unnecessary dependencies.
- Commit secrets or generated artifacts.
- Bypass failing tests.
- Make large refactors without a plan.

## Safety rules

- Work on a dedicated branch.
- Review every diff before committing.
- Run tests locally before pushing.
- Do not auto-approve destructive shell commands.
- Keep secrets, tokens, and environment files out of prompts and commits.
- Ask the agent for evidence before accepting a root cause.
- Require a minimal change rather than a broad rewrite.
- Treat agent output as a proposal, not a decision.

## Recommended workflow

1. Define one narrow objective.
2. Start from a clean branch.
3. Ask the agent to inspect before changing anything.
4. Ask it to run the relevant tests.
5. Ask for evidence and a root-cause hypothesis.
6. Ask for the smallest safe fix.
7. Review the diff.
8. Run tests again.
9. Commit with a clear message.
10. Open a pull request for review.