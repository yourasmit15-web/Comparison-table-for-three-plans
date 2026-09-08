# Verification checklist

This checklist documents the manual acceptance checks for the two user-facing workflows.

## Plan comparison

- [ ] Tab through the page and confirm focus follows the visual order.
- [ ] Confirm the comparison control has a visible focus indicator.
- [ ] Toggle **Show differences only** with Enter or Space.
- [ ] Confirm the table remains understandable when differences are highlighted.
- [ ] At 320px viewport width, confirm there is no horizontal page scrolling.
- [ ] Confirm the table header and row/column relationships are exposed to assistive technology.

## Reading list

- [ ] Start with an empty browser storage state and verify the empty state explains the feature and offers the first action.
- [ ] Add an entry and confirm it persists after a refresh.
- [ ] Remove the entry and confirm the empty state returns.
- [ ] Exercise the loading state and confirm it is visually and textually distinct.
- [ ] Exercise the error state and confirm it explains what failed and the recovery action.

## Keyboard acceptance

All interactive controls must be reachable without a pointer, have a visible focus treatment, and activate using standard keyboard interaction.

## Release evidence

Record the deployed URL and the date of the manual verification in the final project submission. Keep this checklist with the repository so another reviewer can reproduce the acceptance checks.
