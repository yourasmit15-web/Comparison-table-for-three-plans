# Contributing and review guide

## Before changing the project
- Keep the comparison table semantic: use `<table>`, `<thead>`, scoped headers, and a caption.
- Preserve the mobile treatment so the interface does not require horizontal scrolling at 320px.
- Keep all interactive controls keyboard-operable with visible `:focus-visible` states.
- Preserve the reading-list empty, loading, and error demonstration URLs.

## Local verification
1. Start a static server with `python -m http.server 8000`.
2. Open `/index.html` and verify it reaches the comparison page.
3. Test the difference-only control with keyboard focus and Enter/Space.
4. Test the reading list by adding and removing an item, then refreshing to verify persistence.
5. Check `reading-list.html?state=empty`, `?state=loading`, and `?state=error`.
6. Test a 320px-wide viewport and confirm there is no horizontal page scrolling.

## Pull-request checklist
- Explain the user-visible behavior changed and why.
- Keep changes focused and avoid unrelated refactors.
- Update `README.md` when architecture, setup, limitations, or review behavior changes.
- Verify keyboard interaction and responsive behavior for affected UI.
- Document any known limitation rather than hiding it.

## Review standard
A change is ready to merge when the implementation is understandable, accessible, responsive, and demonstrably runnable by a stranger using the documented prerequisites. Reviewers should prioritize user-visible correctness, failure-state clarity, and maintainability over cosmetic changes.
