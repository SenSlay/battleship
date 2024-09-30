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
    "overrides": [
      {
        "files": ["tests/**/*"],
        "env": {
          "jest": true
        }
      }
    ]
  }
];
