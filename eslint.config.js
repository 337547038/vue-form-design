import js from '@eslint/js';
import globals from 'globals';
import vuePlugin from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';

export default [
    // 继承ESLint推荐规则
    js.configs.recommended,

    // Vue 3推荐规则（扁平化配置专用）
    ...vuePlugin.configs['flat/recommended'],

    // TypeScript配置
    {
        files: ['**/*.{ts,tsx,vue}'],
        languageOptions: {
            parser: vueParser, // 使用vue-eslint-parser解析Vue SFC
            parserOptions: {
                parser: typescriptParser,
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
        plugins: {
            '@typescript-eslint': typescriptPlugin,
        },
        rules: {
            ...typescriptPlugin.configs.recommended.rules,
            // 可在此处覆盖或添加自定义规则
            '@typescript-eslint/no-explicit-any': 'off', // 示例：允许使用any类型
        },
    },

    // 全局规则（适用于所有文件）
    {
        files: ['**/*.{js,mjs,cjs,ts,tsx,vue}'],
        languageOptions: {
            ecmaVersion: 'latest',
            //globals: globals.browser,
            globals: {
                ...globals.browser,

                /** 追加一些其他自定义全局规则 */
                ace: true,
                tinymce: true,
                AMap: true,
                echarts: true,
                getScreenGlobal: true,
            }
        },
        rules: {
            '@typescript-eslint/no-explicit-any': ['off'], // 允许使用any
            'comma-dangle': 'off', // 最后不加逗号
            '@stylistic/comma-dangle': 'off', // 最后不加逗号
            'no-case-declarations': 'off', // 允许switch case里使用const
            'no-console': 'off',
            '@stylistic/indent': ['off', 2],
            'vue/multi-word-component-names': 'off',
            '@typescript-eslint/no-unused-expressions': 'off', // 允许使用a&&a()这种简单写法
            'vue/no-v-html': 'off' // 关闭v-html警告
        },
    },
];