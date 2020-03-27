'use strict'
const ui = require('./ui')
const api = require('./api')
const store = require('../store')

// On CreateNewGame
const onNewGame = function (event) {
  event.preventDefault()
  api.createGame()
    .then(ui.createGameSuccesfull)
    .catch(ui.createGameFailure)
}
// PLAY THE GAME

// Places the X on the board
const placeX = function (x) {
  document.getElementById(x).innerHTML += '<h1>X</h1>'
}
// Places the O on the board
const placeO = function (x) {
  document.getElementById(x).style.pointerEvents = 'auto'
  document.getElementById(x).innerHTML += '<h1>O</h1>'
}
// CompareForWinner will take the array of X or O and it will check against
// the double array of winning plays in store, it any array matches the existing array,
// it will return true, otherwise false
const compareForWinner = function (arr) {
  let match = false
  for (let i = 0; i < store.winningPlays.length; i++) {
    match = store.winningPlays[i].every(e => arr.includes(e))
    if (match === true) { break }
  }
  return match
}
// Check Match for X or O
// If the player is X it will push all teh index of X into an array 'pushIndex'
// then it will compare for winner in another function
const checkMatch = function (play) {
  const pushIndex = []
  let arr
  // find all positions and add to the array
  for (let i = 0; i < store.dashBoard.length; i++) {
    if (store.dashBoard[i] === play) {
      pushIndex.push(i)
      // check for gameMessage, compare all the positions to the winnning array if true
      // then we found a gameMessage
      arr = compareForWinner(pushIndex)
    }
  }

  return arr
}
// Play game: if win comes back true then display the winner
// return that the board is full which will disable all the other boxes to be played
// if there is a draw set board to full and display draw!
const playTheGame = function (play) {
  // finds if X or O has won
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
// This is when a user plays a move, this function will run
const onNewMove = function (event) {
  event.preventDefault()
  const move = event.target.id
  // if the spot on the index is empty on the stored array in store.js
  if (store.dashBoard[move] === '') {
    // and if the store play is true - true means that the play is X
    if (store.play === true) {
      // Place the X on the board
      placeX(move)
      // tell the user that next move is for Player O (After X is played)
      document.getElementById('gameMessage').innerText = 'Player O turn'
      // store the move in the dashBoard array
      store.dashBoard[move] = store.playX
      // set the value of play to false aka O
      store.play = !store.play
      // Play game will check whether there is a match
      playTheGame(store.playX)
      // Then it will processed to the API, send the index of the play,
      // whether is it an X or an O, and if the boardisFull (true or false)
      // is the board is not full then the game is not over
      api.newMove(move, store.playX, store.boardFull)
        .then(ui.newMoveSucessfull)
        .catch(ui.newMoveFailure)
      // and if the store play is false - false means that the play is O
    } else if (store.play === false) {
      placeO(move)
      document.getElementById('gameMessage').innerText = 'Player X turn'
      store.dashBoard[move] = store.playO
      store.play = !store.play
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
// checks for how many plays the user has played
const onStat = function (event) {
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
