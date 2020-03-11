const winningPlays = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [6, 4, 2]]
const playerX = ['', '', '', '', '', '', '', '', '']

function playedDiv (x) {
  const xValue = parseInt(x)
  console.log('User played div ' + x)
  playerX[xValue] = xValue
  console.log(xValue)
  console.log(playerX)
  // console.log(playerX.length)
  // for (let i =3 ; i <= 9 ; i++)
    // checkgame = checkLine()
    // return checkline
}
