module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  plugins: [],
  globals: {
    ace: true
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': 0,
    'generator-star-spacing': 'off',
    'object-curly-spacing': 0, // 强制在大括号中使用一致的空格
    'array-bracket-spacing': 0 // 方括号
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
// // eslint-disable-next-line
// /* eslint-disable */
