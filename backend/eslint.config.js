import globals from 'globals';
import pluginJs from '@eslint/js';
import airbnb from 'eslint-config-airbnb-base';

export default [
  pluginJs.configs.recommended,
  {
    plugins: {
      airbnb,
    },
    files: ['*.js'],
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'error',
    },
  },
];
