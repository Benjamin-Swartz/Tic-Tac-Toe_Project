/*
board looks like
[0] [1] [2]
[3] [4] [5]
[6] [7] [8]

winning lines
[0] [1] [2]
[3] [4] [5]
[6] [7] [8]
[0] [3] [6]
[1] [4] [7]
[2] [5] [8]
[0] [4] [8]
[2] [4] [6]
*/

const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
let playerOturn = flase
const Xplayer = 'x'
const Oplayer = 'o'
const restartButton = document.getElementById('resetButton')
const playingSpaces = document.querySelectorAll('space')
const board = document.getElementById('board')
const winnerMessage = document.getElementById('winner-message')

startGame()

restartButton.addEventListener('click',  startGame())

function startGame(){
    playerXturn = flase
    playingSpaces.forEach(space => {
        space.classList.remove(Xplayer)
        space.classList.remove(Oplayer)

    })
    winnerMessage.classList.remove('show')
}

function markPlace(spc){
    const space = spc.target
    const currentPlayer = playerOturn ? Xplayer : Oplayer
    placeMark(cell, currentPlayer)
    if(checkWin(currentPlayer)){
        endGame(false)
    } else if (isDraw()){
        endGame(true)
    } else {
        switchTurns()
    }
}

