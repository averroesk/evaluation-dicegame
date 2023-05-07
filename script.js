window.addEventListener("load", () => {

    // Initialisation
    let dice1 = (`<img
                        class="img-fluid p-2 bg-white shadow-lg diceAnimation" 
                        src="./images/dice-1.svg" 
                        width="90" alt="Dice 1 icon">`)
    let dice2 = (`<img 
                        class="img-fluid p-2 bg-white shadow-lg diceAnimation" 
                        src="./images/dice-2.svg" 
                        width="90" 
                        alt="Dice 2 icon">`)
    let dice3 = (`<img 
                        class="img-fluid p-2 bg-white shadow-lg diceAnimation" 
                        src="./images/dice-3.svg" 
                        width="90" 
                        alt="Dice 3 icon">`)
    let dice4 = (`<img 
                        class="img-fluid p-2 bg-white shadow-lg diceAnimation" 
                        src="./images/dice-4.svg" 
                        width="90" 
                        alt="Dice 4 icon">`)
    let dice5 = (`<img 
                        class="img-fluid p-2 bg-white shadow-lg diceAnimation" 
                        src="./images/dice-5.svg" 
                        width="90" 
                        alt="Dice 5 icon">`)
    let dice6 = (`<img 
                        class="img-fluid p-2 bg-white shadow-lg diceAnimation" 
                        src="./images/dice-6.svg" 
                        width="90" 
                        alt="Dice 6 icon">`)

    let btnNewGame = document.getElementById('btn-new-game')

    let diceScore = document.querySelector('.dice-score')
    let iconQuestion = document.getElementById('icon-question')

    let btnRoll = document.getElementById('btn-roll')
    let textRoll = document.querySelector('.text-roll')

    let btnHold = document.getElementById('btn-hold')
    let textHold = document.querySelector('.text-hold')

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
        // Affichage résultat dé
        diceResult(counterDice)

        // Incrémentation compteur ROUND pour joueur 1 ou 2
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
    
    const hold = () => {
        if (player1Text.style.textDecoration == "underline red" 
            && counterDice !== 1 
            && counterDice !== 0
            && diceScore.innerHTML !== iconQuestion) {
                
            counterGlobalPlayer1 += counterRoundPlayer1
            globalScorePlayer1.textContent = counterGlobalPlayer1   
            // Changement de joueur
            changeToPlayer2()
            
        } else if (player2Text.style.textDecoration == "underline red" 
                    && counterDice !== 1 
                    && counterDice !== 0
                    && diceScore.innerHTML !== iconQuestion) {
                        
            counterGlobalPlayer2 += counterRoundPlayer2
            globalScorePlayer2.textContent = counterGlobalPlayer2
            // Changement de joueur
            changeToPlayer1()
        }
        
        // Réinitialisation des compteurs
        resetCounters(counterDice)
        
        // Fin de la partie et désignation du vainqueur
        gameWinner(counterGlobalPlayer1, counterGlobalPlayer2)
    }
    
    btnHold.addEventListener('click', hold)

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

    // Affichage résultat dé
    const diceResult = (counterDice) => {
        if (counterDice == 1) {
            diceScore.innerHTML = dice1
        } else if (counterDice == 2) {
            diceScore.innerHTML = dice2
        } else if (counterDice == 3) {
            diceScore.innerHTML = dice3
        } else if (counterDice == 4) {
            diceScore.innerHTML = dice4
        } else if (counterDice == 5) {
            diceScore.innerHTML = dice5
        } else if (counterDice == 6) {
            diceScore.innerHTML = dice6
        }
    }

    // Réinitialisation des compteurs
    const resetCounters = (counterDice) => {
        if (counterDice !== 1 && counterDice !== 0) {
            counterRoundPlayer1 = 0
            counterRoundPlayer2 = 0
            roundScorePlayer1.textContent = 0
            roundScorePlayer2.textContent = 0
            diceScore.innerHTML = (`<img 
                                        class="img-fluid me-0 diceAnimation" 
                                        style="opacity: 0.5" 
                                        src="./images/question-square.svg"
                                        width="100" alt="Question square icon">`)
        }
    }

    // Fin de la partie et désignation du vainqueur
    const gameWinner = (counterGlobalPlayer1, counterGlobalPlayer2) => {
        if (counterGlobalPlayer1 >= 100 ) {
            // Désactivation bouton HOLD
            btnHold.setAttribute('disabled', 'disabled')
            btnHold.removeEventListener('click', hold)
            // Désactivation bouton ROLL
            btnRoll.setAttribute('disabled', 'disabled')
            btnRoll.removeEventListener('click', rollDice)
            changeToPlayer1()
            textRoll.style.display = "none"
            btnRoll.style.display = "none"
            textHold.style.display = "none"
            btnHold.style.display = "none"
            diceScore.style.fontSize = '35px'
            diceScore.style.color = 'green'
            diceScore.style.opacity = 0.6
            diceScore.style.fontWeight = "bold"
            diceScore.classList.add("text-uppercase")
            diceScore.textContent = "WINNER: PLAYER 1"
        } else if (counterGlobalPlayer2 >= 100) {
            // Désactivation bouton HOLD
            btnHold.setAttribute('disabled', 'disabled')
            btnHold.removeEventListener('click', hold)
            // Désactivation bouton ROLL
            btnRoll.setAttribute('disabled', 'disabled')
            btnRoll.removeEventListener('click', rollDice)
            changeToPlayer2()
            textRoll.style.display = "none"
            btnRoll.style.display = "none"
            textHold.style.display = "none"
            btnHold.style.display = "none"
            diceScore.style.fontSize = '35px'
            diceScore.style.color = 'green'
            diceScore.style.opacity = 0.6
            diceScore.style.fontWeight = "bold"
            diceScore.classList.add("text-uppercase")
            diceScore.textContent = "WINNER: PLAYER 2"
        }
    } 
})
