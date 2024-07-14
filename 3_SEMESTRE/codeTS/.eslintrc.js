/* eslint-disable prettier/prettier */
// eslint-disable-next-line no-undef
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier',],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    quotes: ['error', 'single',],
    semi: ['error', 'always',],
    // 'comma-dangle': ['error', 'one',],
    'no-console': 'off',
    'prettier/prettier': 2,
  },
};
