let playerScore = 0;
let computerScore = 0;
let test = 0;
let rounds = 1;
const container = document.querySelector("#container");
const resultsDisplay = document.createElement("p");
const roundsDisplay = document.createElement("p");
const gameText = document.querySelector(".game-text");
const gameChoices = document.createElement("div");
const playScissors = document.createElement("button");
const playRock = document.createElement("button");
const playPaper = document.createElement("button");
const replay = document.createElement("button");
replay.textContent = "play again?";

const computerPlay = () => {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
};

const playRound = (playerSelection, computerSelection) => {
  const gameText = document.querySelector(".game-text");
  const container = document.querySelector("#container");
  playerSelection = playerSelection.toLowerCase();

  console.log("ROUNDS: ", rounds);

  // const resultsDisplay = document.createElement("p");
  //`player: ${playerScore}, computer: ${computerScore}`

  // container.appendChild(resultsDisplay);
  while (rounds < 5) {
    rounds++;
    if (playerSelection === "rock" && computerSelection === "scissors") {
      console.log("You win! Rock smashes scissors", playerScore, computerScore);
      gameText.textContent = "You win! Rock smashes scissors";
      playerScore++;
      resultsDisplay.textContent = `player: ${playerScore} computer: ${computerScore}`;
      roundsDisplay.textContent = `round: ${rounds}/5`;
      return playerScore;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      console.log("You win! Paper covers rock", playerScore, computerScore);
      gameText.textContent = "You win! Paper covers rock";
      playerScore++;
      resultsDisplay.textContent = `player: ${playerScore} computer: ${computerScore}`;
      roundsDisplay.textContent = `round: ${rounds}/5`;
      return playerScore;
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "paper"
    ) {
      console.log("You win! Scissors cuts paper", playerScore, computerScore);
      gameText.textContent = "You win! Scissors cuts paper";
      playerScore++;
      resultsDisplay.textContent = `player: ${playerScore} computer: ${computerScore}`;
      roundsDisplay.textContent = `round: ${rounds}/5`;
      return playerScore;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
      console.log("You lose. Paper covers rock", playerScore, computerScore);
      gameText.textContent = "You win! Scissors cuts paper";
      computerScore++;
      resultsDisplay.textContent = `player: ${playerScore} computer: ${computerScore}`;
      roundsDisplay.textContent = `round: ${rounds}/5`;
      return computerScore;
    } else if (
      playerSelection === "paper" &&
      computerSelection === "scissors"
    ) {
      console.log("You lose. Scissors cuts paper", playerScore, computerScore);
      gameText.textContent = "You lose. Scissors cuts paper";
      computerScore++;
      resultsDisplay.textContent = `player: ${playerScore} computer: ${computerScore}`;
      roundsDisplay.textContent = `round: ${rounds}/5`;
      return computerScore;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      console.log(
        "You lose. Rock smashes scissors",
        playerScore,
        computerScore
      );
      gameText.textContent = "You lose. Rock smashes scissors";
      computerScore++;
      roundsDisplay.textContent = `round: ${rounds}/5`;
      return computerScore;
    } else if (playerSelection === computerSelection) {
      gameText.textContent = "it is a tie";
      resultsDisplay.textContent = `player: ${playerScore} computer: ${computerScore}`;
      roundsDisplay.textContent = `round: ${rounds}/5`;
      return "It's a tie!!!!!!!!!";
    }
  }
  container.removeChild(gameChoices);
  gameOver();
  console.log("game over!!!!!!!");
};

const gameOver = () => {
  if (playerScore > computerScore) {
    gameText.textContent = `You win! Your total score was ${playerScore}, while the computer's was only ${computerScore}.`;
  } else if (playerScore < computerScore) {
    gameText.textContent = "Game over. You lose. Play again!";
  } else {
    gameText.textContent = "Game over. It's a tie!";
  }
  // while (container.firstChild) {
  //   container.removeChild(container.firstChild);
  // }
  container.appendChild(replay);
  replay.onclick = () => {
    container.removeChild(replay);
    newGame();
  };
};

const game = () => {
  resultsDisplay.textContent = `player: ${playerScore} computer: ${computerScore}`;

  roundsDisplay.textContent = `round: ${rounds}/5`;

  gameText.textContent = "alright lets goooo";

  playScissors.classList.add("choiceButton");
  playScissors.textContent = "Scissors";
  playScissors.onclick = () => playRound("scissors", computerPlay());

  playRock.classList.add("choiceButton");
  playRock.textContent = "Rock";
  playRock.onclick = () => playRound("rock", computerPlay());

  playPaper.classList.add("choiceButton");
  playPaper.textContent = "Paper";
  playPaper.onclick = () => playRound("paper", computerPlay());

  gameChoices.appendChild(playRock);
  gameChoices.appendChild(playPaper);
  gameChoices.appendChild(playScissors);
  resultsDisplay.textContent = `player: ${playerScore} computer: ${computerScore}`;
  gameChoices.appendChild(resultsDisplay);
  gameChoices.appendChild(roundsDisplay);
  container.appendChild(gameChoices);
  console.log("ROUNDS: ", rounds);
  if (rounds === 5) {
    if (playerScore > computerScore) {
      gameText.textContent = `You win! Your total score was ${playerScore}, while the computer's was only ${computerScore}.`;
      return `You win! Your total score was ${playerScore}, while the computer's was only ${computerScore}.`;
    } else if (playerScore < computerScore) {
      gameText.textContent = "Game over. You lose. Play again!";
      return "You lose. Play again!";
    } else {
      gameText.textContent = "Game over. It's a tie!";
      return "It's a gosh darn tie!";
    }
    rounds = 0;
    newGame();
  }
};

const newGame = () => {
  const gameText = document.querySelector(".game-text");
  gameText.textContent = "yo. do u want to play rock paper scissors";
  rounds = 0;
  playerScore = 0;
  computerScore = 0;
  const yes = document.createElement("button");
  yes.textContent = "yes";
  yes.onclick = () => {
    game();
    container.removeChild(yes);
    container.removeChild(no);
  };

  const no = document.createElement("button");
  no.textContent = "no";
  no.onclick = () => {
    const resultsDisplay = document.querySelector(".game-text");
    resultsDisplay.textContent = "please leave then";
    container.removeChild(yes);
    container.removeChild(no);
    const changeMind = document.createElement("button");
    changeMind.textContent = "wait i change my mind";
    changeMind.onclick = () => {
      newGame();
      container.removeChild(changeMind);
    };
    container.appendChild(changeMind);
  };
  const container = document.querySelector("#container");
  container.appendChild(yes);
  container.appendChild(no);
};

// console.log(game());
newGame();
