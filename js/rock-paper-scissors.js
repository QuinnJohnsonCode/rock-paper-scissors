function getComputerChoice() {
    // randomSelection is an integer between 0 and 2
    let randomSelection = Math.floor(Math.random() * 3);
    const options = ["Rock", "Paper", "Scissors"]

    // make choice based on the randomSelection
    return options[randomSelection];
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

