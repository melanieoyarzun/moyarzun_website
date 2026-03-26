# Quarto Migration Trial

This is a parallel migration prototype from the current Hugo site.

## Run locally

```bash
cd quarto-site
quarto preview
```

## Build

```bash
cd quarto-site
quarto render
```

## Closeread

The extension `qmd-lab/closeread` is already installed under:

- `_extensions/qmd-lab/closeread/`

The autism paper uses closeread at:

- `research/papers/autism.qmd`

## Suggested Netlify settings

- Base directory: `quarto-site`
- Build command: `quarto render`
- Publish directory: `quarto-site/_site`
