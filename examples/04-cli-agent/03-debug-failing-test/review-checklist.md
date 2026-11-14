# Failure Debug Review Checklist

Before applying the proposed fix:

- [ ] I understand the failure.
- [ ] The agent provided evidence.
- [ ] The root cause is separated from speculation.
- [ ] The fix is minimal.
- [ ] The fix does not hide a real defect.
- [ ] Assertions remain meaningful.
- [ ] No arbitrary wait was added.
- [ ] The selector is stable and accessible.
- [ ] The repaired test passes.
- [ ] I can explain the change to another engineer.