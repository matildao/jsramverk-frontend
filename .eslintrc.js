module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
  },
  extends: ['prettier', 'prettier/standard', 'plugin:vue/recommended'],
  plugins: ['vue', 'prettier'],
  // rules: {
  //   indent: ['error', 2],
  // },
  // overrides: [
  //   {
  //     files: ['*.vue'],
  //     rules: {
  //       indent: 'off',
  //     },
  //   },
  // ],
};
