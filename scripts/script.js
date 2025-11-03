/* what our script should do? 
  1/ we pick a move  
  2/ the computer picks a move randomly
  3/ decides the result
  4/ display it in the result-display
  5/ display the icons of the moves
  6/ add score
  7/ add a score and save it in document & JSON
  8/ add auto play feature

  1/ Done!
  2/ Done!
  3/ Done!
  4/ Done!
*/
const resultText = document.querySelector('.result');

let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
}

document.querySelector('.js-rock-move').addEventListener('click',() => {
  playGame('rock');
})
document.querySelector('.js-paper-move').addEventListener('click',() => {
  playGame('paper');
})
document.querySelector('.js-scissors-move').addEventListener('click',() => {
  playGame('scissors');
})



const textDisplay = document.querySelector('.js-result-text');
const computerSection = document.querySelector('.computer-move');
const youSection = document.querySelector('.you-move');

function playGame(playerMove) {
  const computerMove = pickComputerMove();
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
  console.log(score);
  
  textDisplay.innerText = `${result} the round!`;

  updateUI(computerMove,playerMove);
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
  else{
    alert(`${randomNumber}`);
  }
}

function updateUI(computerMove,playerMove) {
  computerSection.innerHTML = `<img src="../Assets/Icons/${computerMove}-emoji.png" class="move-icon">`;

  youSection.innerHTML = `<img src="../Assets/Icons/${playerMove}-emoji.png" class="move-icon">`;

  resultText.innerText = `${score.wins} : ${score.losses}`
}