function getComputerChoice(x){
    let rnd = Math.floor(Math.random() * x);
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
}

getComputerChoice(3);