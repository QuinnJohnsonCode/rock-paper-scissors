function getComputerChoice() {
    // randomSelection is an integer between 0 and 2
    let randomSelection = Math.floor(Math.random() * 3);
    const options = ["Rock", "Paper", "Scissors"]

    // make choice based on the randomSelection
    return options[randomSelection];
}

