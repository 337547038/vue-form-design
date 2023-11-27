module.exports = {
  semi: false, //是否在语句末尾加分号
  singleQuote: true, // 是否使用单引号，建议使用单引号
  trailingComma: 'none', // 多行数组和对象的最后一项是否添加逗号
  printWidth: 80, // 一行的字符数，超出会自动换行，默认为 80。
  tabWidth: 2, // 一个 tab 的宽度，建议设置为 2 （默认为 2）；
  bracketSpacing: true, //对象字面量的花括号之间是否添加空格，建议添加空格（即设置为 true）；
  jsxSingleQuote: false, // 语法中属性是否使用单引号，默认为 false（即用双引号）。//jsx 语法中属性是否使用单引号，默认为 false（即用双引号）。
  jsxBracketSameLine: false, //jsx 中的 > 是否与前面的内容在同一行，建议分行（即设置为 false）；
  arrowParens: 'avoid', //箭头函数的参数是否使用括号，建议不使用括号（即设置为 "avoid"）
  vueIndentScriptAndStyle: true,
  endOfLine: 'auto'
}
