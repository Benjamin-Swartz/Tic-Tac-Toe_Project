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

const Xplayer = 'x'
const Oplayer = 'o'
const restartButton = document.getElementById('resetButton')
const playingSpaces = document.querySelectorAll('space')
const board = document.getElementById('board')

startGame()

restartButton.addEventListener('click',  startGame())

function startGame(){
    playingSpaces.forEach(space => {
        space.
    })
}