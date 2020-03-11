const winningPlays = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [6, 4, 2]]

function playedDiv (x) {
  playerX = []
  playerY = []
  let xValue = parseInt(x)
  console.log('User played div ' + x)
  if(playerX.length <= 3) {
    playerX.push(xValue)
    console.log(xValue)
    console.log(playerX.length)
  }

}
