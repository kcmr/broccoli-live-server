module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
  },
  extends: [
    'airbnb-base',
    'plugin:node/recommended',
  ],
  env: {
    es6: true,
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
