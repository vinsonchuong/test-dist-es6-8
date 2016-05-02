#!/usr/bin/env node
require('babel-register')({
  presets: ['es2015', 'stage-0'],
  plugins: ['transform-runtime', 'transform-decorators-legacy']
});

require('./main');
