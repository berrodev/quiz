import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended, // Configuración recomendada de ESLint para JavaScript básico
  {
    files: ['**/*.{js,jsx,ts,tsx}'], // Archivos donde ESLint se aplicará
    plugins: {
      react, // Habilitar el plugin de React
      'react-hooks': reactHooks, // Habilitar el plugin de React Hooks
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        myCustomGlobal: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',

        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: reactHooks.configs.recommended.rules,
  },
];
