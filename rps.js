function computerPlay(){
    let final;
    let play = Math.floor(Math.random()* 3);
    if (play === 0) {
        final = 'paper';
    }
    else if (play === 1){
        final = 'rock';
    
    }
    else if (play === 2){
        final = 'scissors'
    }

    return final 
}

let jugadaPc = computerPlay();

function ronda(computerSelection) {

    let jugadaH = prompt("Introduzca su jugada: ");
    playerSelection = jugadaH
    
    if (playerSelection === 'paper' && computerSelection === 'rock')
        return 'you win';
    else if (playerSelection === 'rock' && computerSelection === 'scissors')
    {
        return 'you win';
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper')
    {
        return 'you win';
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper')
    {
        return 'you lose';
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors')
    {
        return 'you lose';
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        return 'you lose';
    }
    else if (playerSelection === computerSelection)
    {
        return 'tie';
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        console.log(ronda(computerPlay()))
    }
}
game()
