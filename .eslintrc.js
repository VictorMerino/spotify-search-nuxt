module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
    ref: 'readonly',
    reactive: 'readonly',
    computed: 'readonly',
    // For tests:
    it: 'readonly',
    test: 'readonly'
  },
  plugins: ['prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': [
      'warn',
      {
        semi: false,
        singleQuote: true,
        arrowParens: 'avoid',
        printWidth: 80,
        trailingComma: 'none',
        bracketSameLine: true
        // "breakBeforeElse": true
      }
    ],
    'vue/multi-word-component-names': 0,
    'no-magic-numbers': 1
  }
}
