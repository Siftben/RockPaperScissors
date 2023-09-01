let playerWin = 0, computerWin = 0;

//console.log(playRound(playerSelection, computerSelection));

function loop() {
    for (let i = 1; i <= 5; i++) {
        let playerSelection = prompt("Paper, Rock or Scissors?");
        playerSelection = playerSelection.toLowerCase();
        playerChoice(playerSelection);

        const computerSelection = getComputerChoice();
        alert("Computer choose " + computerSelection);

        console.log(playRound(playerSelection, computerSelection));
    }
}

function rockButton() {
    playerChoice("Rock");
}

function paperButton() {
    playerChoice("Paper");
}

function scissorsButton() {
    playerChoice("Scissors");
}


function playerChoice(playerSelection) {
    /*if (playerSelection === "rock") {
        alert("You choose rock!");
    }
    else if (playerSelection === "paper") {
        alert("You choose paper!");
    }
    else if (playerSelection === "scissors") {
        alert("You choose scissors!");
    }
    else {
        alert("You choose nothing!");
    }*/

    game(playerSelection);
}

function getComputerChoice() {
    let x = Math.floor(Math.random() * 3) + 1;

    switch (x) {
        case 1:
            return ("Rock");
            break;
        case 2:
            return ("Paper");
            break;
        case 3:
            return ("Scissors");
            break;

        default:
            return ("error");
            break;
    }

}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        document.getElementById("results-text").innerHTML = "It's a Draw!";
    }

    else if (playerSelection === "Paper" && computerSelection === "Rock"
        || playerSelection === "Rock" && computerSelection === "Scissors"
        || playerSelection === "Scissors" && computerSelection === "Paper") {
        document.getElementById("results-text").innerHTML = "You Win!";
        playerWin = playerWin + 1;
    }

    else if (computerSelection === "Paper" && playerSelection === "Rock"
        || computerSelection === "Rock" && playerSelection === "Scissors"
        || computerSelection === "Scissors" && playerSelection === "Paper") {
            document.getElementById("results-text").innerHTML = "You Lose!";
        computerWin = computerWin + 1;
    }

}

function game(playerSelection) {

    
    document.getElementById("player-choose").innerHTML = playerSelection;

    const computerSelection = getComputerChoice();
    document.getElementById("computer-choose").innerHTML = computerSelection;

    console.log(playRound(playerSelection, computerSelection));

    //alert("You win " + playerWin + " ,Computer win " + computerWin);

    document.getElementById("player-score").innerHTML = playerWin;
    document.getElementById("computer-score").innerHTML = computerWin;
}