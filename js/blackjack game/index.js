let firstCard = 6
let secondCard = 14
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true

let messageEL = document.getElementById("name")

function startgame(){
    if (sum <= 20){
        console.log("do you want to draw a new card?")
    }else if (sum == 21){
        console.log("Wohoo! You've  got Black jack")
        hasBlackJack = true
    }else {
        console.log("You're out of the game!s")
        isAlive = false
    }
    
    console.log(hasBlackJack)
    console.log(isAlive)

}

