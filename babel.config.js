/* npm i --save @babel/polyfill
在 main.js 中添加

import '@babel/polyfill'; */
const plugins = []

module.exports = {
  presets: [['@vue/app', { 'useBuiltIns': 'entry' }]],
  plugins: plugins
}
