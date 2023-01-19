console.clear()
console.log("linked")

//asign all buttons to variables
const CalDisplayText = document.querySelector(".text-container")
const CalClear = document.querySelector(".clear")
const CalPlusSlashMin = document.querySelector(".plusSlashMin")
const CalProcentage = document.querySelector(".procentage")
const CalDivision = document.querySelector(".division")
const CalMultiplication = document.querySelector(".multiplication")
const CalSubtraction = document.querySelector(".subtraction")
const CalPlus = document.querySelector(".plus")
const CalEqual = document.querySelector(".equal")
const CalSeven = document.querySelector(".seven")
const CalEight = document.querySelector(".eight")
const CalNine = document.querySelector(".nine")
const CalFour = document.querySelector(".four")
const CalFive = document.querySelector(".five")
const CalSix = document.querySelector(".six")
const CalOne = document.querySelector(".one")
const CalTwo = document.querySelector(".two")
const CalThree = document.querySelector(".three")
const CalZero = document.querySelector(".zero")
const CalDecimal = document.querySelector(".decimal")

let currentNumber = 0

const updateDisplay = function(){CalDisplayText.textContent = currentNumber}

const addNumOrSym = function (number){
    if (currentNumber === 0) {currentNumber = ""}
    currentNumber = currentNumber + number
    updateDisplay()
}

//asign buttons
    //numbers
CalOne.addEventListener("click", () => {addNumOrSym("1")})
CalTwo.addEventListener("click", () => {addNumOrSym("2")})
CalThree.addEventListener("click", () => {addNumOrSym("3")})
CalFour.addEventListener("click", () => {addNumOrSym("4")})
CalFive.addEventListener("click", () => {addNumOrSym("5")})
CalSix.addEventListener("click", () => {addNumOrSym("6")})
CalSeven.addEventListener("click", () => {addNumOrSym("7")})
CalEight.addEventListener("click", () => {addNumOrSym("8")})
CalNine.addEventListener("click", () => {addNumOrSym("9")})
CalZero.addEventListener("click", () => {addNumOrSym("0")})
CalDecimal.addEventListener("click", () => {currentNumber=0; updateDisplay()})


CalClear.addEventListener("click", () => {currentNumber=0; updateDisplay()})






