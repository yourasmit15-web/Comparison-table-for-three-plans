# Comparison table for three plans

Accessible responsive comparison UI plus a persistent personal reading list.

## What is included
- `index.html`: deployment entry point that opens the comparison experience.
- `compare.html` + `styles.css`: the rebuilt three-plan comparison experience.
- `reading-list.html` + `reading-list.css` + `reading-list.js`: personal reading list backed by browser `localStorage`.
- `CONTRIBUTING.md`: contributor, review, and verification checklist.
- `?state=loading`, `?state=error`, and `?state=empty` make loading, failure, and empty states demonstrable without changing code.

## Architecture and decisions
This is a dependency-free static web app. HTML provides semantic structure, CSS handles responsive presentation, and vanilla JavaScript owns comparison state and reading-list persistence.

The desktop comparison uses a real semantic `<table>` with captions, column headers, row headers, and a native button for the difference filter. On narrow screens the table is replaced with stacked plan cards. This avoids horizontal scrolling at 320px while preserving the same information in a linear reading order. The filter hides identical feature rows/cards rather than relying on color alone.

The reading list uses `localStorage` as its persistent store, so entries survive refreshes and browser restarts on the same device/browser. Add and Remove are native keyboard-operable controls with visible focus styles.

## Run locally
Prerequisites: any modern browser and Python 3 for the recommended local server. No package manager, build tool, framework, or environment variables are required.

Recommended local server:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/` for the comparison page or `http://localhost:8000/reading-list.html` for the reading list.

Alternatively, serve the repository with any static-file server. Opening the HTML files directly also works, although browser storage/security behavior can differ between browsers.

## Demonstrating states
- Empty: `reading-list.html?state=empty`
- Loading: `reading-list.html?state=loading`
- Error: `reading-list.html?state=error`
- Normal persistent list: `reading-list.html`

The normal empty state explains the feature and provides the first action. The error state explains what failed and how to recover. The loading state is intentionally delayed so it is easy to demonstrate during review.

## Keyboard and accessibility
Use Tab/Shift+Tab to move through navigation links, form controls, buttons, and saved-item links in visual order. All interactive controls are native elements and have visible `:focus-visible` treatment. The comparison table uses semantic headers and a caption for assistive technology. Reduced-motion preferences are respected.

## Rebuilt feature and comparison
The comparison experience was rebuilt with a stronger mobile treatment and explicit keyboard/focus accessibility. The original source is retained in Git history for comparison. The rebuilt version is better at 320px: it avoids horizontal scrolling by switching from the wide table to readable stacked plan cards.

## Limitations / known issues
- Reading-list data is local to one browser/device; it is not synchronized across accounts or devices.
- There is no authentication or remote database.
- The error state is a deterministic demonstration state rather than a simulated network failure.
- A production version would validate remote URLs and could replace `localStorage` with an authenticated API.

## Deployment
The repository is static and can be deployed directly to Netlify, Vercel, GitHub Pages, or any static host. A verified deployment is available at `https://comparison-table-for-three-plans-zlgnj8.v2.appdeploy.ai/`.

## Professional-practice review checklist
- Accessible semantic comparison table and mobile treatment: implemented.
- Difference-only interaction: implemented with a native keyboard-operable button.
- Persistent reading list with add/remove: implemented with `localStorage`.
- Demonstrable empty/loading/error states: implemented with query-state URLs.
- Stranger-runnable setup and exact prerequisites: documented above.
- Architecture, decisions, limitations, and project history: documented above.
- Three merged pull requests in this repository: PRs #1, #2, and #3.
- Five substantive contributions to other repositories: not claimed here; this is an external contribution requirement and must be evidenced by genuine contributions on the user's GitHub account.

## Project history
The Git history separates the responsive/accessibility work, reading-list functionality, documentation, deployment fix, and review improvements so the evolution of the implementation is reviewable.
