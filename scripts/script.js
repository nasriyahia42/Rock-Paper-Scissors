/* what our script should do? 
  1/ we pick a move  
  2/ the computer picks a move randomly
  3/ decides the result
  4/ display it in the result-display
  5/ display the icons of the moves
  6/ add a score and save it in document & JSON
  7/ add auto play feature

  1/ Done!
  2/ Done!
*/


document.querySelector('.js-rock-move').addEventListener(() => {
  playGame('rock');
})
document.querySelector('.js-paper-move').addEventListener(() => {
  playGame('paper');
})
document.querySelector('.js-scissors-move').addEventListener(() => {
  playGame('scissors');
})

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result;

  if (playMove === computerMove) {result = 'draw'}

}

function pickComputerMove() {
  const randomNumber = Math.floor(Math.random() * 3);

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