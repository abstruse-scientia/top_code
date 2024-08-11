let humanScore = 0;
let computerScore = 0;





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


function humanChoice(event){
    let target = event.target;
    let computer = getComputerChoice();
    console.log(target.id);
    switch(target.id){
        case "rock":
            playRound("rock", computer);
            break;
        case "paper":
            playRound("rock", computer);
            break;
        case "scissors":
            playRound("scissors", computer);
            break;
    }
}

function checkScore(player, computer){
    let text = document.querySelector("#result");
    if (player == 5){
        text.textContent = 'You win . Click to play again.';
        humanScore = 0;
        computerScore = 0;
    }
    if(computer == 5){
        text.textContent = 'You lose. Click to play again.';
        humanScore = 0;
        computerScore = 0;
    }
}


let choice = document.querySelector('.bottom');
choice.addEventListener('click', humanChoice);



function playRound(humanChoice, computerChoice){
    humanChoice.toLowerCase();
    let result = document.querySelector("#result");
    let player_score = document.querySelector("#human_score")
    let computer_score = document.querySelector("#computer_score")
    if (humanChoice == "rock" && computerChoice == "scissors"){
        humanScore += 1;
        result.textContent = `You win. ${humanChoice} beats ${computerChoice}`
    }
    else if (humanChoice == "paper" && computerChoice == "rock"){
        humanScore += 1;
        result.textContent = `You win. ${humanChoice} beats ${computerChoice}`
    }
    else if(humanChoice == "scissors" && computerChoice == "paper"){
        humanScore += 1;
        result.textContent = `You win. ${humanChoice} beats ${computerChoice}`
    }
    else if(humanChoice == computerChoice){
        result.textContent = `Game draw. ${humanChoice} draws ${computerChoice}`
    }
    else {
        computerScore += 1;
        result.textContent = `You lose. ${computerChoice} beats ${humanChoice}`
    }
    player_score.textContent = (`Your score: ${humanScore}`);
    computer_score.textContent = (`Computer score: ${computerScore}`);
    checkScore(humanScore, computerScore);
}

