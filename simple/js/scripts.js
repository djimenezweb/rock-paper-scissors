const yourScoreElement = document.getElementById('your-score');
const computerScoreElement = document.getElementById('computer-score');
const iconContainerElement = document.getElementById('icon-container');
const resultContainerElement = document.getElementById('result-container');
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
const youPickedIcon = document.getElementById('you-picked-icon');
const computerPicked = document.getElementById('computer-picked');
const computerPickedIcon = document.getElementById('computer-picked-icon');
const playAgainElement = document.getElementById('play-again');

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
  iconContainerElement.classList.add('none');
  resultContainerElement.classList.add('flex');
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
  youPickedIcon.src = `../assets/images/icon-${ev.target.id}.svg`;
  youPicked.classList.add(`button--${ev.target.id}`);
  computerChooses = optionsArray[randomNumber()];
  computerPickedIcon.src = `../assets/images/icon-${computerChooses}.svg`;
  computerPicked.classList.add(`button--${computerChooses}`);
  resultGame();
});

playAgainElement.addEventListener('click', () => {
  iconContainerElement.classList.remove('none');
  resultContainerElement.classList.remove('flex');
  youPicked.classList.remove(
    'button--paper',
    'button--scissors',
    'button--rock'
  );
  computerPicked.classList.remove(
    'button--paper',
    'button--scissors',
    'button--rock'
  );
});
