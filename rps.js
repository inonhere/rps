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
let jugadaH = prompt(
    "Introduzca su jugada: ");


function ronda(playerSelection, computerSelection) {
    
    if (playerSelection === 'paper' && computerSelection === 'rock')
        console.log('you win');
    else if (playerSelection === 'rock' && computerSelection === 'scissors')
    {
        console.log('you win');
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper')
    {
        console.log('you win');
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper')
    {
        console.log('you lose');
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors')
    {
        console.log('you lose');
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        console.log('you lose');
    }
    else if (playerSelection === computerSelection)
    {
        console.log('tie')
    }
}


console.log(ronda(jugadaH, computerPlay()))