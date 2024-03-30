/** @type {import("eslint").Linter.Config} */

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  rules: {
    'no-plusplus': 'off',
    'no-console': 'off',

    'import/extensions': 'off',
  },
};
