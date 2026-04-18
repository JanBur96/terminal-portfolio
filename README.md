# janburghardt-portfolio

> Terminal-based portfolio powered by [Ink](https://github.com/vadimdemedes/ink). Because why open a browser when you have a terminal.

```sh
npx janburghardt-portfolio
```

## Features

- Interactive navigation with arrow keys
- Neofetch-style system/identity/homelab readout
- Clickable links in supported terminals (iTerm2, Kitty, WezTerm, Windows Terminal, …)
- Theme toggle — cycle through rainbow, matrix, and amber palettes
- Keyboard-first: every screen reachable in ≤ 2 keystrokes

## Screens

| Screen     | Contents                                                     |
| ---------- | ------------------------------------------------------------ |
| Welcome    | Splash with big-text name + tagline                          |
| Navigation | Arrow-key menu across all sub-screens                        |
| About      | Bio, quick facts, what I do, interests                       |
| Projects   | Active and ongoing work with status + stack                  |
| Skills     | Stack by category (frontend, backend, SAP, tools & infra)    |
| Fetch      | Neofetch-style dump: system, identity, homelab services      |
| Contact    | GitHub, LinkedIn, website — clickable OSC-8 links            |
| Help       | All keybindings in one place                                 |

## Keybindings

| Key       | Action                                      |
| --------- | ------------------------------------------- |
| `↑` `↓`   | Navigate the menu                           |
| `↵`       | Select                                      |
| `ESC`     | Go back                                     |
| `?`       | Show help / keybindings                     |
| `t`       | Cycle theme (rainbow → matrix → amber)      |
| `q`       | Quit                                        |

## Local development

```sh
git clone https://github.com/JanBur96/terminal-portfolio
cd terminal-portfolio
npm install
npm start
```

Source layout:

```
src/
├── app.jsx              # Router + history stack + global keys
├── routes.js            # Screen map + footer hints
├── components/          # Reusable primitives (Divider, Field, ContainerBox)
├── data/                # Single source of truth: profile, projects, skills
└── screens/             # One file per screen
```

Data lives in `src/data/` — update `profile.js`, `projects.js`, or `skills.js` to change what the portfolio shows.

## Stack

- [Ink 7](https://github.com/vadimdemedes/ink) — React renderer for CLIs
- React 19
- `ink-big-text`, `ink-gradient`, `ink-link`, `ink-select-input`
- `tsx` at runtime (no build step)

## License

MIT © Jan-Philipp Burghardt
