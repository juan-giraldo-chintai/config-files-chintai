module.exports = {
  extends: [
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    require.resolve('./base.js'),
  ],
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint"
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
        json: 'always',
			},
		],
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": {
      allowComparingNullableBooleansToTrue: false,
      allowComparingNullableBooleansToFalse: false,
    },
    "@typescript-eslint/prefer-nullish-coalescing": [
      {
        ignoreConditionalTests: false,
        ignoreMixedLogicalExpressions: false,
      },
    ],
    "@typescript-eslint/prefer-includes": "warn",
    "@typescript-eslint/sort-type-union-intersection-members": "warn",
    "space-infix-ops": "off",
    "@typescript-eslint/space-infix-ops": ["error", { "int32Hint": false }],
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_+$' },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
      },
      {
        selector: 'enumMember',
        format: ['PascalCase'],
      },
      {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allowSingleOrDouble',
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'variable',
        format: ['camelCase'],
      },
      {
        selector: 'variable',
        modifiers: ['const'],
        format: ['UPPER_CASE'],
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
      },
    },
  },
};