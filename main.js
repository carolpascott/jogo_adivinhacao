// Variables
const screen1 = document.querySelector(".screen1")
const screen2  = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1


// Events
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keypress', handleResetEnter)


// Callback function
function handleTryClick(event) {    
    event.preventDefault() // não fazer o defaulf (form recarrega página)

    const inputNumber = document.querySelector("#inputNumber")
    
    if((Number(inputNumber.value) > 0 && Number(inputNumber.value) <= 10) 
        || (inputNumber.value == '0' )) {
        if(Number(inputNumber.value) == randomNumber) {
            toggleScreen()

            screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas`        
        }
        xAttempts++  
    }
    else {
        alert("Entrada inválida!")
    }
    console.log(xAttempts)
    inputNumber.value = ""    
}

function handleResetClick() {
    toggleScreen()

    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

function handleResetEnter(event) {
    if(event.key == "Enter" && screen1.classList.contains("hide")) {
            handleResetClick()
    }
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}
