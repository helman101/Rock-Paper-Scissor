let num = () => Math.floor(Math.random()*3);


function computerPlay(playerSay){
  let numb = num();
  let option = ["ROCK","PAPER","SCISSORS"];
  let res = option.slice(numb,numb+1);
  return (res==playerSay)? computerPlay(playerSay) : res;
}

function playRound(playerSelection,computerSelection){
  
  if (playerSelection=="SCISSORS" && computerSelection=="PAPER"){
  	console.log("You win! Scissors beats Paper");
  	return 'true';
  }else if (playerSelection=="PAPER" && computerSelection=="ROCK"){   
  	console.log("You win! Paper beats Rock");
    return 'true';
  }else if (playerSelection=="ROCK" && computerSelection=="SCISSORS"){
  	console.log("You win! Rock beats Scissor");
    return 'true';
  }else if (playerSelection=="SCISSORS" && computerSelection=="ROCK"){
  	console.log("You lose! Rock beats Scissors");
    return 'false';
	}else if (playerSelection=="ROCK" && computerSelection=="PAPER"){
  	console.log("You lose! Rock beats Scissors");
    return 'false';
  }else if (playerSelection=="PAPER" && computerSelection=="SCISSORS"){
  	console.log("You lose! Scissors beats Paper");
    return 'false';
  }
}


function game(){
  let playerScore = 0;
  let computerScore = 0;

  let playerSay= prompt('Rock, Paper or Scissors?','');
  (playRound(playerSay,computerPlay(playerSay))=='true')? playerScore ++ : computerScore ++;
  console.log('Humans = ',playerScore,' - ','Machines = ',computerScore);
  
  playerSay= prompt('Rock, Paper or Scissors?','');
  (playRound(playerSay,computerPlay(playerSay))=='true')? playerScore ++ : computerScore ++;
  console.log('Humans = ',playerScore,' - ','Machines = ',computerScore);
  
  playerSay= prompt('Rock, Paper or Scissors?','');
  (playRound(playerSay,computerPlay(playerSay))=='true')? playerScore ++ : computerScore ++;
  console.log('Humans = ',playerScore,' - ','Machines = ',computerScore);
  
  playerSay= prompt('Rock, Paper or Scissors?','');
  (playRound(playerSay,computerPlay(playerSay))=='true')? playerScore ++ : computerScore ++;
  console.log('Humans = ',playerScore,' - ','Machines = ',computerScore);
  
  playerSay= prompt('Rock, Paper or Scissors?','');
  (playRound(playerSay,computerPlay(playerSay))=='true')? playerScore ++ : computerScore ++;
  console.log('Humans = ',playerScore,' - ','Machines = ',computerScore);
  
  console.log((playerScore>computerScore)? 'You win, machines sucks.' : 'You suck human.')

}



game();