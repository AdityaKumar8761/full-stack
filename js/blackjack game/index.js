let cards = [Math.trunc((Math.random()*13)+1),Math.trunc((Math.random()*13)+1)] 
let sum = cards[0] + cards[1]
let iteration = 2
let hasBlackJack = false
let isAlive = true

let messageEL = document.getElementById("question")
let cardEL = document.querySelector("#cards")
let sumEL = document.querySelector("#sum")
let display = document.querySelector("body")
card = "Card : " + cards[0] + "  " + cards[1]

let NewButton = document.querySelector(".NewButton")

async function startgame(){
    if (sum <= 20){
        message = "do you want to draw a new card?"
    }else if (sum == 21){
        message = "Wohoo! You've  got Black jack"
        hasBlackJack = true
    }else {
        isAlive = false
    }

    messageEL.textContent = message 
    cardEL.textContent = card
    sumEL.textContent = "Sum: " + sum
    
    console.log(hasBlackJack)
    if (!isAlive){
        const sleep = ms => new Promise(res => setTimeout(res, ms))
        await sleep(1000)
        display.textContent = "You're out of the game"
    }else{
        NewButton.style.display = 'inline-block';
    }

}

// for loop syntex

// for ( let count = 1; count < 11 ; count += 1){
// console.log()
//}

function newCard(){
    cards.push(Math.trunc((Math.random()*13)+1))
    sum = sum + cards[iteration]
    card = card + "  " + cards[iteration]
    iteration += 1
    startgame()
}
