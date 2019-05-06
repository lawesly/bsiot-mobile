'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
  // API_ROOT: '"http://39.108.106.29:8088/mobile/"'
})
