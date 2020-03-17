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

const newMove = function (index, letter, fullBoard) {
  console.log(index, letter, fullBoard, config.apiUrl, store.user.token, store.game.id)
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': index,
          'value': letter
        },
        'over': fullBoard
      }
    }
  })
}
const Stat = function () {
  console.log('in api')
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}


module.exports = {
  createGame,
  newMove,
  Stat
//   updateGame,
//  statusOfGame
}
