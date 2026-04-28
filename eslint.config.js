import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';

export default [
    // 基础JS规则
    js.configs.recommended,
    // TS 推荐规则
    ...tseslint.configs.recommended,
    // Vue3 推荐规则
    ...pluginVue.configs['flat/recommended'],
    {
        files: ['**/*.vue'],
        languageOptions: {
            parserOptions: {
                parser: tseslint.parser, // Vue文件内TS解析
            },
        },
    },
    {
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
                ace: true,
                tinymce: true,
                AMap: true,
                echarts: true,
                getScreenGlobal: true

            },
        },
        rules: {
            'no-debugger': 'error',
            '@typescript-eslint/no-unused-vars': ['off', { argsIgnorePattern: '^_' }],
            '@typescript-eslint/no-explicit-any': ['off'], // 允许使用any
            'comma-dangle': 'off', // 最后不加逗号
            '@stylistic/comma-dangle': 'off', // 最后不加逗号
            'no-case-declarations': 'off', // 允许switch case里使用const
            'no-console': 'off',
            'no-useless-assignment': 'off',
            '@stylistic/indent': ['off', 2],
            'vue/multi-word-component-names': 'off',
            '@typescript-eslint/no-unused-expressions': 'off', // 允许使用a&&a()这种简单写法
            'vue/no-v-html': 'off' // 关闭v-html警告
        },
    },
    {
        ignores: ['dist/**', 'node_modules/**', '*.config.ts', 'vite.config.ts', 'public/**'],
    },
];