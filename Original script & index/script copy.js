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

//function resetRound() [
 //   playerSelection = '';
 //   
//]

function playRound(playerSelection, computerSelection) {
// Make the player choice case insensitive (ROCk, rOcK, rocK, etc)
      
  // Check if user input is valid
  // Compare the two choices
    if (playerSelection === computerSelection) {
        const tie = "It's a tie!";
        console.log(tie);
        return tie;
    } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
        console.log(`User wins! ${playerSelection} beats ${computerSelection}`);
        const userWin = "User Wins";
        return userWin;
    } else if (playerSelection === '') {
        console.log("Left empty - Try again");
    } else if (computerSelection === "rock" && playerSelection === "scissors" || computerSelection=== "paper" && playerSelection === "rock" || computerSelection === "scissors" && playerSelection === "paper") {
        console.log(`Computer wins! ${computerSelection} beats ${playerSelection}`);
        const compWin = "Computer Wins";
        return compWin;
    }
    else {
        console.log("Your input is invalid");
    }
}


 

/* Plays 5 rounds
playRound((prompt("Choose rock, paper, or scissors", "")).toLowerCase(), computerPlay());
playRound((prompt("Choose rock, paper, or scissors", "")).toLowerCase(), computerPlay());
playRound((prompt("Choose rock, paper, or scissors", "")).toLowerCase(), computerPlay());
playRound((prompt("Choose rock, paper, or scissors", "")).toLowerCase(), computerPlay());
playRound((prompt("Choose rock, paper, or scissors", "")).toLowerCase(), computerPlay());


 
*/