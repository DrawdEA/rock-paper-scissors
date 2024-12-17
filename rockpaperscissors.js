let buttons = document.querySelectorAll("button")
let div = document.querySelector("div")

let humanScore = 0
let computerScore = 0



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

function playRound(humanChoice, computerChoice) {
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

buttons.forEach(button => {
    button.addEventListener("click", () => {
        playRound(getComputerChoice(), button.className)

        if (computerScore >= 5) {
            div.textContent = "You: " + humanScore + " | Computer: " + computerScore + " | Computer wins!"
        } else if (humanScore >= 5) {
            div.textContent = "You: " + humanScore + " | Computer: " + computerScore + " | You win!"
        }
    })
})