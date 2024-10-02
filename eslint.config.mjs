import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,

  {
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
    },
  },
  {
    ignores: ['webpack.common.js', 'webpack.dev.js', 'webpack.prod.js'],
  },
  {
    files: ["**/*.test.js"],
    env: {
      jest: true,
    },
  },
];
