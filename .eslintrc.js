module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    node: true,
    mocha: true
  },
  "globals": {
    "expect": true
  },
  extends: [
    'plugin:vue/recommended',
    'standard'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    'vue/require-default-prop' : 'off',
    'generator-star-spacing': 'off',
    'no-prototype-builtins' : 'off',
    'no-useless-escape' : 'off',
    'vue/no-reserved-keys' : 'off',
    'import/no-webpack-loader-syntax' : 'off',
    'vue/no-v-html' : 'off',
    'vue/no-template-shadow' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
