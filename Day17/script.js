const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const userChoice = document.querySelector(".user");
const compChoice = document.querySelector(".computer");
const winner = document.querySelector(".winner h2");
const userScore = document.querySelector(".userScore");
const computerScore = document.querySelector(".computerScore");

let userWin = 0;
let computerWin = 0;
const choices = ["rock", "scissors", "paper"];
function getComputerChoice() {
  const randomIdx = Math.floor(Math.random() * 3);
  return choices[randomIdx];
}

function userInput(userChoiceStr) {
  const computerChoicestr = getComputerChoice();

  userChoice.innerHTML = `Your choice : ${userChoiceStr}`;
  compChoice.innerHTML = `Computer Choice : ${computerChoicestr}`;

  if (userChoiceStr === computerChoicestr) {
    winner.innerHTML = `Its a Tie!`;
    return;
  }
  const result = getWinner(userChoiceStr, computerChoicestr);

  if (result == "user") {
    winner.innerHTML = `User Wins`;
    userWin++;
  } else {
    winner.innerHTML = `Computer Wins`;
    computerWin++;
  }
  updateScore();
}

function getWinner(userChoiceStr, computerChoicestr) {
  if (userChoiceStr == "rock" && computerChoicestr == "scissors") {
    return "user";
  } else if (userChoiceStr == "paper" && computerChoicestr == "rock") {
    return "user";
  } else if (userChoiceStr == "scissors" && computerChoicestr == "paper") {
    return "user";
  } else {
    return "computer";
  }
}
function updateScore() {
  userScore.innerHTML = `Your Score : ${userWin}`;
  computerScore.innerHTML = `Computer's Score : ${computerWin}`;
}
rock.addEventListener("click", () => userInput("rock"));
paper.addEventListener("click", () => userInput("paper"));
scissors.addEventListener("click", () => userInput("scissors"));
