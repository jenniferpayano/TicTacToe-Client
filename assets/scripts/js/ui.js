'use strict'

const store = require('../store')
const logic = require('./play')

const createGameSuccesfull = function (data) {
  // clears the board and allows user to input
  for (let i = 0; i <= 8; i++) {
    document.getElementById('c0' + i).style.pointerEvents = 'auto'
    document.getElementById('c0' + i).innerHTML = ''
  }
  document.getElementById('gameMessage').innerText = 'Player X turn'
  $('gameMessage').innerText = 'Player X turn'
  store.game = data
  store.over = false
  store.game.cells = logic.dashBoard
  store.count = 0
  console.log(data)
  store.ID = data.game.id
}

const createGameFailure = function (data) {
  $('.message').text('Unable to start a new game')
}

module.exports = {
  createGameSuccesfull,
  createGameFailure
}
