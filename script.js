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
     const tie = "It's a tie!"
     console.log(tie)
     return tie;
 } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
    console.log(`User wins! ${playerSelection} beats ${computerSelection}`);
    const userWin = "User Wins";
    return userWin;
 } else {
     console.log(`Computer wins! ${computerSelection} beats ${playerSelection}`);
     const compWin = "Computer Wins";
     return compWin;
 }


}
const computerSelection = computerPlay();
console.log(playRound(prompt("Choose rock, paper, or scissors", ""), computerSelection));
/*
function game() {
    let gameRound = 1;
    let userCount = 0;
    let compCount = 0;

    while (gameRound !== 5) {
        gameRound += 1;
        let result = playRound(prompt("Choose rock, paper, or scissors", ""), computerSelection);

        switch (result) {
            case compWin:
                compCount += 1;
                break;
            case userWin:
                userCount += 1;
                break
        }
        
    }


}

game();
*/