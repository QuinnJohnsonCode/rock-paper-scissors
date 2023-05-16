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
        return "Draw!";
    }

    // check for computer-sided wins
    let computerWin = (playerSelectionLower === "rock" && computerSelectionLower === "paper") ||
                      (playerSelectionLower === "paper" && computerSelectionLower === "scissors") ||
                      (playerSelectionLower === "scissors" && computerSelectionLower === "rock");
    
    if (computerWin) {
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }

    // otherwise, the player wins
    return "You Win! " + playerSelection + " beats " + computerSelection;
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

function game() {
    let playerWins = 0;
    let computerSelection, playerSelection;
    const NUMBER_OF_GAMES = 5;
    

    // loop through the desired number of games
    for (let i = 0; i < NUMBER_OF_GAMES; i++) {

        // get the player's selection
        playerSelection = getPlayerSelection();

        // get the computer's selection
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));

    }
}

game();
