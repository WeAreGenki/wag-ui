// extra settings for Vue components

module.exports = {
  extends: [
    '@wearegenki/eslint-config',
    'plugin:vue/recommended',
  ],
  plugins: [
    'vue',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  env: {
    es6: true,
    browser: true,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js',
      },
    },
  },
  rules: {
    'vue/max-attributes-per-line': ['error', {
      singleline: 6, // length of the line is more important than # attributes
      multiline: {
        max: 1,
        allowFirstLine: false,
      },
    }],
  },
};
