'use strict'

const ui = require('./ui')
const api = require('./api')

// On CreateNewGame

const onNewGame = function (event) {
  event.preventDefault()
  api.createGame()
    .then(ui.createGameSuccesfull)
    .catch(ui.createGameFailurefailure)
}

module.exports = {
  onNewGame
}
