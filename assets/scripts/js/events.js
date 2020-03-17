'use strict'
const ui = require('./ui')
const api = require('./api')
const store = require('../store')
const play = require('./play')

// On CreateNewGame
const onNewGame = function (event) {
  event.preventDefault()
  api.createGame()
    .then(ui.createGameSuccesfull)
    .catch(ui.createGameFailure)
}
// PLAY THE GAME
const placeX = function (x) {
  console.log('here')
  document.getElementById(x).innerHTML += '<h1>X</h1>'
}
const placeO = function (x) {
  document.getElementById(x).style.pointerEvents = 'auto'
  document.getElementById(x).innerHTML += '<h1>O</h1>'
  console.log('place? 0')
}

const compareForWinner = function (arr) {
  let match = false
  for (let i = 0; i < store.winningPlays.length; i++) {
    match = store.winningPlays[i].every(e => arr.includes(e))
    if (match === true) { break }
  }
  return match
}

const checkMatch = function (play) {
  let pushIndex = []
  let arr
  // find all positions and add to the array
  for (let i = 0; i < store.dashBoard.length; i++) {
    if (store.dashBoard[i] === play) {
      pushIndex.push(i)
      // check for gameMessage, compare all the positions to the winnning array if true
      // then we found a gameMessage
      arr = compareForWinner(pushIndex)
    }
    //  return indexes;
  }

  return arr
}

const playTheGame = function (play) {
  const win = checkMatch(play)
  if (win === true) {
    document.getElementById('gameMessage').innerText = 'Winner is ' + play
    store.boardFull = true
    // disables clicking event for all divs
    for (let i = 0; i <= 8; i++) {
      document.getElementById(i).style.pointerEvents = 'none'
    } // Looked for draw
  } else if ((store.dashBoard.every(x => x === 'X' || x === 'O')) === true) {
    store.boardFull = true
    document.getElementById('gameMessage').innerText = 'DRAW!'
  }
}

const onNewMove = function (event) {
  event.preventDefault()
  const move = event.target.id
  console.log(move)
  console.log(store.dashBoard)
  console.log(store.play)
  console.log(store.dashBoard[0])
  console.log(store.game)
  console.log(store.game.id)
  // TESTTTT
  if (store.dashBoard[move] === '') {
    if (store.play === true) {
      document.getElementById('gameMessage').innerText = 'Player O turn'
      store.dashBoard[move] = store.playX
      store.play = !store.play
      placeX(move)
      playTheGame(store.playX)
      api.newMove(move, store.playX, store.boardFull)
        .then(ui.newMoveSucessfull)
        .catch(ui.newMoveFailure)
      // look for all X in the array
    } else if (store.play === false) {
      document.getElementById('gameMessage').innerText = 'Player X turn'
      store.dashBoard[move] = store.playO
      store.play = !store.play
      placeO(move)
      playTheGame(store.playO)
      api.newMove(move, store.playO, store.boardFull)
        .then(ui.newMoveSucessfull)
        .catch(ui.newMoveFailure)
    }
  } else {
    // for when the div already has an X or an O
    document.getElementById('gameMessage').innerText = 'Invalid space'
  }
}

const onStat = function (event) {
  console.log('in events')
  event.preventDefault()
  api.Stat()
    .then(ui.statSuccesfull)
    .catch(ui.statFailure)
}


module.exports = {
  onNewGame,
  onNewMove,
  onStat
}
