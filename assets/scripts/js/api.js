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

const newMove = function (id, letter, bool) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': id,
          'value': letter
        },
        'over': bool
      }
    }
  })
}

module.exports = {
  createGame,
  newMove
//   updateGame,
//  statusOfGame
}
