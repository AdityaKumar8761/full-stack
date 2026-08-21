let display = document.querySelector("#display")
let j = 0;

function fetch(){
    stock.price = Math.trunc(Math.random()*3)
}

let stock = {
    name: "QtechAI",
    price: 0
}

function render(){
    display.innerHTML = `
    <h1>Name : ${stock.name} </h1>
    <h1>Price: ${stock.price} ${sym(stock.price, j)}`
}

for(let i = 0 ; i > 0 ; i ++){
    setTimeout(render , 1500 )
}

for(let i = 0 ; i > 0 ; i ++){
    setTimeout(fetch() , 1400 )

}

function sym(i , j){
    if(i > j){
        return "<"
    }
    else{
        return ">"
    }
}