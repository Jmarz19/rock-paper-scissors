function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice < 1) {
    return "rock";
  } else if (computerChoice < 2) {
    return "paper";
  } else {
    return "scissor";
  }
}

//Human choice

function getHumanChoice() {
  const humanChoice = prompt("Enter rock, paper, scissors:");
  return humanChoice;
}

//Player Scores

// Play game
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log("You win! ${humanChoice} beats ${computerChoice}");
    } else {
      computerScore++;
      console.log("You lose! ${computerChoice} beats ${humanChoice}");
    }
  }

  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

  //Declare Winner
  if (humanScore > computerScore) {
    console.log(
      `You win the game! Final score - You: ${humanScore} Computer: ${computerScore}`,
    );
  } else if (computerScore > humanScore) {
    console.log(
      `You lose the game! Final score - You: ${humanScore} Computer: ${computerScore}`,
    );
  } else {
    console.log(
      `It's a tie game! Final score - You: ${humanScore} Computer: ${computerScore}`,
    );
  }
}
