# fleet-config — CLAUDE.md

> Ownership: OURS (borntojesus personal fleet).

Fleet-wide shared toolchain config package: Prettier presets (`prettier.json`,
`prettier-tailwind.json`), flat ESLint base (`eslint/base.mjs`), and tsconfig
bases (`tsconfig/base.json`, `tsconfig/next.json`). Consumed as a git
dependency `fleet-config@github:borntojesus/fleet-config` by ~25 repos across
the fleet — there is no npm registry publish. See README.md for consumer setup.

## Stack

- Plain JSON/MJS config package, `"type": "module"`, exports map in package.json.
- Deps: `@eslint/js`, `typescript-eslint`, `eslint-config-prettier`, `globals`.
  Peer deps: `eslint >= 9`, `prettier >= 3` (both optional).
- No build step, no scripts, no tests.

## Rules of the road

- **Changes here propagate fleet-wide** on each consumer's next
  `pnpm update fleet-config` (consumers track plain `main`; a repo pins
  `#<sha>` only to freeze). Edit conservatively — a bad base config breaks
  lint/format in every consumer at once.
- Because consumers install from GitHub, a commit is only usable once it is
  **pushed to `main`** — pushing after committing is required here for changes
  to reach consumers (an exception to the usual no-push default).
- Keep the `exports` map and `files` list in package.json in sync when adding
  or renaming config files.
