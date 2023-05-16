function getComputerChoice() {
    let choice;
    let randomSelection = Math.floor(Math.random() * 3);

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

console.log(getComputerChoice());