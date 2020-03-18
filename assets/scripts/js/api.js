'use strict'
const config = require('../config')
const store = require('../store')

const createGame = function (data) {
  event.preventDefault()
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
