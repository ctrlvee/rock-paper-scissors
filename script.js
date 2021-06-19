function computerPlay() {
    answer = '';
    switch(randomNum()) {
        case 0: 
            answer = "rock";
            return answer
        break;
        case 1:
            answer = "scissors";
            return answer
            break;
        case 2:
            answer = "paper";
            return answer
            break;
    }
    

}
function randomNum() {{
    randomNumber = Math.floor((Math.random() * 3));
    return randomNumber
}}

function playRound(playerSelection, computerSelection) {
    let playerSelection = prompt("Choose rock, paper, or scissors", "");
    
    
}

console.log(playRound())
//console.log(computerPlay())