# janburghardt-portfolio

> A terminal-based portfolio powered by [Ink](https://github.com/vadimdemedes/ink). Because why open a browser when you have a shell open anyway.

```sh
npx janburghardt-portfolio
```

No install, etc. - just run it.

## Features

- Arrow-key navigation across six screens
- Neofetch-style system / identity / homelab readout
- Three themes — rainbow, matrix, amber — cycle with `t`
- Keyboard-first: every screen reachable in ≤ 2 keystrokes
- No build step — `tsx` runs JSX at runtime

## Screens

| Screen     | Contents                                                  |
| ---------- | --------------------------------------------------------- |
| Welcome    | Big-text splash + tagline                                 |
| Navigation | Arrow-key menu across all sub-screens                     |
| About      | Bio, quick facts, what I do, interests                    |
| Projects   | Active and ongoing work with status + stack               |
| Skills     | Stack by category (frontend, backend, SAP, tools & infra) |
| Fetch      | Neofetch-style dump: system, identity, homelab services   |
| Contact    | GitHub, LinkedIn, website — clickable OSC-8 links         |
| Help       | All keybindings in one place                              |

## Keybindings

| Key     | Action                                 |
| ------- | -------------------------------------- |
| `↑` `↓` | Navigate the menu                      |
| `↵`     | Select                                 |
| `ESC`   | Go back                                |
| `?`     | Show help                              |
| `t`     | Cycle theme (rainbow → matrix → amber) |
| `q`     | Quit                                   |

## Local development

Requires **Node.js 22+** (Ink 7 constraint).

```sh
git clone https://github.com/JanBur96/terminal-portfolio
cd terminal-portfolio
npm install
npm start
```

## Project structure

```
src/
├── app.jsx        Router, history stack, global keys
├── routes.js      Screen map + footer hints
├── theme.js       Theme context + palettes
├── components/    Divider, Field, ContainerBox
├── data/          Single source of truth: profile, projects, skills
└── screens/       One file per screen
```

## Make it yours

Fork it. Everything you'd change lives in `src/data/`:

- `profile.js` — bio, quick facts, fetch readout, contact
- `projects.js` — project cards
- `skills.js` — skill categories

Touch `src/screens/` only if you want to restructure the layout. Swap palettes in `src/theme.js`.

## Stack

- [Ink 7](https://github.com/vadimdemedes/ink) — React renderer for CLIs
- React 19
- `ink-big-text`, `ink-gradient`, `ink-link`, `ink-select-input`
- `tsx` runtime — no transpile, no bundler, no build folder

## License

MIT © Jan-Philipp Burghardt