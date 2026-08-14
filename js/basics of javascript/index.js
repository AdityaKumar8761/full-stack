//document.getElementById("count-el").innerText = 5

let countEl = document.getElementById("count-el")
let para = document.getElementById("para")

let count = 0;

function increment(){
    count = count +1;
    countEl.innerText = count;
}

function decrement(){
    count = count -1;
    countEl.innerText = count;
}

para.innerText = "The save number are: "

function save(){
    console.log("saved")
    para.innerText = para.innerText + " " +  count + " - "
    count = 0;
    countEl.innerText = 0;
}
