import js from '@eslint/js';
import globals from 'globals';
import jsdoc from 'eslint-plugin-jsdoc';
import tseslint from 'typescript-eslint';
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');
import prettierPlugin from "eslint-plugin-prettier";
import { defineConfig } from 'eslint-define-config'; // Importe defineConfig


export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'], // Aplica as regras somente a arquivos JavaScript
    plugins: {
      js,
    },
    extends: [
      'eslint:recommended', // Use 'eslint:recommended' para JS
      'eslint-plugin-prettier/recommended',
    ],
    languageOptions: {
      globals: {
        ...globals.browser, // Adicione os globals do navegador se seu JS rodar no browser
        ...globals.node,    // Mantenha os globals do Node.js
      },
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'], // Aplica as regras somente a arquivos TypeScript
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      prettier: prettierPlugin,
    },
    extends: [
      'plugin:@typescript-eslint/recommended',
      'eslint-config-prettier', // Desativa regras de formatação do ESLint que conflitam com o Prettier
      'eslint-plugin-prettier/recommended',
    ],
    rules: {
      // Adicione regras específicas do TypeScript aqui, se necessário
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'prettier/prettier': 'error',
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'], // Regras gerais para ambos os tipos de arquivo
    plugins: {
      jsdoc: jsdoc,
    },
    rules: {
      'jsdoc/require-description': 'error',
      'jsdoc/check-values': 'error',
      'no-console': 'warn',
      'consistent-return': 'warn',
      'prefer-template': 'warn',
      eqeqeq: "off",
      "no-unused-vars": "error",
      "prefer-const": ["error", { ignoreReadBeforeAssign: true }],
    },
  },
]);