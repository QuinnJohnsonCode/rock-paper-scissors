function getComputerChoice() {
    // randomSelection is an integer between 0 and 2
    let randomSelection = Math.floor(Math.random() * 3);
    const OPTIONS = ["Rock", "Paper", "Scissors"];

    // make choice based on the randomSelection
    return OPTIONS[randomSelection];
}

function playRound(playerSelection, computerSelection) {
    // normalize to lowercase
    let playerSelectionLower = playerSelection.toLowerCase();
    let computerSelectionLower = computerSelection.toLowerCase();
    
    // check for a draw
    if (playerSelection === computerSelection) {
        return 2;
    }

    // check for computer-sided wins
    let computerWin = (playerSelectionLower === "rock" && computerSelectionLower === "paper") ||
                      (playerSelectionLower === "paper" && computerSelectionLower === "scissors") ||
                      (playerSelectionLower === "scissors" && computerSelectionLower === "rock");
    
    // true / false
    return computerWin ? 0 : 1;
}

function getPlayerSelection() {
    const OPTIONS = ["Rock", "Paper", "Scissors"];

    // get player input 
    // 0 for rock, 1 for paper, 2 for scissors
    while (true) {
        playerSelection = parseInt(prompt("Enter 0 for Rock, 1 for Paper, 2 for Scissors: "));

        // verify playerSelection is within the range of 0-2
        if (playerSelection < 0 || playerSelection > 2) {
            console.log("Please input a value between 0 and 2.");
            continue;
        }
        
        break;
    }

    return OPTIONS[playerSelection];
}

function generateWinner(playerWins, computerWins) {
    // Display winner
    if (playerWins > computerWins) {
        return ("The player wins!");
    }
    else if (computerWins > playerWins) {
        return ("The computer wins. :(");
    }
        
    return ("It's a tie!");
}

function generateRoundWinner(gameResult, computerSelection, playerSelection) {
    if(gameResult === 0) {
        return ("You Lose! " + computerSelection + " beats " + playerSelection);
    }
    else if (gameResult === 1) {
        return ("You Win! " + playerSelection + " beats " + computerSelection);
    }
    
    return ("Draw!");
}

function generateEmoji(selection) {
    const selectionLower = selection.toLowerCase();
    if (selectionLower === "rock") {
        return "🪨";
    }
    else if (selectionLower === "paper") {
        return "📜";
    }

    return "✂️";
}

function game() {
    let initRound = function () {
        // update selection emoji
        playerEmoji.innerText = generateEmoji(playerSelection);
        computerEmoji.innerText = generateEmoji(computerSelection);
        // calculate result
        gameResult = playRound(playerSelection, computerSelection);
        // end the round
        endRound();
    }

    let endRound = function () {
        // display winner of the round
        roundText.innerText = generateRoundWinner(gameResult, computerSelection, playerSelection);
        // update scores
        playerWins = gameResult === 1 ? playerWins + 1 : playerWins;
        computerWins = gameResult === 0 ? computerWins + 1 : computerWins;
        draws = gameResult === 2 ? draws + 1 : draws;
        // generate new choice
        computerSelection = getComputerChoice();
        // check if end of game
        if (playerWins + computerWins + draws >= NUMBER_OF_GAMES) {
            endGame();
        }
    };

    let endGame = function () {
        // clean up event listeners
        rockButton.removeEventListener("click", initRound);
        paperButton.removeEventListener("click", initRound);
        scissorsButton.removeEventListener("click", initRound);
        // display winner
        winnerText.innerText = generateWinner(playerWins, computerWins);
    };

    let playerWins = 0;
    let computerWins = 0;
    let draws = 0;
    let playerSelection = "";
    let computerSelection = getComputerChoice();
    let gameResult; // 0 - computer, 1 - player, 2 - draw
    const NUMBER_OF_GAMES = 5;

    // get emoji representations of selections
    const playerEmoji = document.getElementById("player-selection");
    const computerEmoji = document.getElementById("computer-selection");

    // get round and winner text from DOM
    const roundText = document.getElementById("round-text");
    const winnerText = document.getElementById("winner-text");

    // get buttons from DOM
    const rockButton = document.getElementById("rock-button");
    const paperButton = document.getElementById("paper-button");
    const scissorsButton = document.getElementById("scissors-button");

    // add event listeners to communicate a playRound() and change selection
    rockButton.addEventListener("click", () => { playerSelection = "Rock"; });
    rockButton.addEventListener("click", initRound);

    paperButton.addEventListener("click", () => { playerSelection = "Paper"; });
    paperButton.addEventListener("click", initRound);

    scissorsButton.addEventListener("click", () => { playerSelection = "Scissors"; });
    scissorsButton.addEventListener("click", initRound);
}

game();
