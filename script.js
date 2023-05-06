window.addEventListener("load", () => {

    // Initialisation
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
})