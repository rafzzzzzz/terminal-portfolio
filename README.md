# Rafael Marques terminal portfolio

A bilingual terminal-style portfolio for Rafael Marques, an IT teacher
transitioning into systems administration. The portfolio covers teaching and
classroom lab work, a personal Unraid home lab, and the AirSense project. It
does not present classroom or personal work as production administration.

The deployed site is available at
[rafzzzzzz.github.io/terminal-portfolio](https://rafzzzzzz.github.io/terminal-portfolio/).

## Features

- Responsive terminal interface
- English and European Portuguese copy with a persistent language switch
- Clickable commands for visitors who do not use terminals
- Autocomplete with `Tab` or `Ctrl+I`
- Command history and keyboard navigation
- Seven color themes, including Catppuccin Mocha
- PWA and offline support
- Vitest test suite

The welcome screen immediately shows Rafael's location, current role, and
technical focus. Type `help` in the terminal to see all available commands.
Direct commands include `github`, `homelab`, and `contact`.

## Development

```bash
pnpm install
pnpm dev
```

Run the checks:

```bash
pnpm test:once
pnpm lint
pnpm format:check
pnpm build
```

## Deployment

The workflow in `.github/workflows/deploy-pages.yml` builds the site and deploys
the `dist` directory to GitHub Pages. Vite uses `/terminal-portfolio/` as its
base path, including for PWA assets. The repository does not use a custom
domain or a `CNAME` file.

## Credits and licence

This repository is a personalized fork of
[Sat Naing's terminal portfolio](https://github.com/satnaing/terminal-portfolio),
released under the MIT License.

## Author

[Rafael Marques](https://github.com/rafzzzzzz)
