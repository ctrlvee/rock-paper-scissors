let compCount = 0;
let playerCount = 0;
let playerSelection = '';



const winCountValue = document.querySelector(".winCountValue");
const value = document.createElement('p');
value.classList.add('value');
value.textContent = `${playerCount}`
winCountValue.appendChild(value);

function updateScore() {
    value.textContent = `${playerCount}`
    winCountValue.appendChild(value);
}


function checkGame() {
    if (compCount === 5){
        console.log("The computer won 5 rounds");
    } else if (playerCount === 5) {
        console.log("The user won 5 rounds");
    }
    changeResultContainer();
    
}
function changeResultContainer () 
{
    const container = document.querySelector('.result-container');
    const content = document.createElement('h4');
    content.classList.add('content');

    if (compCount ===5) {
        content.textContent = 'Computer Wins!';
        container.appendChild(content);
    } else if (playerCount ===5) {
        content.textContent = 'Player Wins!';
        container.appendChild(content);
    } else {
        return
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


function playRound() {
// Make the player choice case insensitive (ROCk, rOcK, rocK, etc)
    checkGame()
    updateScore();


    computerSelection = computerPlay();
    console.log(computerSelection);
    console.log(playerSelection);

  // Check if user input is valid
  // Compare the two choicess
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
    
/*??
function playGame() {
    
    for (let i=0; i<=5; i+=1) {
        playRound()
    }
    
} */

function askIfPlay () {
    
    if (confirm("Do you want to play the game?")) {
        alert("Select your hand at the top left");
    } else {
        console.log('noo');
        
    }

}
// askIfPlay();

document.getElementById('rock-btn').addEventListener("click", function() {
    playerSelection = 'rock';
    playRound();
});
document.getElementById('paper-btn').addEventListener("click", function() {
    playerSelection = 'paper';
    playRound();
});
document.getElementById('scissors-btn').addEventListener("click", function() {
    playerSelection = 'scissors';
    playRound();
});

