window.addEventListener("load", (event: Event) => {
    // Initialisation
    const dice1 = `<img
                        class="img-fluid p-2 bg-white shadow-lg diceAnimation"
                        src="./images/dice-1.svg"
                        width="90" alt="Dice 1 icon">`;
    const dice2 = `<img
                        class="img-fluid p-2 bg-white shadow-lg diceAnimation"
                        src="./images/dice-2.svg"
                        width="90"
                        alt="Dice 2 icon">`;
    const dice3 = `<img
                        class="img-fluid p-2 bg-white shadow-lg diceAnimation"
                        src="./images/dice-3.svg"
                        width="90"
                        alt="Dice 3 icon">`;
    const dice4 = `<img
                        class="img-fluid p-2 bg-white shadow-lg diceAnimation"
                        src="./images/dice-4.svg"
                        width="90"
                        alt="Dice 4 icon">`;
    const dice5 = `<img
                        class="img-fluid p-2 bg-white shadow-lg diceAnimation"
                        src="./images/dice-5.svg"
                        width="90"
                        alt="Dice 5 icon">`;
    const dice6 = `<img
                        class="img-fluid p-2 bg-white shadow-lg diceAnimation"
                        src="./images/dice-6.svg"
                        width="90"
                        alt="Dice 6 icon">`;

    const btnNewGame = document.getElementById('btn-new-game') as HTMLButtonElement;
    const diceScore = document.querySelector('.dice-score') as HTMLElement;
    const iconQuestion = document.getElementById('icon-question') as HTMLElement;

    const btnRoll = document.getElementById('btn-roll') as HTMLButtonElement;
    const textRoll = document.querySelector('.text-roll') as HTMLElement;

    const btnHold = document.getElementById('btn-hold') as HTMLButtonElement;
    const textHold = document.querySelector('.text-hold') as HTMLElement;

    const roundScorePlayer1 = document.querySelector('.round-score-player-1') as HTMLElement;
    const roundScorePlayer2 = document.querySelector('.round-score-player-2') as HTMLElement;

    const globalScorePlayer1 = document.querySelector('.player-1-global-score') as HTMLElement;
    const globalScorePlayer2 = document.querySelector('.player-2-global-score') as HTMLElement;

    const player1 = document.querySelector('.player-1') as HTMLElement;
    const player2 = document.querySelector('.player-2') as HTMLElement;

    const player1Text = document.querySelector('.player-1-text') as HTMLElement;
    const player2Text = document.querySelector('.player-2-text') as HTMLElement;

    const gameBoard = document.querySelector('.game-board') as HTMLElement;

    // Initialisation début de jeu: on commence par le joueur 1
    player1.style.backgroundImage = "linear-gradient(90deg, hsl(47, 95%, 85%) 100%, #FFF 50%)";
    player1Text.style.textDecoration = "underline red";
    player2Text.style.textDecoration = "none";
    player2Text.style.opacity = "0.5";

    // Initialisation score dé
    let counterDice = 0;

    // Initialisation scores ROUND joueur 1 et joueur 2
    let counterRoundPlayer1 = 0;
    let counterRoundPlayer2 = 0;

    // Initialisation scores GLOBAL joueur 1 et joueur 2
    let counterGlobalPlayer1 = 0;
    let counterGlobalPlayer2 = 0;

    const newGame = () => {
      window.location.reload();
    };

    btnNewGame.addEventListener('click', newGame);

    const rollDice = () => {
      counterDice = Math.floor(Math.random() * 6) + 1; // Affichage d'un résultat aléatoire entre 1 et 6 inclus.
      diceResult(counterDice);

      // Incrémentation compteur ROUND pour joueur 1 ou 2
      if (counterDice !== 1 && player1Text.style.textDecoration === "underline red") {
        counterRoundPlayer1 += counterDice;
        roundScorePlayer1.textContent = counterRoundPlayer1.toString(); // Ajout score dé dans round score player 1
      } else if (counterDice !== 1 && player2Text.style.textDecoration === "underline red") {
        counterRoundPlayer2 += counterDice;
        roundScorePlayer2.textContent = counterRoundPlayer2.toString(); // Ajout score dé dans round score player 2
      }

      // Si counterDice == 1 alors changer de joueur.
      if (counterDice === 1) {
        if (player1Text.style.textDecoration === "underline red") {
          changeToPlayer2();
          counterRoundPlayer1 = 0;
          roundScorePlayer1.textContent = "0";
        } else if (player2Text.style.textDecoration === "underline red") {
          changeToPlayer1();
          counterRoundPlayer2 = 0;
          roundScorePlayer2.textContent = "0";
        }
      }
    };

    btnRoll.addEventListener('click', rollDice);

    const hold = () => {
      if (
        player1Text.style.textDecoration === "underline red" &&
        counterDice !== 1 &&
        counterDice !== 0 &&
        diceScore.innerHTML !== iconQuestion?.outerHTML
      ) {
        counterGlobalPlayer1 += counterRoundPlayer1;
        globalScorePlayer1.textContent = counterGlobalPlayer1.toString();
        changeToPlayer2();
      } else if (
        player2Text.style.textDecoration === "underline red" &&
        counterDice !== 1 &&
        counterDice !== 0 &&
        diceScore.innerHTML !== iconQuestion?.outerHTML
      ) {
        counterGlobalPlayer2 += counterRoundPlayer2;
        globalScorePlayer2.textContent = counterGlobalPlayer2.toString();
        changeToPlayer1();
      }

      resetCounters(counterDice);
      gameWinner(counterGlobalPlayer1, counterGlobalPlayer2);
    };

    btnHold.addEventListener('click', hold);

    const changeToPlayer1 = () => {
      player1Text.style.textDecoration = "underline red";
      player2Text.style.textDecoration = "none";
      player1Text.style.opacity = "1";
      player2Text.style.opacity = "0.5";
      player1.style.backgroundImage = "linear-gradient(90deg, hsl(47, 95%, 85%) 100%, #FFF 50%)";
      player2.style.backgroundImage = "";
    };

    const changeToPlayer2 = () => {
      player1Text.style.textDecoration = "none";
      player2Text.style.textDecoration = "underline red";
      player1Text.style.opacity = "0.5";
      player2Text.style.opacity = "1";
      player1.style.backgroundImage = "";
      player2.style.backgroundImage = "linear-gradient(-90deg, hsl(47, 95%, 85%) 100%, #FFF 50%)";
    };

    const diceResult = (counterDice: number) => {
      const diceMap = [dice1, dice2, dice3, dice4, dice5, dice6];
      if (counterDice >= 1 && counterDice <= 6) {
        setTimeout(() => {
          diceScore.innerHTML = diceMap[counterDice - 1];
        }, 200);
      }
    };

    const resetCounters = (counterDice: number) => {
      if (counterDice !== 1 && counterDice !== 0) {
        counterRoundPlayer1 = 0;
        counterRoundPlayer2 = 0;
        roundScorePlayer1.textContent = "0";
        roundScorePlayer2.textContent = "0";
        diceScore.innerHTML = `<img
                                class="img-fluid me-0 diceAnimation"
                                style="opacity: 0.5"
                                src="./images/question-square.svg"
                                width="100" alt="Question square icon">`;
      }
    };

    const gameWinner = (counterGlobalPlayer1: number, counterGlobalPlayer2: number) => {
      const declareWinner = (player: string) => {
        btnHold.setAttribute("disabled", "disabled");
        btnRoll.setAttribute("disabled", "disabled");
        textRoll.style.display = "none";
        btnRoll.style.display = "none";
        textHold.style.display = "none";
        btnHold.style.display = "none";
        diceScore.style.fontSize = "35px";
        diceScore.style.color = "green";
        diceScore.style.opacity = "0.6";
        diceScore.style.fontWeight = "bold";
        diceScore.classList.add("text-uppercase");
        diceScore.textContent = `WINNER: ${player}`;
      };

      if (counterGlobalPlayer1 >= 100) {
        declareWinner("PLAYER 1");
        changeToPlayer1();
      } else if (counterGlobalPlayer2 >= 100) {
        declareWinner("PLAYER 2");
        changeToPlayer2();
      }
    };
  });
