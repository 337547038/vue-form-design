module.exports = {
  "root": true,
  "env": {
    "node": true
  },
  "extends": ["plugin:vue/vue3-essential"],
  "parserOptions": {},
  "globals": {
    "ace": true
  },
  "rules": {
    "semi": ['error', 'never'],
    "arrow-parens": 0,
    "generator-star-spacing": 0,
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "indent": ["off", 2],
    "space-before-function-paren": 0,
    "eol-last": 0,
    "no-useless-escape": "off",
    "max-len": [2, 200, 4,
      {
        "ignoreUrls": true
      }
    ],
    "prefer-const": [
      "error",
      {
        "destructuring": "all",
        "ignoreReadBeforeAssign": false
      }
    ],
    "guard-for-in": "error",
    "vue/no-mutating-props": 0
  }
}
