// Objext Destructuring
const favouriteFilm ={
    title: "Top Gun",
    year: "1986",
    genre: "action",
    star: "Tom Cruise",
    director: "Tony Scott"
}

const {title , year , genre , star , director} = favouriteFilm

console.log(`My favourite file is ${title} starring ${star}. Its an ${genre} film that was directed by ${director} and release in ${year}`)

//set time out 
function displayTrafficLight(light){
    console.log(light)
}

//setTimeout (functon ,          delay ,  parameter for function)

setTimeout(displayTrafficLight, 3000 , "🟢")

displayTrafficLight("🔴")


function logAnswer(ans){
    console.log(`the answer is ${
        ans}`)
}

console.log()
console.log("What is te capital of Peru?")

setTimeout(logAnswer , 4000 , "Lima")

// if you want to stop the setTimeout 
//clearTimeout(function)
//this function is used


//export 
const interplanataryDestinationsArray = [
    {
        destination:"Nova Prime",
        distanceKM: 500
    },
    {
        destination: "Lunar Outpost Alpha",
        distanceKM: 2
    }
]

function add(i , j){
    return i+j;
}

export {interplanataryDestinationsArray , add}

