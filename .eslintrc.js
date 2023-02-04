module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    // 'sourceType': 'module',
    // 'ecmaVersion': 2018,
    // 'ecmaFeatures': {
    //   'globalReturn': false,
    //   'impliedStrict': false,
    //   'jsx': false
    // }
  },
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'vue/jsx-uses-vars': 2,
    'no-console': ['error'],
    '@typescript-eslint/no-explicit-any': ['off'],
    'vue/no-use-v-if-with-v-for': [
      'error',
      {
        allowUsingIterationVar: false,
      },
    ],
    'vue/no-side-effects-in-computed-properties': ['off'],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-ts-comment': [
      'off',
      {
        'ts-ignore': false,
      },
    ],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'vue/prefer-import-from-vue': 'off',
    'vue/multi-word-component-names': [
      'off',
      {
        ignores: [],
      },
    ],
  },
};
