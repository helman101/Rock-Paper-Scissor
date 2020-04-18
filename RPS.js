let playerScore = 0;
let computerScore = 0;

const result = document.querySelector('#results');
const buttons = document.querySelectorAll('button');
const computerSay = document.createElement('h4');
const roundResult = document.createElement('h4');
const roundScore = document.createElement('h3');
const finalMsg = document.createElement('h2');

computerSay.classList.add('results');
roundResult.classList.add('results');
roundScore.classList.add('results');
finalMsg.classList.add('results');

result.appendChild(computerSay);
result.appendChild(roundResult);
result.appendChild(roundScore);
result.appendChild(finalMsg);

computerSay.textContent = 'The Machine is Waiting for You...';
roundScore.textContent = 'Human = ' + playerScore + ' - ' + 'Machine = ' + computerScore;
roundResult.textContent = 'Ready to Play';
finalMsg.textContent = 'Who will win?!';

function computerPlay() {
  return (Math.floor(Math.random()*3))+1;
}

function playRound(playerSelection, computerSelection) {

  if (playerSelection == computerSelection){ 
    computerSay.textContent = ''   
    roundResult.textContent = 'Draw';
    roundResult.style.color = 'black';
    return 1;
  } else if (playerSelection == '1' && computerSelection == 3){
    computerSay.textContent = 'Computer selects: Scissors.'
    roundResult.textContent = 'You Won! Rock beats Scissors';
    roundResult.style.color = 'green';
    return 2;
  } else if (playerSelection == '3' && computerSelection == 2){
    computerSay.textContent = 'Computer selects: Paper.'
    roundResult.textContent = 'You Won! Scissors beats Paper';
    roundResult.style.color = 'green';
    return 2;
  } else if (playerSelection == '2' && computerSelection == 1){
    computerSay.textContent = 'Computer selects: Rock.'
    roundResult.textContent = 'You Won! Paper beats Rock';
    roundResult.style.color = 'green';
    return 2;
  } else if (playerSelection == '1' && computerSelection == 2){
    computerSay.textContent = 'Computer selects: Paper.'
    roundResult.textContent = 'You Lost! Paper beats Rock';
    roundResult.style.color = 'red';
    return 3;
  } else if (playerSelection == '2' && computerSelection == 3){
    computerSay.textContent = 'Computer selects: Scissors.'
    roundResult.textContent = 'You Lost! Scissors beats Paper';
    roundResult.style.color = 'red';
    return 3;
  } else if (playerSelection == '3' && computerSelection == 1){
    computerSay.textContent = 'Computer selects: Rock.'
    roundResult.textContent = 'You Lost! Rock beats Scissors';
    roundResult.style.color = 'red';
    return 3;
  }
}

buttons.forEach((button) => {
    button.addEventListener ('click', () => {
        
        let playerChoice = button.value;
        let score = playRound(playerChoice,computerPlay());
        let i = 0;

        if (score == 2) {
            playerScore += 1;
          } else if (score == 3) {
            computerScore += 1;
          }

            roundScore.textContent = 'Human = ' + playerScore + ' - ' + 'Machine = ' + computerScore;
            
          if (playerScore == 5){      
              finalMsg.textContent = 'You Won! Machines Suck!';
          } else if (computerScore == 5){
              finalMsg.textContent = 'You Suck Human!';

          }
    })
})

