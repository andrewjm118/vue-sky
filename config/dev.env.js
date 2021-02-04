'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // 后加入
  BASE_API: '"http://211.159.164.175:9002/api"',
})
