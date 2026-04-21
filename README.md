# Roux Lab Website

Source for the website of the [Roux Lab](https://kghaby.github.io/roux-lab/) — Prof. Benoît Roux, Department of Biochemistry and Molecular Biology, The University of Chicago. Built with [Gatsby](https://www.gatsbyjs.com/) and deployed to GitHub Pages.

## About the Lab

The Roux group develops and applies theoretical and computational methods for studying biological macromolecules. Research spans molecular dynamics simulations, free energy calculations, enhanced sampling, and continuum electrostatics, applied to ion channels, membrane transporters, protein kinases, and signaling complexes.

## Live Site

Deployed at: **https://kghaby.github.io/roux-lab/**

Every push to `main` triggers the GitHub Actions workflow in `.github/workflows/gatsby.yml`, which builds the site and publishes it to GitHub Pages. No manual deploy step is needed.

## Editing via GitHub (no local setup)

You can edit directly in the browser:

1. Navigate to the file on [github.com](https://github.com/kghaby/roux-lab) (e.g. `src/data/membersData.js`).
2. Click the pencil icon → edit → commit to `main` (or open a Pull Request).
3. The Actions tab will show the build progressing. Once green (~2–5 min), the change is live.

To replace/add an image: drop it into the relevant folder (e.g. `src/images/`) via the GitHub UI's "Add file → Upload files" button. Make sure it is referenced properly from the intended page/data.
> For member images, add an "imgName" attribute for the member's section in `src/data/membersData.js`

## Local development

### Prerequisites
- [Node.js](https://nodejs.org/) ≥ 18 
- `npm` (bundled with Node) or `yarn`
- `git`

### Setup
```bash
git clone https://github.com/kghaby/roux-lab.git
cd roux-lab
npm install
```

### Run the dev server (hot reload)
```bash
npm run develop
```
Opens at `http://localhost:8000/`. Edits to source files reload automatically. GraphQL explorer at `http://localhost:8000/___graphql`.

### Preview a production build
```bash
npm run build
npm run serve
```
Serves the `public/` output at `http://localhost:9000/`. Use this to catch issues that only appear in the built site (broken image paths, missing assets, etc.).

### Submitting changes

**Option 1** — commit directly to `main`:
```bash
git add -A && git commit -m ""
git push origin main
```

**Option 2** — use a branch and pull request so the change can be reviewed and the public build checked before going live:
```bash
git checkout -b 
# ...edit...
git add -A && git commit -m ""
git push origin 
```
Then open a PR against `main` on GitHub. Merging triggers auto-deploy.

## Repository layout

```
├── .github/workflows/gatsby.yml   # Continuous Integration (CI): build + deploy to GitHub Pages
├── gatsby-config.js               # site metadata, plugins, pathPrefix
├── gatsby-node.js                 # programmatic page creation
├── src/
│   ├── data/                      # page content (people, methods, gallery entries, etc.) (JS/JSON modules consumed by pages)
│   ├── pages/                     # top-level routes (one file = one page)
│   ├── components/                # reusable UI pieces (header, footer, etc.)
│   ├── images/                    # imported assets (group photos, gallery photos, etc.)
│   └── templates/                 # layouts for dynamically generated pages
├── static/                        # verbatim-copied assets (PDFs, CNAME, etc.)
├── content/                       # markdown content (if used)
└── public/                        # build output — .gitignored
```

### Common edit targets
| What to change          | Where                                                         |
| ----------------------- | ------------------------------------------------------------- |
| People / group roster   | `src/data/membersData.js`                                     |
| Gallery                 | `src/data/gallery/`                                           |
| Method descriptions     | `src/data/methods/`                                           |
| Research descriptions   | `src/data/research/`                                          |
| Site title, nav, footer | `gatsby-config.js` (metadata), `src/components/`              |
| Images                  | `src/images/` for imported use; `static/` for direct-URL use  |

<!-- | Publications            | `src/data/publications.js`   | -->
<!-- | News / announcements    | `src/data/news.js`                     | -->

## Deployment details

The workflow (`.github/workflows/gatsby.yml`) runs on every push to `main`:
1. Checkout + Node 20 + dependency install (`npm ci`)
2. `configure-pages` injects the correct `pathPrefix` automatically (via `PREFIX_PATHS=true`)
3. `gatsby build` → `public/`
4. Artifact uploaded and deployed to the `github-pages` environment

**Pages source** must be set to "GitHub Actions" under `Settings → Pages`. The legacy `gh-pages` branch is no longer used.

<!-- ### Custom domain
Place a single-line `CNAME` file in `static/` with the domain (e.g. `rouxlab.uchicago.edu`). Gatsby copies it verbatim into the build output. -->

## Troubleshooting

- **Images 404 on `npm run serve`** — you likely built with `--prefix-paths`. Delete `public/` and `.cache/`, then `npm run build && npm run serve` without the flag.
- **Build fails on CI with `npm ci` error** — `package-lock.json` missing or out of sync. Run `npm install` locally and commit the updated lockfile.
- **Live site shows old content** — check the Actions tab; deploy may still be in progress or failed. Hard-refresh (Ctrl+Shift+R) to bypass browser cache.
- **`gatsby` command not found locally** — run via npm scripts (`npm run develop`), or use `npx gatsby develop`.

## Tech stack

Gatsby 5 · React 18 · GraphQL · GitHub Actions · GitHub Pages

## Contact

Questions about the site: open an issue on this repo.
Questions about the lab's research: see the [lab website](https://kghaby.github.io/roux-lab/) or contact Prof. Roux directly.