'use strict'

require('babel/register')
require('babel/polyfill')

var server  = require('server')
var service = server.listen(process.env.PORT || 8080, function(err) {
  console.log('Listening at %s...', service.address().port)
})
