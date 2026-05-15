import js from '@eslint/js'
import vue from 'eslint-plugin-vue'
import tseslint from 'typescript-eslint'
import globals from "globals";

export default [
    // 1. 基础 JS 规则
    js.configs.recommended,

    // 2. TypeScript 规则
    ...tseslint.configs.recommended,

    // 3. Vue 规则
    ...vue.configs['flat/recommended'],

    // 4. 处理 .vue + .ts
    {
        files: ['**/*.vue', '**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: vue.parser,
            parserOptions: {
                parser: tseslint.parser,
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
            // 所有全局变量
            globals: {
                ...globals.browser,
                ...globals.es2021,
                // Vue 编译器宏
                defineProps: 'readonly',
                defineEmits: 'readonly',
                defineExpose: 'readonly',
                withDefaults: 'readonly',
                definePage: 'readonly',

                // 你的全局变量
                ace: 'readonly',
                tinymce: 'readonly',
                AMap: 'readonly',
                echarts: 'readonly',
                getScreenGlobal: 'readonly',
            },
        },
    },

    // 5. 自定义规则
    {
        rules: {
            'no-debugger': 'warn',
            '@typescript-eslint/no-unused-vars': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            'comma-dangle': 'off',
            'no-case-declarations': 'off',
            'no-console': 'off',
            'no-useless-assignment': 'off',
            'vue/multi-word-component-names': 'off',
            '@typescript-eslint/no-unused-expressions': 'off',
            'vue/no-v-html': 'off'
        },
    },

    // 6. 忽略文件
    {
        ignores: [
            'docs/**',
            'node_modules/**',
            'public/**',
            'vite.config.js',
            'tsconfig.json',
            '*.config.js',
        ],
    },
]