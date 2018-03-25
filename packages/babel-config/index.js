'use strict'; // eslint-disable-line

module.exports = {
  presets: [
    ['@babel/env', {
      debug: true,
      modules: false,
      loose: true,
    }],
    ['@babel/stage-2', { loose: true }],
  ],
  plugins: ['@babel/transform-runtime'],
  env: {
    test: {
      presets: [
        ['@babel/env', { targets: { node: 'current' }}],
        ['@babel/stage-2', { loose: true }],
      ],
      plugins: [
        '@babel/transform-modules-commonjs',
        'dynamic-import-node-babel-7',
      ],
    },
  },
};
