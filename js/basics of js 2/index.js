let largeCountry = ["india" , "china" , "USA" , "Indonesia"]

for(let i = 0 ; i <4 ; i++){
    console.log(largeCountry[i])
}

 //push() and pop()   at the end of the array
 //unshift() and shift()  at the begining of the array

largeCountry.pop()
largeCountry.push("Monaco")

largeCountry.shift()
largeCountry.unshift("Tuvalu")

console.log()

for(let i = 0 ; i < largeCountry.length ; i++){
    console.log(largeCountry[i])
}

console.log()

let dayOfMonth = 13
let weekDay = "Friday"

if (dayOfMonth === 13 && weekDay === "Friday"){
    console.log("spooky face")
}

console.log()

// let hands = ["rock" , "paper" , "scissor"]


// let num = Math.trunc(Math.random()*3)
// console.log(num)

// let num2 = prompt("select 0 for rock, 1 for paper , 2 for scissor")

// console.log(hands[num])
// console.log(hands[num2])


