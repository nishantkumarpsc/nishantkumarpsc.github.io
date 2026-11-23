# Nishant Kumar — academic website

A simple, responsive personal academic website built as plain HTML, CSS, and JavaScript. It has no build step or runtime dependencies.

## Local preview

Run a static server from this directory:

```bash
python3 -m http.server 4173 --directory dist
```

Then open `http://localhost:4173`.

## GitHub Pages

The included GitHub Actions workflow deploys the contents of `dist/` to GitHub Pages whenever `main` is updated. In the repository settings, choose **GitHub Actions** as the Pages source if GitHub does not select it automatically.

## Structure

- `dist/` contains the complete static website and downloadable CV.
- `.github/workflows/pages.yml` contains the GitHub Pages deployment workflow.
- `.openai/hosting.json` is used only for the private Sites preview/deployment.
