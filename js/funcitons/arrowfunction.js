// normal function declaration 
// function getSpendAlert(amount){
// if amount 
//}

const distanceTraveledinmiles =[26,345,234,190,299]

const distanceTraveliedKm = distanceTraveledinmiles.map(distance => Math.round(distance*1.6))

const getSpendAlert = (amount)=> {
    return `Warning! you have spent $${amount}`
}

// const speedWarning = speed => `You are ginging at speed $${speed}`

console.log(getSpendAlert(800))

const speedWarning = (limit , speed) => speed >= limit ? `You are going too fast` : 'nice going'

console.log(speedWarning(40 , 60))
console.log(speedWarning(40, 30))
console.log(distanceTraveliedKm)


//Object.reduce(function(acc, curr), initial value) --> user to cycle throught the object
// here acc = initial value
// default parameter 
// object.reduce(function(acc , curr),initial value = 0)
//                                          |
//                                          |
//                                          V
//                                   default parameter

//REST parameter
function setPeramissionLevel(permissionLevel, ...names){
 names.forEach((name) => console.log(`${permissionLevel} level accces given to ${name}`))}

 console.log(setPeramissionLevel("admin" , "aditya" , "Raj"))


const number= [1,2,3,4,5,6,6,5,4,3,2,1,1]
let j =0 
number.forEach(num =>{
    console.log(j , num) 
    j++})
