document.querySelectorAll("#container button").forEach(button => {
    button.addEventListener("click", () => {
        const humanChoice = button.id; 
        const computerChoice = getComputerChoice();
        playRound(computerChoice, humanChoice); 
    })
})

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

        if (computerChoice === humanChoice) {
            console.log("DRAW!!!")
            return "draw";
        } else if (computerChoice === "ROCK" && humanChoice === "PAPER") {
            console.log("Rock vs Paper: HUMAN WINS!!!")
            return "human";
        } else if (computerChoice === "ROCK" && humanChoice === "SCISSORS") {
            console.log("Rock vs Scissors: COMPUTER WINS!!!")
            return "computer";
        } else if (computerChoice === "PAPER" && humanChoice === "ROCK") {
            console.log("Paper vs Rock: COMPUTER WINS!!!")
            return "computer";
        } else if (computerChoice === "PAPER" && humanChoice === "SCISSORS") {
            console.log("Paper vs Scissors: HUMAN WINS!!!")
            return "human";
        } else if (computerChoice === "SCISSORS" && humanChoice === "PAPER") {
            console.log("Scissors vs Paper: COMPUTER WINS!!!")
            return "computer";
        } else if (computerChoice === "SCISSORS" && humanChoice === "ROCK") {
            console.log("Scissors vs Rock: HUMAN WINS!!!")
            return "human";
        }
    }
