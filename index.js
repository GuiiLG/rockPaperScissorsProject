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

const options = ["Rock", "Paper", "Scissors"]
let randomNumber = Math.floor(Math.random() * options.length)
const choiceJS = options[randomNumber]

function RPS(choicePlayer) {
    const mainFIRST = document.querySelector('.firstPart')
    const mainSECOND = document.querySelector('.secondPart')
    mainFIRST.style.display = "none"
    mainSECOND.style.display = "block"
}

function playAgain(){
    const mainFIRST = document.querySelector('.firstPart')
    const mainSECOND = document.querySelector('.secondPart')
    mainFIRST.style.display = "block"
    mainSECOND.style.display = "none"
}