function computerPlay() {
    answer = '';
    switch(randomNum()) {
        case 0: 
            answer = "rock";
            break;
        case 1:
            answer = "scissors";
            break;
        case 2:
            answer = "paper";
            break;
    }
    return answer
}
function randomNum() {{
    randomNumber = Math.floor((Math.random() * 3));
    return randomNumber
}}

function playRound(playerSelection, computerSelection) {
 console.log("This is the computer choice: " +computerSelection);
 console.log("This is the player choice: " + playerSelection);
// Make the player choice case insensitive (ROCk, rOcK, rocK, etc)
    playerSelection = playerSelection.toLowerCase();

 // Compare the two choices
 if (playerSelection === computerSelection) {
     tie = "It's a tie!"
     console.log(tie)
 } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
    console.log(`User wins! ${playerSelection} beats ${computerSelection}`);
 } else {
     console.log(`Computer wins! ${computerSelection} beats ${playerSelection}`);
 }
    
}


playRound(prompt("Choose rock, paper, or scissors", ""), computerPlay());
//console.log(computerPlay())

/*
  console.log("Player chose: " +playerSelection+ " & computer chose: " + computerSelection);

    // Make sure player input is R/P/S and nothing else
    if (playerSelection.toLowerCase() !== 'rock' || playerSelection.toLowerCase() !== 'paper' || playerSelection.toLowerCase() !== 'scissors' ) {
        badString = 'That is an unexpected response'
        console.log(badString)
        //return playerSelection
    } else {
        if (playerSelection === computerSelection) {
          tie = 'This match is a tie';
          console.log(tie);
          return tie
        } else {
            console.log("nice");
        }

*/