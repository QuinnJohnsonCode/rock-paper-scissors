function getComputerChoice() {
    let choice;

    // randomSelection is an integer between 0 and 2
    let randomSelection = Math.floor(Math.random() * 3);

    // change choice based on the randomSelection
    switch (randomSelection) {
        case 0:
            choice = "Rock";
            break;
        case 1:
            choice = "Paper";
            break;
        case 2:
            choice = "Scissors";
            break;
    }

    return choice;
}