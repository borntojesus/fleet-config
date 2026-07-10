# fleet-config

Shared toolchain config for the `~/github` repo fleet (golden path: pnpm + Node 22 + flat ESLint + Prettier). Installed as a git dependency — no registry.

## Install

```sh
pnpm add -D fleet-config@github:borntojesus/fleet-config prettier eslint
```

## Prettier

In `package.json`:

```json
{ "prettier": "fleet-config/prettier" }
```

Tailwind repos use `"fleet-config/prettier-tailwind"` and also install `prettier-plugin-tailwindcss`.

## ESLint (flat)

`eslint.config.mjs`:

```js
import base from "fleet-config/eslint/base";
export default [...base];
```

Framework repos (Next/Astro) append their framework configs after the base.

## tsconfig

```json
{ "extends": "fleet-config/tsconfig/base.json" }
```

Next.js repos extend `fleet-config/tsconfig/next.json`.

## Versioning

Plain `main` is the moving target for OURS repos. Pin a commit (`#<sha>`) only if a repo needs to freeze.
