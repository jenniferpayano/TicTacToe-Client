// 'use strict'
// const store = ('../store')
// const winningPlays = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [6, 4, 2]]
// let dashBoard = ['', '', '', '', '', '', '', '', '']
// let boardFull = false
//
// let play = true
// const playX = 'X'
// const playO = 'O'
//
// // const clearBoard = function () {
// //   for (let i = 0; i <= 8; i++) {
// //     document.getElementById('c0' + i).style.pointerEvents = 'auto'
// //     document.getElementById('c0' + i).innerHTML = ''
// //   }
// //   dashBoard = ['', '', '', '', '', '', '', '', '']
// //   //api.create()
// //   document.getElementById('gameMessage').innerText = 'Player X turn'
// //   play = true
// // }
//
// const placeX = function (x) {
//   const id = 'c0' + x
//   document.getElementById(id).style.pointerEvents = 'auto'
//   document.getElementById(id).innerHTML += '<h1>X</h1>'
// }
// const placeO = function (O) {
//   const id = 'c0' + O
//   document.getElementById(id).style.pointerEvents = 'auto'
//   document.getElementById(id).innerHTML += '<h1>O</h1>'
// }
//
// const compareForWinner = function (arr) {
//   let match = false
//   for (let i = 0; i < store.winningPlays.length; i++) {
//     match = store.winningPlays[i].every(e => arr.includes(e))
//     if (match === true) { break }
//   }
//   return match
// }
//
// const checkMatch = function (play) {
//   let pushIndex = []
//   let arr
//   // find all positions and add to the array
//   for (let i = 0; i < store.dashBoard.length; i++) {
//     if (store.dashBoard[i] === play) {
//       pushIndex.push(i)
//       // check for gameMessage, compare all the positions to the winnning array if true
//       // then we found a gameMessage
//       arr = compareForWinner(pushIndex)
//     }
//     //  return indexes;
//   }
//
//   return arr
// }
//
// const playTheGame = function (play) {
//   const win = checkMatch(play)
//   if (win === true) {
//     document.getElementById('gameMessage').innerText = 'Winner is ' + play
//     store.boardFull = true
//     // diables clicking event for all divs
//     for (let i = 0; i <= 8; i++) {
//       document.getElementById('c0' + i).style.pointerEvents = 'none'
//     } // Looked for draw
//   } else if ((store.dashBoard.every(x => x === 'X' || x === 'O')) === true) {
//     store.boardFull = true
//     document.getElementById('gameMessage').innerText = 'DRAW!'
//   }
// }
//
// const returnId = function (move) {
//   if (store.dashBoard[move] === '') {
//     if (store.play === true) {
//       document.getElementById('gameMessage').innerText = 'Player O turn'
//       store.dashBoard[move] = store.playX
//       store.play = !store.play
//       placeX(move)
//       playTheGame(store.playX)
//       // look for all X in the array
//     } else if (store.play === false) {
//       document.getElementById('gameMessage').innerText = 'Player X turn'
//       store.dashBoard[move] = store.playO
//       store.play = !store.play
//       placeO(move)
//       playTheGame(store.playO)
//     }
//   } else {
//     // for when the div already has an X or an O
//     document.getElementById('gameMessage').innerText = 'Invalid space'
//   }
// }
// //module.exports = {playTheGame, checkMatch, compareForWinner, placeO, placeX}
//
// //module.exports = {returnId}
