function getComputerChoice(){
    let rnd = Math.floor(Math.random() * 3);
    switch (rnd) {
        case 0:
            choice = "Rock"           
            break;
        case 1:
            choice = "Paper"
            break;
        case 2:
            choice = "Scissors"
            break;
    }
    console.log(choice);
    console.log(rnd);
    return choice;
}

function playRound(Player,Computer){
    if(Player.toLowerCase() == Computer.toLowerCase()){
        return "Draw | Player: "+ Player + "\nComputer: "+ Computer;
    }
    else if(Player.toLowerCase() == "rock" && Computer.toLowerCase() != "rock"){
        if(Computer.toLowerCase() == "paper"){
            return "You Lose! Paper beats Rock"+ "\n" + "Player  : " +Player + "\nComputer: "+ Computer;
        }
        else{
            return "You win! Rock beats Scissors"+ "\n" + "Player  : " +Player + "\nComputer: "+ Computer;
        }
    }
    else if(Player.toLowerCase() == "paper" && Computer.toLowerCase() != "paper"){
        if(Computer.toLowerCase() == "scissors"){
            return "You Lose! Scissors beats Paper"+ "\n"+"Player  : " +Player + "\nComputer: "+ Computer;
        }
        else{
            return "You win! Paper beats Rock"+ "\n" + "Player  : " + Player + "\nComputer: "+ Computer;
        }
    }
    else if(Player.toLowerCase() == "scissors" && Computer.toLowerCase() != "scissors"){
        if(Computer.toLowerCase() == "rock"){
            return "You Lose! Rock beats Scissors"+ "\n"+ "Player  : " +Player + "\nComputer: "+ Computer;
        }
        else{
            return "You win! Scissors beats Paper"+ "\n"+ "Player  : " +Player + "\nComputer: "+ Computer;
        }
    }
}



const Player = "rock";
const Computer = getComputerChoice();
console.log(playRound(Player, Computer));
