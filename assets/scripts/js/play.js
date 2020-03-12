const winningPlays = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [6, 4, 2]]
let dashBoard = ['', '', '', '', '', '', '', '', '']
let boardFull = false

let play = true
const playX = 'X'
const playO = 'O'

const clearBoard = function () {
  for (let i = 0; i <= 8; i++) {
    document.getElementById('c0' + i).innerHTML = ''
    document.getElementById('c0' + i).style.pointerEvents = 'auto'
  }
  dashBoard = ['', '', '', '', '', '', '', '', '']
  document.getElementById('gameMessage').innerText = 'Player X turn'
  play = true
}

const placeX = function (x) {
  const id = 'c0' + x
  document.getElementById(id).innerHTML += '<h1>X</h1>'
}
const placeO = function (O) {
  const id = 'c0' + O
  document.getElementById(id).innerHTML += '<h1>O</h1>'
}

const compareForWinner = function (arr) {
  let match = false
  for (let i = 0; i < winningPlays.length; i++) {
    match = winningPlays[i].every(e => arr.includes(e))
    if (match === true) { break }
  }
  return match
}

const checkMatch = function (play) {
  let pushIndex = []
  let arr
  // find all positions and add to the array
  for (let i = 0; i < dashBoard.length; i++) {
    if (dashBoard[i] === play) {
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
    boardFull = true
    // diables clicking event for all divs
    for (let i = 0; i <= 8; i++) {
      document.getElementById('c0' + i).style.pointerEvents = 'none'
    } // Looked for draw
  } else if ((dashBoard.every(x => x === 'X' || x === 'O')) === true) {
    boardFull = true
    document.getElementById('gameMessage').innerText = 'DRAW!'
  }
}

const touchedDiv = function (move) {
  if (dashBoard[move] === '') {
    if (play === true) {
      document.getElementById('gameMessage').innerText = 'Player O turn'
      dashBoard[move] = playX
      play = !play
      placeX(move)
      playTheGame(playX)
      // look for all X in the array
    } else if (play === false) {
      document.getElementById('gameMessage').innerText = 'Player X turn'
      dashBoard[move] = playO
      play = !play
      placeO(move)
      playTheGame(playO)
    }
  } else {
    // for when the div already has an X or an O
    document.getElementById('gameMessage').innerText = 'Invalid space'
  }
}
