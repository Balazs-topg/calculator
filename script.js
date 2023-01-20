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

let currentNumber = "0"

const updateDisplay = function(){CalDisplayText.textContent = currentNumber}

const addNumOrSym = function (number){
    //remove the place-holder zero
    if (currentNumber === "0") {currentNumber = ""}
    //stops multiple zeros from being entered in the begining
    if (number=="0" && currentNumber.startsWith("0") && !(currentNumber.includes(","))){return 0}
    //allow only one decimal in the string
    if (number=="," && currentNumber.includes(",")){return 0}
    //incase the first thing the user enters is a decimal
    if (number=="," && currentNumber === ""){
        currentNumber = currentNumber + "0,"
        updateDisplay()
        return 0
    }
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
CalDecimal.addEventListener("click", () => {addNumOrSym(",")})
//functionality
CalClear.addEventListener("click", () => {
    currentNumber="0"; updateDisplay()
    calculationEntries = []
})
CalPlusSlashMin.addEventListener("click", () => {
    if (currentNumber === "0") {currentNumber = ""}
    //if the number is negative, then make it positive
    if (currentNumber.startsWith("-")){
        currentNumber = currentNumber.slice(1)
        updateDisplay()
    }
    //but if the number is positive, then make it negative
    else if (!currentNumber.startsWith("-")){
        currentNumber="-"+currentNumber
        updateDisplay()
    }
})
CalProcentage.addEventListener("click", () => {
    let commaToDot = currentNumber.replace(",", ".")
    let currentNumberNUM = Number(commaToDot)
    let dividedBy100 = currentNumberNUM/100
    currentNumber = String(dividedBy100).replace(".", ",")
    updateDisplay()
})

//calculations
let calculationEntries = []
CalPlus.addEventListener("click", () => {
    calculationEntries.push({"number" : currentNumber, "math" : "plus"})
    newOperatorPressed("math")
})
CalSubtraction.addEventListener("click", () => {
    calculationEntries.push({"number" : currentNumber, "math" : "minus"})
    newOperatorPressed("minus")
})
CalDivision.addEventListener("click", () => {
    calculationEntries.push({"number" : currentNumber, "math" : "divide"})
    newOperatorPressed("divide")
})
CalMultiplication.addEventListener("click", () => {
    calculationEntries.push({"number" : currentNumber, "math" : "multiply"})
    newOperatorPressed("multiply")
})

function newOperatorPressed(mathOperator){
    currentNumber="0"
    if (calculationEntries.length>=2) {
        currentNumber = evaluate(
            calculationEntries[0].number,
            calculationEntries[1].number,
            calculationEntries[0].math
            )
        calculationEntries = []
        calculationEntries.push({"number" : currentNumber, "math" : mathOperator})
        updateDisplay()
        currentNumber="0"
    }
}

function evaluate(numberOne, NumberTwo, mathOperator) {
    numberOne = Number(numberOne)
    NumberTwo = Number(NumberTwo)
    if (mathOperator === "divide")   {return String(numberOne/NumberTwo)}
    if (mathOperator === "multiply") {return String(numberOne*NumberTwo)}
    if (mathOperator === "minus")    {return String(numberOne-NumberTwo)}
    if (mathOperator === "plus")     {return String(numberOne+NumberTwo)}
}





