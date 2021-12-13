module.exports = {
  extends: [
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    require.resolve('./base.js'),
  ],
  plugins: ['jsx-a11y', 'react', 'react-hooks'],
};
