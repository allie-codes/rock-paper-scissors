let playerScore = 0;
let computerScore = 0;
let test = 0;

const computerPlay = () => {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
};

const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("You win! Rock smashes scissors");
    playerScore++;
    return playerScore;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("You win! Paper covers rock");
    playerScore++;
    return playerScore;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("You win! Scissors cuts paper");
    playerScore++;
    return playerScore;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("You lose. Paper covers rock");
    computerScore++;
    return computerScore;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("You lose. Scissors cuts paper");
    computerScore++;
    return computerScore;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("You lose. Rock smashes scissors");
    computerScore++;
    return computerScore;
  } else if (playerSelection === computerSelection) {
    return "It's a tie!";
  }
};

const game = () => {
  for (let i = 0; i < 5; i++) {
    playRound(prompt(), computerPlay(), playerScore, computerScore);
    console.log(
      `current score: You have a score of ${playerScore}. CPU has a score of ${computerScore}.`
    );
  }
  // playRound(prompt(), computerPlay());
  if (playerScore > computerScore) {
    return `You win! Your total score was ${playerScore}, while the computer's was only ${computerScore}.`;
  } else if (playerScore < computerScore) {
    return "You lose. Play again!";
  } else {
    return "It's a tie!";
  }
};

console.log(game());
