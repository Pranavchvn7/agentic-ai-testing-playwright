# Healer Output Review Checklist

Before applying a healer-proposed change:

- [ ] I understand why the test failed.
- [ ] I have evidence from the trace, screenshot, or error output.
- [ ] I know whether this is an application defect or test defect.
- [ ] The proposed change is the smallest safe fix.
- [ ] The change does not hide a real defect.
- [ ] The new selector is stable and accessible.
- [ ] The assertion remains meaningful.
- [ ] No arbitrary wait was added.
- [ ] The repaired test passes locally.
- [ ] I can explain the fix to another QA engineer.