import eslint from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import eslintPluginVue from 'eslint-plugin-vue'
import stylistic from '@stylistic/eslint-plugin'

export default tseslint.config(
  {
    ignores: [
      'node_modules',
      'dist',
      'docs',
      'public',
    ],
  },

  /** js推荐配置 */
  eslint.configs.recommended,
  /** ts推荐配置 */
  ...tseslint.configs.recommended,
  /** vue推荐配置 */
  ...eslintPluginVue.configs['flat/recommended'],

  stylistic.configs.customize({
    indent: 2,
    quotes: 'single',
    semi: false,
    jsx: true,
    braceStyle: '1tbs',
    arrowParens: 'always',
  }),

  /**
   * javascript 规则
   */
  {
    files: ['**/*.{js,mjs,cjs,vue}'],
    rules: {
      'no-console': 'error',
    },
  },

  /**
   * 配置全局变量
   */
  {
    languageOptions: {
      globals: {
        ...globals.browser,

        /** 追加一些其他自定义全局规则 */
        ace: true,
        tinymce: true,
        AMap: true,
        echarts: true,
        getScreenGlobal: true,
      },
    },
  },

  /**
   * vue 规则
   */
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        /** typescript项目需要用到这个 */
        parser: tseslint.parser,
        ecmaVersion: 'latest',
        /** 允许在.vue 文件中使用 JSX */
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // 在这里追加 vue 规则
      'vue/no-mutating-props': [
        'error',
        {
          shallowOnly: true,
        },
      ],
    },
  },

  /**
   * typescript 规则
   */
  {
    files: ['**/*.{ts,tsx,vue}'],
    rules: {
      '@typescript-eslint/no-explicit-any': ['off'], // 允许使用any
      'comma-dangle': 'off', // 最后不加逗号
      '@stylistic/comma-dangle': 'off', // 最后不加逗号
      'no-case-declarations': 'off', // 允许switch case里使用const
      'no-console': 'off',
      '@stylistic/indent': ['off', 2],
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-unused-expressions': 'off', // 允许使用a&&a()这种简单写法
    },
  },
)
