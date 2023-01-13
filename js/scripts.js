const yourScoreElement = document.getElementById('your-score');
const computerScoreElement = document.getElementById('computer-score');
const iconContainerElement = document.getElementById('icon-container');
const paperElement = document.getElementById('paper');
const scissorsElement = document.getElementById('scissors');
const rockElement = document.getElementById('rock');
const optionsArray = ['paper', 'scissors', 'rock'];
const gameOptions = {
  paper: { scissors: false, rock: true },
  scissors: { paper: true, rock: false },
  rock: { paper: false, scissors: true }
};
const resultElement = document.getElementById('result');
const youPicked = document.getElementById('you-picked');
const computerPicked = document.getElementById('computer-picked');

let youChoose = '';
let computerChooses = '';
let yourScore = 0;
let computerScore = 0;

const randomNumber = () => {
  return Math.floor(Math.random() * optionsArray.length);
};

const checkGame = () => {
  return gameOptions[youChoose][computerChooses];
};

const printScore = () => {
  yourScoreElement.textContent = yourScore;
  computerScoreElement.textContent = computerScore;
};

const resultGame = () => {
  if (youChoose === computerChooses) {
    resultElement.textContent = 'Empate';
    return;
  }
  if (checkGame()) {
    yourScore++;
    resultElement.textContent = 'Has ganado';
    printScore();
    return;
  }
  computerScore++;
  resultElement.textContent = 'Has perdido';
  printScore();
};

iconContainerElement.addEventListener('click', ev => {
  youChoose = ev.target.id;
  computerChooses = optionsArray[randomNumber()];
  console.log('Has elegido ' + youChoose);
  console.log('Ordenador ha elegido ' + computerChooses);
  resultGame();
});
