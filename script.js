function getComputerChoice(){
    // Randomly returns rock, paper, or scissors
    // Random assignment
    let randomNum = Math.random() * 10

    // Determine what play this random num will make
    let play = "scissors"
    if( randomNum >=0 && randomNum < 3.3){
        play = "rock"
    }else if (randomNum >= 3.3 && randomNum < 6.6) {
        play = "paper"
    }
    return play
}

function getHumanChoice() {
    let response = prompt("Rock, Paper, or Scissors?")

    // verify response
    while (true){
        if( response.toLowerCase() == "rock" || response.toLowerCase == "paper" || response.toLowerCase == "scissors"){
            return response.toLowerCase()
        }else{
            response = prompt("Your response is not valid, try again\nRock, Paper, or Scissors?")
        }
    }
}

function playGame(){
    count = 5
    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, compChoice){
        // computer chose rock
        if( compChoice == "rock" ){ 
            if( humanChoice == "paper"){
                console.log("You win! Paper beats Rock.")
                updateHumanScore()
            }else if(humanChoice == "rock"){ // lost/tied this round        
                    console.log("Tie!")
            }else{
                console.log("You lose! Rock beats Scissors.")
                updateComputerScore()
            }
        }
        // computer chose paper
        else if (compChoice == "paper") { 
            if( humanChoice == "scissors"){
                console.log("You win! Scissors beats Paper.")
                updateHumanScore()
            }else if(humanChoice == "paper"){ // lost this round
                    console.log("Tie")
            }else{
                console.log("You lose! Paper beats Rock")
                updateComputerScore()
            }
            
        }
        // computer chose scissors
        else { 
            if(humanChoice == "rock"){
                console.log("You win! Rock beats Scissors")
                updateHumanScore()
            }
            else if(humanChoice == "scissors"){
                console.log("Tie!")
            }
            else{
                console.log("You lose! Scissors beats Paper")
                updateComputerScore()
            }
        }
        // console.log(computerScore)
        // console.log(humanScore)
    }
    
    function updateHumanScore(){
        humanScore++
    }
    
    function updateComputerScore(){
        computerScore++
    }
    
    while (humanScore < 5 && computerScore < 5){ // Main game loop
        playRound(getHumanChoice(), getComputerChoice())
    }
    console.log(`Final Score: Human Player:${humanScore}\nComputer:${computerScore}`)

}

playGame()