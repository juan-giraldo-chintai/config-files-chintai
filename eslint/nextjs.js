module.exports = {
  extends: [
    'plugin:@next/next/recommended',
    require.resolve('./base.js'),
  ],
  plugins: [
    "eslint-plugin-react",
    "eslint-plugin-react-hooks",
    "eslint-plugin-next",
  ],
};
