//IMAGES 
const paperR = document.querySelector(".paperR");
const scissorsR = document.querySelector(".scissorsR");
const rockR = document.querySelector(".rockR");
const paperL = document.querySelector(".paperL");
const scissorsL = document.querySelector(".scissorsL");
const rockL = document.querySelector(".rockL");

let score = 0



const windowRULE = document.querySelector(".windowRules");
const modal_overlay = document.querySelector(".modal-overlay");
function windowRulesOPEN() {
    windowRULE.style.display = "block";
    modal_overlay.style.display = "block";

}
function closeRULES() {
    windowRULE.style.display = "none";
    modal_overlay.style.display = "none";
}

const options = ["rock", "paper", "scissors"]
let randomNumber = Math.floor(Math.random() * options.length)
let choiceJS = options[randomNumber]
console.log (choiceJS)

function RPS(choicePlayer) {
    
    const mainFIRST = document.querySelector('.firstPart')
    const mainSECOND = document.querySelector('.secondPart')
    const win = document.querySelector('.win')

    //buttons 
    const buttonR = document.querySelector(".buttonRight");
    const buttonL = document.querySelector(".buttonLeft");

    mainFIRST.style.display = "none"
    mainSECOND.style.display = "block"
    // CONDITION IF THE PLAYER CHOOSE ONE OF THE OPTIONS
    if (choicePlayer === "rock") {
        buttonR.classList.remove("buttonROCKRIGHT");

        buttonR.classList.add("buttonROCKRIGHT");
        buttonR.classList.remove("buttonSCISSORSRIGHT");
        buttonR.classList.remove("buttonPAPERRIGHT");
        rockR.style.display = "block"
        
    }
    else if (choicePlayer === "scissors") {
        buttonR.classList.remove("buttonSCISSORSRIGHT");

        buttonR.classList.add("buttonSCISSORSRIGHT");
        buttonR.classList.remove("buttonPAPERRIGHT");
        buttonR.classList.remove("buttonROCKRIGHT");
        scissorsR.style.display = "block"
    }
    else if (choicePlayer === "paper") {
        buttonR.classList.remove("buttonPAPERRIGHT");

        buttonR.classList.add("buttonPAPERRIGHT");
        buttonR.classList.remove("buttonSCISSORSRIGHT");
        buttonR.classList.remove("buttonROCKRIGHT");
        paperR.style.display = "block"
    }
    // CONDITION IF THE HOUSE CHOOSE ONE OF THE OPTIONS
    if (choiceJS === "rock") {
        buttonL.classList.remove("buttonROCKLEFT");

        buttonL.classList.add("buttonROCKLEFT");
        buttonL.classList.remove("buttonSCISSORSLEFT");
        buttonL.classList.remove("buttonPAPERLEFT");
        rockL.style.display = "block"
        
    }
    else if (choiceJS === "scissors") {
        buttonL.style.boderColor = 'hsl(39, 89%, 49%)'
        buttonL.classList.remove("buttonSCISSORSLEFT");
        buttonL.classList.remove("buttonROCKLEFT");
        buttonL.classList.remove("buttonPAPERLEFT");
        buttonL.classList.add("buttonSCISSORSLEFT");
        
        scissorsL.style.display = "block"
    }
    else if (choiceJS === "paper") {
        buttonL.classList.remove("buttonPAPERLEFT");

        buttonL.classList.add("buttonPAPERLEFT");
        buttonL.classList.remove("buttonSCISSORSLEFT");
        buttonL.classList.remove("buttonROCKLEFT");
        paperL.style.display = "block"
    }

    /* CONDITION IF THE PLAYER WON OR LOST*/ 
    const numberP = document.querySelector(".numberP");
    if (choicePlayer === choiceJS) {
        win.innerHTML = "DRAW"

    }
    else if (choicePlayer === 'scissors' && choiceJS === 'rock') {
        win.innerHTML = "YOU LOST"
        score = score - 1
        numberP.innerHTML = score
        
    }
    else if (choicePlayer === 'paper' && choiceJS === 'scissors') {
        win.innerHTML = "YOU LOST"
        score = score -1
        numberP.innerHTML = score
        
    }
    else if (choicePlayer === 'rock' && choiceJS === 'paper') {
        win.innerHTML = "YOU LOST"
        score = score -1
        numberP.innerHTML = score
       
}
    else {
        win.innerHTML = "YOU WON"
        score = score + 1
        numberP.innerHTML = score
       
    }
}

function playAgain(){
    const mainFIRST = document.querySelector('.firstPart')
    const mainSECOND = document.querySelector('.secondPart')
    
    rockR.style.display = "none";
    paperR.style.display = "none";
    scissorsR.style.display = "none";
    rockL.style.display = "none";
    paperL.style.display = "none";
    scissorsL.style.display = "none";
    mainFIRST.style.display = "block"
    mainSECOND.style.display = "none"
    randomNumber = Math.floor(Math.random() * options.length)
    choiceJS = options[randomNumber]
    console.log (choiceJS)
}


function selectMachineChoice() {
    
    // Lógica para selecionar a escolha da máquina (rock, paper ou scissors)
    var machineChoice = "scissors";
  
    // Adiciona a classe "selected" ao botão de tesoura
    document.getElementById("scissorsButton").classList.add("selected");
  }