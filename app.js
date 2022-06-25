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

window.addEventListener(DomContentloaded, () => {
    const playingSpaces = Array.from(document.querySelectorAll('.space'))
    const resetButton = document.querySelector('#resetButton')
    const playerTurn = document.querySelector('#current-player')
    const message = document.querySelector('.winner')

    resetButton.addEventListener('click', resetBoard)
})
    


