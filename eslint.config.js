import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import js from '@eslint/js';

export default [
  js.configs.recommended, // Configuración recomendada de ESLint para JavaScript básico
  {
    files: ['**/*.{js,jsx,ts,tsx}'], // Archivos donde ESLint se aplicará
    plugins: {
      react, // Habilitar el plugin de React
      'react-hooks': reactHooks, // Habilitar el plugin de React Hooks
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error', // Reglas básicas para hooks
      'react-hooks/exhaustive-deps': 'warn', // Aviso para dependencias faltantes en useEffect
    },
  },
];
