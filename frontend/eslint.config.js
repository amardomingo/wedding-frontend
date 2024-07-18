import globals from 'globals';

import path from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: pluginJs.configs.recommended,
});

export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      globals: globals.browser,
    },
  },
  {
    ignores: [
      '**/vite.config.js',
      '**/eslint.config.js',
      '**/node_modules/**',
      '**/dist/**',
    ],
  },
  ...compat.extends('airbnb'),
  {
    rules: {
      'comma-dangle': 'off',
      'object-curly-newline': 'off',
      'react/jsx-one-expression-per-line': 'off',
      'import/extensions': ['off', 'always'],
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
      'react/no-danger': 'off',
    },
  },
];
