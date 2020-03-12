const winningPlays = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [6, 4, 2]]
let dashBoard = ['', '', '', '', '', '', '', '', '']
let boardFull = false

let play = true
const playX = 'X'
const playO = 'O'

const clearBoard = function () {
  for (let i = 0; i <= 8; i++) {
    document.getElementById('c0' + i).innerHTML = ''
  }
  dashBoard = ['', '', '', '', '', '', '', '', '']
}

const placeX = function (x) {
  const id = 'c0' + x
  console.log(id)
  document.getElementById(id).innerHTML += '<h1>X</h1>'
}
const placeO = function (O) {
  const id = 'c0' + O
  console.log(id)
  document.getElementById(id).innerHTML += '<h1>O</h1>'
}


const checkMatch = function (play) {
  const pushIndex = []
  let arr
  // find all positions and add to the array
  for (let i = 0; i < dashBoard.length; i++) {
    if (dashBoard[i] === play) {
      pushIndex.push(i)
      // check for winner, compare all the positions to the winnning array if true
      // then we found a winner
      arr = winningPlays.some(a => pushIndex.length === a.length && a.every((v, i) => v === pushIndex[i]))
    }
    //  return indexes;
  }
  return arr
}
const checkWin = function (play) {
  const win = checkMatch(play)
  console.log(win)
  if (win === true) {
    document.getElementById('winner').innerText = 'Winner is ' + play
    boardFull = true
    // diables clicking event for all divs
    for (let i = 0; i <= 8; i++) {
      document.getElementById('c0' + i).style.pointerEvents = 'none'
    }
  }
}

const playedDiv = function (move) {
  if (dashBoard[move] === '') {
    if (play === true) {
      dashBoard[move] = playX
      play = !play
      placeX(move)
      checkWin(playX)
      // look for all X in the array
      console.log(dashBoard)
    } else if (play === false) {
      dashBoard[move] = playO
      play = !play
      placeO(move)
      checkWin(playO)
      console.log(dashBoard)
    }
  }
  // DISABLE DIV TELL USER THAT YOU ALREADY PLAYED THAT
}
