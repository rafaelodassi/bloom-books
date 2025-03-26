import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  ...compat.config({
    plugins: ['import-helpers'],
    rules: {
      'import-helpers/order-imports': [
        'warn',
        {
          newlinesBetween: 'always',
          groups: ['/^react/', 'module', ['parent', 'index']],
          alphabetize: { order: 'asc', ignoreCase: true },
        },
      ],
      '@typescript-eslint/no-unused-vars':
        process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'arrow-body-style': ['error', 'as-needed'],
      complexity: ['error', 15],
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    },
  }),
];

export default eslintConfig;
