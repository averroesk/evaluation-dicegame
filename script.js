window.addEventListener("load", () => {

    // Initialisation
    let btnNewGame = document.getElementById('btn-new-game')

    let diceScore = document.querySelector('.dice-score')
    let iconQuestion = document.getElementById('icon-question')

    let btnRoll = document.getElementById('btn-roll')
    let textRoll = document.querySelector('.text-roll')

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

    const rollDice = () => {
        counterDice = Math.floor(Math.random()*6) + 1 // Affichage d'un résultat aléatoire entre 1 et 6 inclus.
        // Affichage score dé
        if (counterDice == 1) {
            diceScore.innerHTML = (`<img
                                        class="img-fluid p-2 bg-white shadow-lg diceAnimation" 
                                        src="./images/dice-1.svg" 
                                        width="90" alt="Dice 1 icon">`)
        } else if (counterDice == 2) {
            diceScore.innerHTML = (`<img 
                                        class="img-fluid p-2 bg-white shadow-lg diceAnimation" 
                                        src="./images/dice-2.svg" 
                                        width="90" 
                                        alt="Dice 2 icon">`)
        } else if (counterDice == 3) {
            diceScore.innerHTML = (`<img 
                                        class="img-fluid p-2 bg-white shadow-lg diceAnimation" 
                                        src="./images/dice-3.svg" 
                                        width="90" 
                                        alt="Dice 3 icon">`)
        } else if (counterDice == 4) {
            diceScore.innerHTML = (`<img 
                                        class="img-fluid p-2 bg-white shadow-lg diceAnimation" 
                                        src="./images/dice-4.svg" 
                                        width="90" 
                                        alt="Dice 4 icon">`)
        } else if (counterDice == 5) {
            diceScore.innerHTML = (`<img 
                                        class="img-fluid p-2 bg-white shadow-lg diceAnimation" 
                                        src="./images/dice-5.svg" 
                                        width="90" 
                                        alt="Dice 5 icon">`)
        } else if (counterDice == 6) {
            diceScore.innerHTML = (`<img 
                                        class="img-fluid p-2 bg-white shadow-lg diceAnimation" 
                                        src="./images/dice-6.svg" 
                                        width="90" 
                                        alt="Dice 6 icon">`)
        }

        if (counterDice !== 1 && player1Text.style.textDecoration == "underline red") {
            counterRoundPlayer1 += counterDice
            roundScorePlayer1.textContent = counterRoundPlayer1 // Ajout score dé dans round score player 1   
        } else if (counterDice !== 1 && player2Text.style.textDecoration == "underline red") {
            counterRoundPlayer2 += counterDice
            roundScorePlayer2.textContent = counterRoundPlayer2 // Ajout score dé dans round score player 2
        }
        
        // Si counterDice == 1 alors changer de joueur.
        if (counterDice == 1 && player1Text.style.textDecoration == "underline red") {
            // Changement de joueur
            changeToPlayer2()
            // Le score ROUND du joueur 1 est perdu
            counterRoundPlayer1 = 0
            roundScorePlayer1.textContent = 0 
        } else if (counterDice == 1 && player2Text.style.textDecoration == "underline red") {
            // Changement de joueur
            changeToPlayer1()
            // Le score ROUND du joueur 2 est perdu
            counterRoundPlayer2 = 0
            roundScorePlayer2.textContent = 0
        }
    }
    
    btnRoll.addEventListener('click', rollDice)

    // Tour du joueur 1
    const changeToPlayer1 = () => {
        player1Text.style.textDecoration = "underline red"
        player2Text.style.textDecoration = "none"
        player1Text.style.opacity = 1
        player2Text.style.opacity = 0.5
        player1.style.backgroundImage = "linear-gradient(90deg, hsl(47, 95%, 85%) 100%, #FFF 50%)" 
        player2.style.backgroundImage = ""
    }
    
    // Tour du joueur 2
    const changeToPlayer2 = () => {
        player1Text.style.textDecoration = "none"
        player2Text.style.textDecoration = "underline red"
        player1Text.style.opacity = 0.5
        player2Text.style.opacity = 1
        player1.style.backgroundImage = ""
        player2.style.backgroundImage = "linear-gradient(-90deg, hsl(47, 95%, 85%) 100%, #FFF 50%)"
    }
})