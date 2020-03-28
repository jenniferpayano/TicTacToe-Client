'use strict'
// save user data
const user = {
}
const winningPlays = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [6, 4, 2]]
const dashBoard = ['', '', '', '', '', '', '', '', '']
const boardFull = false
const winner = 'Draw'
const won = ''
const play = true
const playX = 'X'
const playO = 'O'
module.exports = {user, winningPlays, dashBoard, boardFull, play, playX, playO, winner, won}
