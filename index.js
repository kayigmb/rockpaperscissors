const sun = document.getElementById('change')
const moon = document.getElementById('moon')
const body =document.querySelector('body')

sun.addEventListener('click',()=>{
    sun.style.display = 'none'
    moon.style.display = 'block';
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
})

moon.addEventListener('click',()=>{
    sun.style.display = 'block';
    moon.style.display = 'none';
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
})



const playerText = document.getElementById("player")
const ComputerText = document.getElementById("computer")
const resultText = document.getElementById("result")
const choiceBtn = document.querySelectorAll(".choiceBtn");

let player;
let computer;
let result;
function computerTurn(){
    const randNum = Math.floor(Math.random()*3) + 1;
    switch(randNum){
        case 1:
            computer = "ROCK";
        break;
        case 2:
            computer = "PAPER";
        break;
        case 3: 
            computer = "SCISSORS";
        break;
    }   
}

choiceBtn.forEach( btn => btn.addEventListener("click",()=>{
    player = btn.textContent;
    computerTurn();    
    playerText.textContent =`Player: ${player}`
    ComputerText.textContent =`Computer: ${computer}`
    resultText.textContent = `Result: ${checkWinner()}`;
    
}))

function checkWinner(){
    if (player == computer) {
        return "Draw!";
    } else if (computer == "ROCK") {
        return (player == "PAPER") ? "You Win!" : "You Lose!"; 
    } else if (computer == "PAPER") {
        return (player == "SCISSORS") ? "You Win!" : "You Lose!";
    } else if (computer == "SCISSORS") {
        return (player == "ROCK") ? "You Win!" : "You Lose!"; 
    }
}