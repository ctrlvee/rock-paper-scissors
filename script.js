let compCount = 0;
let playerCount = 0;


function checkGame() {
    if (compCount === 5){
        console.log("The computer won 5 rounds");
    } else if (playerCount === 5) {
        console.log("The user won 5 rounds");
    }
    
}
function addPoints(whoWon) {
    if (whoWon === "Computer Wins") {
        compCount +=1;
    } else if (whoWon === "User Wins") {
        playerCount +=1;
    } else {
        console.log("No one gets a point. It was a tie");
    }
}

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
        addPoints(userWin);
        return userWin;
    } else if (playerSelection === '') {
        console.log("Left empty - Try again");
    } else if (computerSelection === "rock" && playerSelection === "scissors" || computerSelection=== "paper" && playerSelection === "rock" || computerSelection === "scissors" && playerSelection === "paper") {
        console.log(`Computer wins! ${computerSelection} beats ${playerSelection}`);
        const compWin = "Computer Wins";
        addPoints(compWin);
        return compWin;
    }
    else {
        console.log("Your input is invalid");
    }   
}
 
function playGame() {
    

    playRound()
}

function askIfPlay () {
    window.confirm("Do you want to play the game?"):
    if (confirm("Yes"))

}


/// Dealing with buttons
// Run game with rock as playerChoice
document.getElementById('rock-btn').addEventListener("click", function() {
    
    playRound('rock', computerPlay());

});

document.getElementById('paper-btn').addEventListener("click", function() {
    
    playRound('paper', computerPlay());

});
document.getElementById('scissors-btn').addEventListener("click", function() {
    
    playRound('scissors', computerPlay());

});

/* Plays 5 rounds
playRound((prompt("Choose rock, paper, or scissors", "")).toLowerCase(), computerPlay());
playRound((prompt("Choose rock, paper, or scissors", "")).toLowerCase(), computerPlay());
playRound((prompt("Choose rock, paper, or scissors", "")).toLowerCase(), computerPlay());
playRound((prompt("Choose rock, paper, or scissors", "")).toLowerCase(), computerPlay());
playRound((prompt("Choose rock, paper, or scissors", "")).toLowerCase(), computerPlay());


 
*/