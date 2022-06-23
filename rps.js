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
let counter = 0;
let counterPc = 0;

function ronda(computerSelection) {

    let jugadaH = prompt("Introduzca su jugada: ");
    playerSelection = jugadaH;
    
    if (playerSelection === 'paper' && computerSelection === 'rock'){
        counter++;
        return 'You win.';
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors')
    {   counter++;
        return 'You win.';
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper')
    {   counter++;
        return 'You win.';
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper')
    {   counterPc++;
        return 'You lose.';
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors')
    {   counterPc++;
        return 'You lose.';
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        counterPc++;
        return 'You lose.';
    }
    else if (playerSelection === computerSelection)
    {
        return 'Tie.'; 
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        console.log(ronda(computerPlay()));
    }
}

game()
console.log('Your score was ' + counter + '.')
console.log('The computer score was ' + counterPc + '.')

if (counter === counterPc) {
    console.log("It's a tie.")
}

else if (counter > counterPc) {
    console.log('You have won the game!')
}
else if (counterPc > counter) {
    console.log('The computer wins the game!')
}
