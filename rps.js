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
    console.log("Computer: "+choice);
    return choice;
}

function playRound(Player,Computer){
    if(Player.toLowerCase() == Computer.toLowerCase()){
        return "D"; //Draw
    }
    else if(Player.toLowerCase() == "rock" && Computer.toLowerCase() != "rock"){
        if(Computer.toLowerCase() == "paper"){
            return "C"; //Computer win
        }
        else{
            return "P"; //Player win
        }
    }
    else if(Player.toLowerCase() == "paper" && Computer.toLowerCase() != "paper"){
        if(Computer.toLowerCase() == "scissors"){
            return "C" //Computer win
        }
        else{
            return "P"; //Player win
        }
    }
    else if(Player.toLowerCase() == "scissors" && Computer.toLowerCase() != "scissors"){
        if(Computer.toLowerCase() == "rock"){
            return "C"; //Computer win
        }
        else{
            return "P"; //Player win
        }
    }
}

function game(){
    let P = 0;
    let C = 0;
    for(let i = 0; i<5; i++){
        let pch = prompt("Choose: Rock | Paper | Scissors")
        console.log(pch)
        switch (playRound(pch,getComputerChoice())) {
            case "D":
                P++,C++;
                console.log("Player: "+P+" "+"Computer: "+C);
                break;
            case "C":
                C++;
                console.log("Player: "+P+" "+"Computer: "+C);
                break;
            case "P":
                P++;
                console.log("Player: "+P+" "+"Computer: "+C);
                break;
        }
    }
    if(P<C){
        console.log("Computer wins!");
        console.log("Player: "+P+"\nComputer"+C);
    }
    else{
        console.log("Player wins!");
        console.log("Player: "+P+"\nComputer: "+C);
    }
}

game()