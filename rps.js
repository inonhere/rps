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

function ronda(computerSelection, playerSelection) {

    if (playerSelection === 'paper' && computerSelection === 'rock'){
        counter++;
        contenidoP.textContent = `has ganado! tu puntuaje: ${counter}` +
        ` su puntuaje: ${counterPc}`
        return progreso.appendChild(contenidoP);
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors')
    {   counter++;
        contenidoP.textContent = `has ganado! tu puntuaje: ${counter}` +
        ` su puntuaje: ${counterPc}`
        return progreso.appendChild(contenidoP);
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper')
    {   counter++;
        contenidoP.textContent = `has ganado! tu puntuaje: ${counter}` +
        ` su puntuaje: ${counterPc}`
        return progreso.appendChild(contenidoP);
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper')
    {   counterPc++;
        contenidoP.textContent = `has perdido! tu puntuaje: ${counter}` +
        ` su puntuaje: ${counterPc}`
        return progreso.appendChild(contenidoP);
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors')
    {   counterPc++;
        contenidoP.textContent = `has perdido! tu puntuaje: ${counter}` +
        ` su puntuaje: ${counterPc}`
        return progreso.appendChild(contenidoP);
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        contenidoP.textContent = `has perdido! tu puntuaje: ${counter}` +
        ` su puntuaje: ${counterPc}`
        return progreso.appendChild(contenidoP);
    }
    else if (playerSelection === computerSelection)
    {   
        contenidoP.textContent = `Empate! tu puntuaje: ${counter}` +
        ` su puntuaje: ${counterPc}`
        return progreso.appendChild(contenidoP);
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        console.log(ronda(computerPlay()));
    }
}

const piedra = document.querySelector('#piedra');
piedra.addEventListener('click', () =>{
    let jugadaH = 'rock';
    console.log(ronda(computerPlay(), jugadaH))
    if (counter > counterPc) {
        contenido.textContent = 'Vas ganando!'
        container.appendChild(contenido);}
    else if (counter < counterPc){
        contenido.textContent = 'Vas perdiendo!'
        container.appendChild(contenido)
    }
    else if (counter === counterPc){
        contenido.textContent = 'Estan empatados'
        container.appendChild(contenido)
    }
  }
)

const papel = document.querySelector('#papel');
papel.addEventListener('click', () =>{
    let jugadaH = 'paper';
    console.log(ronda(computerPlay(), jugadaH))
    if (counter > counterPc) {
        contenido.textContent = 'Vas ganando!'
        container.appendChild(contenido);}
    else if (counter < counterPc){
        contenido.textContent = 'Vas perdiendo!'
        container.appendChild(contenido)
    }
    else if (counter === counterPc){
        contenido.textContent = 'Estan empatados'
        container.appendChild(contenido)
    }
  }
)


const tijera = document.querySelector('#tijera');
tijera.addEventListener('click', () =>{
    let jugadaH = 'scissors';
    console.log(ronda(computerPlay(), jugadaH))
    if (counter > counterPc) {
        contenido.textContent = 'Vas ganando!'
        container.appendChild(contenido);}
    else if (counter < counterPc){
        contenido.textContent = 'Vas perdiendo!'
        container.appendChild(contenido)
    }
    else if (counter === counterPc){
        contenido.textContent = 'Estan empatados'
        container.appendChild(contenido)
    }
  }
)


const container = document.querySelector('.container');
const contenido = document.createElement('div');
contenido.classList.add('contenido');

const progreso = document.querySelector('.progreso');
const contenidoP = document.createElement('h1');
contenidoP.classList.add('contenidoP')

console.log('Your score was ' + counter + '.')
console.log('The computer score was ' + counterPc + '.')

/*
if (counter === counterPc) {
    console.log("It's a tie.")
    contenido.textContent = "It's a tie."
    container.appendChild(contenido);
}
else if (counter > counterPc) {
    console.log('You have won the game!')
    container.removeChild(contenido);
    contenido.textContent = 'You have won the game!'
    container.appendChild(contenido);
}
else if (counterPc > counter) {
    container.removeChild(contenido);
    console.log('The computer wins the game!')
    contenido.textContent = 'Me duelen las manos'
    container.appendChild(contenido);
}


*/
