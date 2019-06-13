'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  HTTPS_WXSNS: '/wxSns/',
  HTTPS_ZDAPIS: ''
})
