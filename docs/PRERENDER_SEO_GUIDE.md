# Prerender Setup & SEO Guide

## 1. Local Setup
Since this environment doesn't have `npm` running, you'll need to install dependencies once you're in a capable environment.

### Installation
```bash
npm install
# This installs Puppeteer (added to package.json)
```

## 2. Running Prerender
We've added a convenience script to build and prerender in one go.

```bash
npm run build:prerender
```

**What this does:**
1.  `npm run build`: Builds the standard SPA to `dist/`.
2.  `npm run preview`: serves `dist/` locally.
3.  `scripts/prerender.mjs`: Launches Puppeteer, visits each route in `ROUTES`, and saves `index.html` files to `dist/<route>/index.html`.

## 3. Validation Checklist
After running `npm run build:prerender`:

1.  **Check Filesystem**:
    -   Verify `dist/about/index.html` exists.
    -   Verify `dist/admissions/index.html` exists.
    -   Verify `dist/robots.txt` and `sitemap.xml` exist.

2.  **Verify Metadata (Source Code)**:
    -   Open `dist/about/index.html` in a text editor.
    -   Look for `<title>About | S3 Academy</title>`.
    -   Look for `<meta name="description" ...>`.
    -   Ensure these tags are populated *in the static HTML*, not just by JS.

3.  **Serve & Test**:
    -   `npx serve dist`
    -   Disable JavaScript in Chrome DevTools (Command+Shift+P > "Disable JavaScript").
    -   Refresh page. Content and Title should still be visible.

## 4. Deployment
-   **Vercel/Netlify**: Configure the "Build Command" to `npm run build:prerender`.
-   **Static Hosting**: Upload the contents of the `dist` folder. The folder structure is now compatible with any typical static web server logic (checking for `folder/index.html`).
