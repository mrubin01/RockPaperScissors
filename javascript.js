function getComputerChoice() {
        return Math.random();
    }

function getHumanChoice() {
        let choice = prompt("Please type: Rock or Paper or Scissors");
        return choice; 
    }

function playRound(computerChoice, humanChoice) {
        if (computerChoice.toUpperCase() === humanChoice.toUpperCase()) {
            console.log("DRAW!!!")
            return "draw"
        } else if (computerChoice.toUpperCase() === "ROCK" && humanChoice.toUpperCase() === "PAPER") {
            console.log("Rock vs Paper: HUMAN WINS!!!")
            return "human"
        } else if (computerChoice.toUpperCase() === "ROCK" && humanChoice.toUpperCase() === "SCISSORS") {
            console.log("Rock vs Scissors: COMPUTER WINS!!!")
            return "computer"
        } else if (computerChoice.toUpperCase() === "PAPER" && humanChoice.toUpperCase() === "ROCK") {
            console.log("Paper vs Rock: COMPUTER WINS!!!")
            return "computer"
        } else if (computerChoice.toUpperCase() === "PAPER" && humanChoice.toUpperCase() === "SCISSORS") {
            console.log("Paper vs Scissors: HUMAN WINS!!!")
            return "human"
        } else if (computerChoice.toUpperCase() === "SCISSORS" && humanChoice.toUpperCase() === "PAPER") {
            console.log("Scissors vs Paper: COMPUTER WINS!!!")
            return "computer"
        } else if (computerChoice.toUpperCase() === "SCISSORS" && humanChoice.toUpperCase() === "ROCK") {
            console.log("Scissors vs Rock: HUMAN WINS!!!")
            return "human"
        }
    }
