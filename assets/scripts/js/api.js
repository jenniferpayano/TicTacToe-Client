'use strict'
const config = require('../config')
const store = require('../store')

const createGame = function (data) {
  event.preventDefault()
  console.log('In api.js')
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
    // data: data
  })
}

module.exports = {
  createGame
  // updateGame,
//  statusOfGame
}
