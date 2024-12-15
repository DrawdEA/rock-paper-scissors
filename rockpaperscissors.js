let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)

    switch (choice) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, paper, or scissors?")
    return choice.toLowerCase()
}

function playRound(humanChoice, computerChoice) {
    console.log("You chose " + humanChoice)
    console.log("Computer chose " + computerChoice)
    if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            computerScore += 1
        } else if (computerChoice == "scissors") {
            humanScore += 1
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "scissors") {
            computerScore += 1
        } else if (computerChoice == "rock") {
            humanScore += 1
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            computerScore += 1
        } else if (computerChoice == "paper") {
            humanScore += 1
        }
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice())
    }

    if (humanScore > computerScore) {
        console.log("You win!")
    } else if (humanScore < computerScore) {
        console.log("You lose!")
    } else {
        console.log("It's a tie!")
    }
}

playGame()