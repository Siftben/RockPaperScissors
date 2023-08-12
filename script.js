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
    playerChoice("rock");
}

function paperButton() {
    playerChoice("paper");
}

function scissorsButton() {
    playerChoice("scissors");
}


function playerChoice(playerSelection) {
    if(playerSelection === "rock"){
        alert("You choose rock!");
    }
    else if(playerSelection === "paper"){
        alert("You choose paper!");
    }
    else if(playerSelection === "scissors"){
        alert("You choose scissors!");
    }
    else{
        alert("You choose nothing!");
    }

    game(playerSelection);
}

function getComputerChoice() {
    let x = Math.floor(Math.random() * 3) + 1;
    
    switch (x) {
        case 1:
            return("rock");
            break;
        case 2:
            return("paper");
            break;
        case 3:
            return("scissors");
            break;
    
        default:
            return("error");
            break;
    }
    
}

function playRound(playerSelection, computerSelection) {
    
    if(playerSelection === computerSelection){
    alert("It's a draw");
    }

    else if (playerSelection === "paper" && computerSelection === "rock" 
    || playerSelection === "rock" && computerSelection === "scissors" 
    || playerSelection === "scissors" && computerSelection === "paper") {
        alert("You Win!");
        playerWin = playerWin + 1;
    }
  
    else if (computerSelection === "paper" && playerSelection === "rock" 
    || computerSelection === "rock" && playerSelection === "scissors" 
    || computerSelection === "scissors" && playerSelection === "paper") {
        alert("You Lose!");
        computerWin = computerWin + 1;
    }

}

function game(playerSelection) {

    const computerSelection = getComputerChoice();
    alert("Computer choose " + computerSelection);

    console.log(playRound(playerSelection, computerSelection));

    alert("You win " + playerWin + " ,Computer win " + computerWin);

    document.getElementById("player-score").innerHTML = playerWin;
    document.getElementById("computer-score").innerHTML = computerWin;
}