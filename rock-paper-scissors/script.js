let humanScore = 0;
let computeScore = 0;


function getComputerChoice(){
    let num = Math.floor(Math.random()*10);
    if (num <= 3){
        return "rock"
    }
    else if (num <= 6){
        return "scissors"
    }
    else{
        return "paper"
    }
}

function getHumanChoice(){
    let user_choice = prompt("Enter your choice: ")
    return user_choice
}


function playRound(humanChoice, computerChoice){
    humanChoice.toLowerCase()
    if (humanChoice == "rock" && computerChoice == "scissors"){
        humanScore += 1;
        console.log(`You win. ${humanChoice} beats ${computerChoice}`)
    }
    else if (humanChoice == "paper" && computerChoice == "rock"){
        humanScore += 1;
        console.log(`You win. ${humanChoice} beats ${computerChoice}`)
    }
    else if(humanChoice == "scissors" && computerChoice == "paper"){
        humanScore += 1;
        console.log(`You win. ${humanChoice} beats ${computerChoice}`)
    }
    else if(humanChoice == computerChoice){
        console.log(`Game draw. ${humanChoice} draws ${computerChoice}`)
    }
    else {
        computeScore += 1;
        console.log(`You lose. ${computerChoice} beats ${humanChoice}`)
    }
    console.log(`Human score: ${humanScore} \t Computer score: ${computeScore}`)
}


for(let i=0;i<5;i++){
    const human = getHumanChoice();
    const computer = getComputerChoice();

    playRound(human, computer);

}