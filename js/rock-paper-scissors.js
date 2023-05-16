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

function displayWinner(playerWins, computerWins) {
    // Display winner
    if (playerWins > computerWins) {
        console.log("The player wins!");
    }
    else if (computerWins > playerWins) {
        console.log("The computer wins. :(");
    }
    else {
        console.log("It's a tie!");
    }
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    let computerSelection, playerSelection;
    const NUMBER_OF_GAMES = 5;

    // loop through the desired number of games
    for (let i = 0; i < NUMBER_OF_GAMES; i++) {

        // get the player's selection
        playerSelection = getPlayerSelection();

        // get the computer's selection
        computerSelection = getComputerChoice();
        
        // if playRound returns 0, the computer wins
        if(playRound(playerSelection, computerSelection) === 0) {
            console.log("You Lose! " + computerSelection + " beats " + playerSelection);
            computerWins++;
        }
        else if (playRound(playerSelection, computerSelection) === 1) {
            console.log("You Win! " + playerSelection + " beats " + computerSelection);
            playerWins++;
        }
        else {
            console.log("Draw!");
        }
    }

    displayWinner(playerWins, computerWins);
}

game();
