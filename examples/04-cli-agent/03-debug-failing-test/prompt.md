# Failure Debugging Prompt

```text
The following Playwright test is failing.

Investigate the failure using the test output, trace, screenshots, video, and
relevant source files.

Do not modify any files yet.

Identify:

1. Exact failing test and step
2. Full error message
3. Evidence from test artifacts
4. Most likely root cause
5. Alternative possible causes
6. Whether this is an application defect or test defect
7. The smallest safe test repair
8. Risks of the proposed repair
9. Additional investigation needed

Rules:

- Do not claim a root cause without evidence.
- Do not add arbitrary waits.
- Do not weaken assertions just to make the test pass.
- Do not change application source code unless explicitly requested.
- Explain your reasoning before proposing a change.
```