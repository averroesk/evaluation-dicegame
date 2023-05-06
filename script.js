window.addEventListener("load", () => {

    // Initialisation
    let btnNewGame = document.getElementById('btn-new-game')

    let diceScore = document.querySelector('.dice-score')
    let iconQuestion = document.getElementById('icon-question')

    let roundScorePlayer1 = document.querySelector('.round-score-player-1')
    let roundScorePlayer2 = document.querySelector('.round-score-player-2')
    
    let globalScorePlayer1 = document.querySelector('.player-1-global-score')
    let globalScorePlayer2 = document.querySelector('.player-2-global-score')
    
    let player1 = document.querySelector('.player-1')
    let player2 = document.querySelector('.player-2')
    
    let player1Text = document.querySelector('.player-1-text')
    let player2Text = document.querySelector('.player-2-text')
    
    let gameBoard = document.querySelector('.game-board')
    
    // Initialisation début de jeu: on commence par le joueur 1
    player1.style.backgroundImage = "linear-gradient(90deg, hsl(47, 95%, 85%) 100%, #FFF 50%)" 
    player1Text.style.textDecoration = "underline red"
    player2Text.style.textDecoration = "none"
    player2Text.style.opacity = 0.5

    // Initialisation score dé
    let counterDice = 0
    
    // Initialisation scores ROUND joueur 1 et joueur 2
    let counterRoundPlayer1 = 0
    let counterRoundPlayer2 = 0
    
    // Initialisation scores GLOBAL joueur 1 et joueur 2
    let counterGlobalPlayer1 = 0
    let counterGlobalPlayer2 = 0

    const newGame = () => {
        window.location.reload()
    }
    
    btnNewGame.addEventListener('click', newGame)
})