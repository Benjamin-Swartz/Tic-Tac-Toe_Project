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



window.addEventListener('DOMContentLoaded', () => {
    let board = ['', '', '', '', '', '', '', '', '']
    const playingSpaces = Array.from(document.querySelectorAll('.space'))
    const resetButton = document.querySelector('#resetButton')
    const playerTurn = document.querySelector('#current-player')
    const message = document.querySelector('.winner')
    let currentPlayer = 'X'
    let gameActive = true
    const XplayerWon = 'Player X Won'
    const OplayerWon = 'Player O Won'
    const tie = 'Tie'
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

    const switchTurns = () => {
        playerTurn.classList.remove(`player${currentPlayer}`)
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
        playerTurn.innerText = currentPlayer
        playerTurn.classList.add(`player${currentPlayer}`)
    }

    const winMessage = (type) => {
        if (type === 'X'){
            message.innerText = 'Player X Won'; 
        } else if (type === 'O'){
            message.innerText = 'Player O Won';
        } else {
            message.innerText = 'Tie' 
        }
        message.classList.remove('hide')
    }

    const plaverMove = (space, index) => {
        if (notTaken(space) && gameActive){
            space.innerText = currentPlayer
            space.classList.add(`player${currentPlayer}`)
            updateBoard(index)
            winCheck()
            switchTurns()
        }
    }

    function winCheck(){
        let roundWon = 0
        for (let i = 0; i <= 7; i++){
            const checkLine = winningLines[i]
            const a = board[winningLines[0]]
            const b = board[winningLines[1]]
            const c = board[winningLines[2]]
            if (a === '' || b === '' || c === ''){
                continue;
            } else if (a === 'X' && b === 'X' && c === 'X'){
               roundWon = 1
            }
        }
        if (roundWon > 0) {
            winMessage(currentPlayer)
            gameActive = false
            return;
        }
        if (!board.includes('')){
            winMessage(tie)
        }
    }

    const updateBoard = (index) => {
        board[index] = currentPlayer
    }

    const notTaken = (space) => {
        if (space.innerText === 'X' || space.innerText === 'O'){
            return false
        }
        return true
    }

    playingSpaces.forEach((space,index) => {
        space.addEventListener('click', () => plaverMove(space, index))
    })

    const resetBoard = () => {
        board = ['', '', '', '', '', '', '', '', '']
        gameActive = true
        message.classList.add('hide')
        playingSpaces.forEach(space => {
            space.innerText = ''
            space.classList.remove('playerX')
            space.classList.remove('playerO')
        })
        if (currentPlayer === 'O'){
            switchTurns()
        }
    }

    resetButton.addEventListener('click', resetBoard)
})
    


