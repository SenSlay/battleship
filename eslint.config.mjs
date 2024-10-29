import globals from 'globals';
import pluginJs from '@eslint/js';
import babelParser from '@babel/eslint-parser';

export default [
  { 
    languageOptions: { 
      globals: globals.browser,
      parser: babelParser
    } 
  },
  pluginJs.configs.recommended,
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
      "capitalized-comments": [
      "warn", 
      "always", 
      {
        "ignorePattern": "pragma|ignored", 
        "ignoreInlineComments": true,
        "ignoreConsecutiveComments": true
      }
      ]
    },
  },
  {
    ignores: ['webpack.common.js', 'webpack.dev.js', 'webpack.prod.js', 'babel.config.js'],
  },
  {
    files: ['**/*.test.js'],
    languageOptions: {
      globals: globals.jest, 
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'off',
    },
  },
];
