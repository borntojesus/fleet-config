// Fleet-wide ESLint 9 flat base. Consumers:
//   import base from 'fleet-config/eslint/base';
//   export default [...base];
// Framework repos append their own framework configs after the base.
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";

export default tseslint.config(
  {
    ignores: [
      "node_modules",
      "dist",
      "build",
      ".next",
      ".nuxt",
      ".output",
      ".astro",
      ".turbo",
      ".vercel",
      "coverage",
      "playwright-report",
      "test-results",
      "pb_data",
      "next-env.d.ts",
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "no-console": "off",
    },
  },
);
