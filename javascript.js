let computer_score = 0;
let human_score = 0;

function getRandomNumber() {
        return Math.random();
    }

function getComputerChoice() {
    let rand = parseFloat(getRandomNumber());
    let computer_choice = "";

    if (rand < 0.34) {
        console.log("Computer choice is Rock!")
        computer_choice = "ROCK"; 
    } else if (rand < 0.67) {
        console.log("Computer choice is Paper!")
        computer_choice = "PAPER"; 
    } else {
        console.log("Computer choice is Scissors!")
        computer_choice = "SCISSORS"; 
    }

    return computer_choice

}

// function getHumanChoice() {
//         let choice = prompt("Please type: Rock or Paper or Scissors");
//         return choice; 
//     }

function playRound(computerChoice, humanChoice) {
    computerChoice = computerChoice.toUpperCase();
    humanChoice = humanChoice.toUpperCase();
    let resultMessage = "";

    if (computerChoice === humanChoice) {
        resultMessage = `Draw! You both chose ${humanChoice}`;
    } else if (
        (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
        (humanChoice === "PAPER" && computerChoice === "ROCK") ||
        (humanChoice === "SCISSORS" && computerChoice === "PAPER")
    ) {
        human_score++;
        resultMessage = `Human wins this round! ${humanChoice} beats ${computerChoice}`;
    } else {
        computer_score++;
        resultMessage = `Computer wins this round! ${computerChoice} beats ${humanChoice}`;
    }

    updateScore(resultMessage); 

    }

function updateScore(message) {
    document.getElementById("humanScore").textContent = human_score;
    document.getElementById("computerScore").textContent = computer_score;
    document.getElementById("result").textContent = message;
}

function checkGameWinner() {

}
