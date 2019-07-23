'use strict';

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
  },
  extends: [
    'airbnb-base',
    'plugin:node/recommended',
  ],
  env: {
    node: true,
  },
  overrides: [
    {
      files: ['tests/**/*.js'],
      env: {
        mocha: true,
      },
    },
  ],
};
