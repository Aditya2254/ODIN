console.log("Hello world.");
let humanScore = 0, computerScore = 0;


let getComputerChoice = function() {
    let choice = Math.floor(Math.random()*3);
    let results = ['rock','paper','scissors'];
    console.log(`Computer's choice: ${results[choice]}`);
    return results[choice];
}

let getHumanChoice = function() {
    let choice = prompt("Enter your choice: ","").toLowerCase();
    let results = ['rock','paper','scissors'];
    if(!results.includes(choice)){
        return -1;
    }
    console.log(`Your choice: ${choice}`);
    return choice;
}

let playRound = function(humanChoice, computerChoice) {
    let score = 0;
    //dismiss round
    if(humanChoice==-1){
        console.log("Invalid input: Round dismissed.")
        return;
    }

    if(humanChoice=="rock" && computerChoice=="paper")
        score-=1;
    else if(humanChoice=="paper" && computerChoice=="scissors")
        score-=1;
    else if(humanChoice=="scissors" && computerChoice=="rock")
        score-=1;
    else if(humanChoice=="paper" && computerChoice=="rock")
        score+=1;
    else if(humanChoice=="scissors" && computerChoice=="paper")
        score+=1;
    else if(humanChoice=="rock" && computerChoice=="scissors")
        score+=1;
    if(score>0){
        console.log("You win!");
        humanScore+=1;
    }
    else if(score == 0){
        console.log("Draw");
        humanScore+=1;
        computerScore+=1;
    }
    else{
        console.log("You Lose.");
        computerScore+=1;
    }
}

let playGame = function() {
    i=5
    while (i>0) {
        playRound(getHumanChoice(),getComputerChoice());
        i-=1;
    }
    if(humanScore>computerScore)
        console.log(`You win the game! ${humanScore} : ${computerScore}`);
    else
        console.log(`You lost the game. ${humanScore} : ${computerScore}`);
}

playGame();