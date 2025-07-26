/**
 * ESLint configuration for the BiasGuard monorepo. This file enables the
 * built‑in Next.js rules along with core web vitals checks. It also
 * references modern ECMAScript features and sets the parser options
 * accordingly. See https://nextjs.org/docs/basic-features/eslint for more
 * information.
 */
module.exports = {
  root: true,
  extends: ['next', 'next/core-web-vitals', 'eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module'
  }
};
