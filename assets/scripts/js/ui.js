'use strict'

const store = require('../store')

const createGameSuccesfull = function (data, event) {
  // clears the board and allows user to input
$('.dash-board').css('visibility', 'inherit')
  for (let i = 0; i <= 8; i++) {
  //  document.getElementById('c0' + i).style.pointerEvents = 'auto'
    document.getElementById(i).innerHTML = ''
    document.getElementById(i).classList.add('successful-loginbox')
  }
  document.getElementById('gameMessage').innerText = 'Player X turn'
  $('gameMessage').innerText = 'Player X turn'
  store.game = data.game
  console.log(store.game)
}

const createGameFailure = function () {
  $('.message').text('Unable to start a new game')
}

const newMoveSucessfull = function () {

  console.log('Success Moving!!!')
  console.log(store.game)
}

const newMoveFailure = function (data) {
  $('.message').text('Unable to make a new move')
  console.log(data)
  console.log('unable to make a new move')
}

module.exports = {
  createGameSuccesfull,
  createGameFailure,
 newMoveSucessfull,
 newMoveFailure
}
