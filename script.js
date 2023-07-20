const allElements = document.querySelectorAll('*');
let twoPlayers = document.querySelector('.two-play')
let cpu = document.querySelector('.computer')
let playerNames = document.querySelector('.player-names')
let playerOneName = document.getElementById('p1-name')
let playerTwoName = document.getElementById('p2-name')
let startGame = document.querySelector('.start')
let playerOneDisplay = document.querySelector('.player1')
let playerTwoDisplay = document.querySelector('.player2')
let reload = document.querySelector('.reload')
let grid = document.querySelector('.grid')

let playerOne
let playerTwo
let array = [,,,,,,,,,]
let game = false
let move
let gridCell
let playerOneScore = document.querySelector('.player1-score')
let playerTwoScore = document.querySelector('.player2-score')

const Player1 = (name) => {
    const sayName = () => name
    const symbol = () => 'x';
    const wins = 0
    return {sayName, symbol, wins}
}

const Player2 = (name) => {
    const sayName = () => name
    const symbol = () => 'o';
    const wins = 0
    return {sayName, symbol, wins}
}

twoPlayers.addEventListener('click', () => {
    twoPlayers.classList.add('hide')
    cpu.classList.add('hide')
    playerNames.classList.remove('hide')
})

startGame.addEventListener('click', () => {
    if (playerOneName.value == '' && playerTwoName.value == '') {
        playerOne = Player1('Player 1')
        playerTwo = Player2('Player 2')

        let player1Name = document.querySelector('.player1-name')
        player1Name.innerHTML = playerOne.sayName()
        let player2Name = document.querySelector('.player2-name')
        player2Name.innerHTML = playerTwo.sayName()
        move = playerOne.symbol()

    } else if (playerOneName.value != '' && playerTwoName.value == '') {
         playerOne = Player1(playerOneName.value)
         playerTwo = Player2('Player 2')
        
        let player1Name = document.querySelector('.player1-name')
        player1Name.innerHTML = playerOne.sayName()
        let player2Name = document.querySelector('.player2-name')
        player2Name.innerHTML = playerTwo.sayName()
        move = playerOne.symbol()
    
    } else if (playerOneName.value == '' && playerTwoName.value != '') {
         playerOne = Player1('Player 1')
         playerTwo = Player2(playerTwoName.value)
        
        let player1Name = document.querySelector('.player1-name')
        player1Name.innerHTML = playerOne.sayName()
        let player2Name = document.querySelector('.player2-name')
        player2Name.innerHTML = playerTwo.sayName()
        move = playerOne.symbol()

    } else {
         playerOne = Player1(playerOneName.value)
         playerTwo = Player2(playerTwoName.value)
        
        let player1Name = document.querySelector('.player1-name')
        player1Name.innerHTML = playerOne.sayName()
        let player2Name = document.querySelector('.player2-name')
        player2Name.innerHTML = playerTwo.sayName()
        move = playerOne.symbol()
    }

    playerNames.classList.add('hide')
    playerOneDisplay.classList.add('show', 'anim-show')
    playerTwoDisplay.classList.add('show', 'anim-show')
    reload.classList.add('show', 'anim-show')
    grid.classList.add('anim-show')

    setTimeout(() => {
        game = true
    }, 2000);

})

reload.addEventListener('click', () => {
    document.location.reload()
})

grid.addEventListener('click', e => gameOn(e.target.id))

function gameOn(cell) {
    if (game == true) {
    
        gridCell = document.getElementById(cell)

        if (gridCell.classList.contains(playerOne.symbol()) ||
            gridCell.classList.contains(playerTwo.symbol())) {
                return 
        } else {
        if (move == playerOne.symbol()) {
            gridCell.classList.add(playerOne.symbol())
            array.splice(cell - 1, 1, move)
            check()
            move = playerTwo.symbol()
        } else if (move == playerTwo.symbol()) {
            gridCell.classList.add(playerTwo.symbol())
            array.splice(cell - 1, 1, move)
            check()
            move = playerOne.symbol()
        } 
        }    
    }
}

function check() {
    if (array[0] == 'x' && array[1] == 'x' && array[2] == 'x' ||
    array[3] == 'x' && array[4] == 'x' && array[5] == 'x' ||
    array[6] == 'x' && array[7] == 'x' && array[8] == 'x' ||
    array[0] == 'x' && array[3] == 'x' && array[6] == 'x' ||
    array[1] == 'x' && array[4] == 'x' && array[7] == 'x' ||
    array[2] == 'x' && array[5] == 'x' && array[8] == 'x' ||
    array[0] == 'x' && array[4] == 'x' && array[8] == 'x' ||
    array[2] == 'x' && array[4] == 'x' && array[6] == 'x') {
        
        array = [,,,,,,,,,]
        game = false
        playerOne.wins++
        playerOneScore.innerHTML = playerOne.wins
        playerOneScore.classList.add('venga', 'anim-show')
        nextRound()

    } else if (array[0] == 'o' && array[1] == 'o' && array[2] == 'o' ||
    array[3] == 'o' && array[4] == 'o' && array[5] == 'o' ||
    array[6] == 'o' && array[7] == 'o' && array[8] == 'o' ||
    array[0] == 'o' && array[3] == 'o' && array[6] == 'o' ||
    array[1] == 'o' && array[4] == 'o' && array[7] == 'o' ||
    array[2] == 'o' && array[5] == 'o' && array[8] == 'o' ||
    array[0] == 'o' && array[4] == 'o' && array[8] == 'o' ||
    array[2] == 'o' && array[4] == 'o' && array[6] == 'o') {

        array = [,,,,,,,,,]
        game = false
        playerTwo.wins++
        playerTwoScore.innerHTML = playerTwo.wins
        playerTwoScore.classList.add('venga', 'anim-show')
        nextRound()
        
    } else if (!array.includes(undefined)) {
        array = [,,,,,,,,,]
        game = false
        nextRound()
    }
}


function nextRound() {
    
    setTimeout(() => {
        allElements.forEach((element) => {
            element.classList.remove(playerOne.symbol(), playerTwo.symbol())
        })
        game = true
        playerOneScore.classList.remove('venga', 'anim-show')
        playerTwoScore.classList.remove('venga', 'anim-show')
      }, 3000);
}

