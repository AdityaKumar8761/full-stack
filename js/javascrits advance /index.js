// ternary operator

// condition ? expression(truthy) : expression(falsy)

const exerciseTimeMins = 20;

const message = exerciseTimeMins<30 ? "you need to try harder" : "Doing good"

const exerciseTimeMins2 = 40;
 
const message2 = exerciseTimeMins2< 30 ? "you need to try harder" 
: exerciseTimeMins2 < 60 ? "good" : "excellent"

console.log(message)

console.log(message2)

const playerGuess = 3
const correctAnswer = 6

const answer = playerGuess === correctAnswer ? "correct" : "wrong"

console.log(answer)



//switch Statements
function seletItem(item){
    let price = 0;

    switch(item){
        case "coffee":
        price = 2;
        break

        case "cookies":
            price = 5;
            break
        default:
            return `sorry we dont sell ${item}`
    }

    return `You selected ${item}. That will be $${price}`
}

console.log(seletItem("ice cream"))
