module.exports = {
  extends: ['airbnb-base'],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  overrides: [
    /**
     * jsx
     */
    {
      files: ['**/*.jsx', '**/*.tsx'],
      extends: ['airbnb', 'airbnb/hooks', 'plugin:@next/next/core-web-vitals'],
      plugins: ['react'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        JSX: true,
      },
      rules: {
        // hush no-use-before-define error in "import React from 'react';"
        // see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md#how-to-use
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],

        // allow jsx in .tsx
        'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],

        // nextjs does not need React in every file
        'react/react-in-jsx-scope': 'off',

        // use this pattern for default props
        //
        // interface Props {
        //   prop1?: boolean;
        // }
        // const Component1 = ({ prop1 = false }: Props) => (
        //   <Component1 prop1={prop1} />
        // );
        'react/require-default-props': 'off',

        // allow <App {...props} />
        'react/jsx-props-no-spreading': 'off',

        // enforce arrow function for functional components
        'react/function-component-definition': [
          'error',
          { namedComponents: 'arrow-function' },
        ],

        // use <Link> instead of <a> for links
        'jsx-a11y/anchor-is-valid': [
          'error',
          {
            components: ['Link'],
            specialLink: ['hrefLeft', 'hrefRight'],
            aspects: ['invalidHref', 'preferButton'],
          },
        ],
      },
    },

    /**
     * container components
     */
    {
      files: ['**/*.container.jsx', '**/*.container.tsx'],
      rules: {
        // allow importing presentational component as _XXX
        'react/jsx-pascal-case': 'off',
      },
    },

    /**
     * typescript
     * - must come after jsx to turn off airbnb rules conflicted with typescript
     */
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      settings: {
        'import/resolver': {
          typescript: {
            project: './tsconfig.json',
          },
        },
      },
      rules: {
        // allow empty interface (for React props)
        '@typescript-eslint/no-empty-interface': 'off',

        // allow typescript constructor parameter properties
        // see https://www.typescriptlang.org/docs/handbook/2/classes.html#parameter-properties
        // e.g. constructor(private readonly xxxx: string) {}
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': ['error'],
      },
    },

    /**
     * storybook
     */
    {
      files: ['**/*.stories.jsx', '**/*.stories.tsx', '.storybook/**'],
      rules: {
        'no-alert': 'off',

        // allow importing storybooks from devDependencies
        // see https://github.com/storybookjs/storybook/issues/1992#issuecomment-335001056
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: ['.storybook/**', '**/*.stories.tsx'],
          },
        ],
      },
    },

    /**
     * jest
     */
    {
      files: [
        '**/*.spec.js',
        '**/*.spec.ts',
        '**/*.spec.jsx',
        '**/*.spec.tsx',
        'jest.*',
      ],
      extends: ['plugin:jest/all'],
      env: {
        'jest/globals': true,
      },
      plugins: ['jest'],
      rules: {
        // allow obj['key'] to access private property
        'dot-notation': 'off',

        // allow importing devDependencies in tests
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: [
              '**/*.spec.js',
              '**/*.spec.ts',
              '**/*.spec.jsx',
              '**/*.spec.tsx',
              'jest.*',
            ],
          },
        ],

        // allow beforeAll, beforeEach, afterAll, and afterEach
        'jest/no-hooks': 'off',

        // allow upper case at the first charactor of describe, it, ...
        'jest/prefer-lowercase-title': 'off',
      },
    },

    /**
     * wrap it up
     * - turn off rules conflicted with prettier for all files
     * - add custom rules at last to make sure they aren't overridden
     */
    {
      files: ['**/*.js', '**/*.ts', '**/*.jsx', '**/*.tsx'],
      extends: ['prettier'],
      rules: {
        // allow voiding floating promise
        'no-void': ['error', { allowAsStatement: true }],

        // allow _ in variable
        'no-underscore-dangle': 'off',

        // allow default export for container components
        'no-restricted-exports': 'off',

        // allow class properties with no blank line inbetween
        'lines-between-class-members': [
          'error',
          'always',
          { exceptAfterSingleLine: true },
        ],

        // allow named exports without default export
        'import/prefer-default-export': 'off',

        // sort imports
        'import/order': [
          'error',
          {
            groups: [
              'builtin',
              'external',
              'internal',
              'parent',
              'sibling',
              'index',
              'object',
            ],
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
          },
        ],

        // omit .ts .tsx in import statement
        // see https://stackoverflow.com/questions/59265981/typescript-eslint-missing-file-extension-ts-import-extensions
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
            json: 'never',
          },
        ],
      },
    },
  ],
};
