let playerScore = 0;
let computerScore = 0;

function playerChoice() {
	let choice = prompt('Rock, Paper or Scissors?','');
  let sensitiveChoice = choice.toLowerCase();
  
  switch (choice) {
    case 'rock':
      return 1
      break;
    case 'paper':
      return 2
      break;
    case 'scissors':
      return 3
      break;
  }
}

function computerPlay() {
  return (Math.floor(Math.random()*3))+1;
}

function playRound(playerSelection, computerSelection) {
  console.log(computerSelection);
  if (playerSelection == computerSelection){
    console.log('Draw');
    return 1;
  } else if (playerSelection == 1 && computerSelection == 3){
    console.log('You Won! Rock beats Scissors')
    return 2;
  } else if (playerSelection == 3 && computerSelection == 2){
    console.log('You Won! Scissors beats Paper')
    return 2;
  } else if (playerSelection == 2 && computerSelection == 1){
    console.log('You Won! Paper beats Rock')
    return 2;
  } else if (playerSelection == 1 && computerSelection == 2){
    console.log('You Lost! Paper beats Rock')
    return 3;
  } else if (playerSelection == 2 && computerSelection == 3){
    console.log('You Lost! Scissors beats Paper')
    return 3;
  } else if (playerSelection == 3 && computerSelection == 1){
    console.log('You Lost! Rock beats Scissors')
    return 3;
  }
}
function game() {
  for (let i = 0; i<5; i++){
    let score = playRound(playerChoice(),computerPlay());
    if (score == 2) {
      playerScore += 1;
    } else if (score == 3) {
      computerScore += 1;
    }
    console.log('Human = ' + playerScore + ' - ' + 'Machine = ' + computerScore)
  }
  (playerScore > computerScore)? console.log('You Won! Machines Suck') : console.log('You Suck Human');
}

game();
