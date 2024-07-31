//variaveis
const btnTry = document.querySelector("#btnTry")
const BtnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1;

//eventos
btnTry.addEventListener('click', handleTryClick)
BtnReset.addEventListener('click', HandleResetClick)
document.addEventListener('keydown', function(e){
  if(e.key == "Enter" && screen1.classList.contains('hide')){
    HandleResetClick()
  }
})

//callback
function handleTryClick(event){
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  if(Number(inputNumber.value) == randomNumber){
    toggleScreen()

    document
    .querySelector(".screen2 h2")
    .innerText = `acertou em ${xAttempts} tentativas!`
  }

  inputNumber.value = ""
  xAttempts++
}

function HandleResetClick(){
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen(){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide") 
}