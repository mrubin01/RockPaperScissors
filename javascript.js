let computer_score = 0;
let human_score = 0;

function getRandomNumber() {
        return Math.random();
    }

function getComputerChoice() {
    let rand = parseFloat(getRandomNumber());
    let computer_choice = "";

    if (rand < 0.34) {
        computer_choice = "ROCK"; 
    } else if (rand < 0.67) {
        computer_choice = "PAPER"; 
    } else {
        computer_choice = "SCISSORS"; 
    }

    return computer_choice

}


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
    if (human_score === 5 || computer_score === 5) {
        let finalMessage = 
            human_score === 5
                ? "Human wins the game!!!"
                : "Computer wins the game!!!"; 
    
        document.getElementById("result").textContent = finalMessage;
        
        // disable buttons after a win
        document.querySelectorAll("#container button").forEach(button => {
            button.disabled = true; 
        })

    }

}
