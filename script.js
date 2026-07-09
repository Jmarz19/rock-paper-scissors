let humanScore = 0;
let computerScore = 0;

const roundResult = document.querySelector("#roundResult");
const score = document.querySelector("#score");

function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice < 1) return "rock";
  else if (computerChoice < 2) return "paper";
  else return "scissors";
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    roundResult.textContent = "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    roundResult.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
  }

  score.textContent = `Score - You: ${humanScore} Computer: ${computerScore}`;
  checkWinner();
}

function playGame(playerSelection) {
  playRound(playerSelection, getComputerChoice());
}

function checkWinner() {
  if (humanScore === 5) {
    roundResult.textContent = "You win the game!";
    disableButtons();
  } else if (computerScore === 5) {
    roundResult.textContent = "Computer wins the game!";
    disableButtons();
  }
}

function disableButtons() {
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", function () {
  playGame("rock");
});

paperBtn.addEventListener("click", function () {
  playGame("paper");
});

scissorsBtn.addEventListener("click", function () {
  playGame("scissors");
});
