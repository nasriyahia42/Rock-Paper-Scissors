/* what our script should do? 
  1/ we pick a move  
  2/ the computer picks a move randomly
  3/ decides the result
  4/ display it in the result-display
  5/ display the icons of the moves
  6/ add score
  7/ save the score in document & JSON
  8/ add a restart button
  9/ add auto play feature

  1/ Done!
  2/ Done!
  3/ Done!
  4/ Done!
  5/ Done!
  6/ Done!
  7/ Done!
*/
const resultDisplay = document.querySelector('.js-result-text');
const computerSection = document.querySelector('.computer-move');
const youSection = document.querySelector('.you-move');

const scoreText = document.querySelector('.result');

const roundText = document.querySelector('.js-round');

let round = JSON.parse(localStorage.getItem('round')) || 0;

let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
}
resultDisplay.innerText = JSON.parse(localStorage.getItem('resultDisplay')) || 'Start Playing';

let playerMove =  JSON.parse(localStorage.getItem('player-move')) || '' ;
let computerMove = JSON.parse(localStorage.getItem('computer-move')) || '' ;

console.log(computerMove + ' ' + playerMove);

updateUI(playerMove,computerMove);


document.querySelector('.js-rock-move').addEventListener('click',() => {
  playGame('rock');
})
document.querySelector('.js-paper-move').addEventListener('click',() => {
  playGame('paper');
})
document.querySelector('.js-scissors-move').addEventListener('click',() => {
  playGame('scissors');
})

document.querySelector('.js-reset-button').addEventListener('click',() => {
  reset();
})





function playGame(playerMove) {
  roundText.innerText = `Round: ${round++}`;
  

  computerMove = pickComputerMove();
  let result;


  const winConditions = {
    'rock': ['scissors'],
    'paper': ['rock'],
    'scissors': ['paper']
  }

  if (playerMove === computerMove) {result = 'draw';}
  else {
    if (winConditions[playerMove].includes(computerMove)) {
      result = 'you win';
      score.wins++;
    }
    else {
      result = 'you lose';
      score.losses++;
    }
  }

  
  resultDisplay.innerText = `${result} the round!`;

  localStorage.setItem('score',JSON.stringify(score));
  localStorage.setItem('player-move',JSON.stringify(playerMove));
  localStorage.setItem('computer-move',JSON.stringify(computerMove));
  localStorage.setItem('round',JSON.stringify(round));

  updateUI(playerMove,computerMove);
}

function pickComputerMove() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    return 'rock';
  }
  else if (randomNumber === 2) {
    return 'paper';
  }
  else if (randomNumber === 3) {
    return 'scissors';
  }
}

function updateUI(playerMove,computerMove) {
  scoreText.innerText = `${score.wins} : ${score.losses}`;
  roundText.innerText = `Round: ${round}`;



  if (computerMove === '' || playerMove === '') {
    computerSection.innerHTML = '';
    youSection.innerHTML = '';
    return;
  }


  computerSection.innerHTML = `<img src="../Assets/Icons/${computerMove}-emoji.png" class="move-icon">`;

  youSection.innerHTML = `<img src="../Assets/Icons/${playerMove}-emoji.png" class="move-icon">`;
}

function reset() {
  score = {
  wins: 0,
  losses: 0,
  }

  computerMove = '';
  playerMove = '';
  round = 0;

  resultDisplay.innerText = 'Start Playing';

  updateUI(computerMove,playerMove);
}