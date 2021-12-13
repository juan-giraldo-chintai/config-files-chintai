module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    'plugin:eslint-comments/recommended',
    'plugin:import/recommended',
    'plugin:ordered-imports/recommended',
    'plugin:unicorn/recommended',
    'prettier',
  ],
  plugins: [
    'eslint-comments',
    'import',
    'ordered-imports',
    'unicorn',
  ],
  rules: {
    'max-len': [
      'error',
      {
        code: 100,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        tabWidth: 2,
      },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-void': ['error', { allowAsStatement: true }],
    'linebreak-style': [ "error", "unix" ],
    indent: [ "error", 2 ],
    quotes: [ "error", "double" ],
    semi: [ "error", "always" ],
    'unicorn/no-array-for-each': 'warn',
    'unicorn/numeric-separators-style': 'warn',
    'unicorn/prevent-abbreviations': ['error'],
  }
};
