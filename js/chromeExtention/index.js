let j = 0;

let myLeads = []

const ulEl = document.querySelector("#ul-el")

const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")

inputBtn.addEventListener("click", ()=>{
    let value = inputEl.value
    myLeads.push(value)
    renderLeads()
    inputEl.value = ""
})

inputEl.addEventListener("keydown", (event)=>{
if(event.key === "Enter"){
    let value = inputEl.value
    myLeads.push(value)
    renderLeads()
    inputEl.value = ""
}
})

function renderLeads(){
        ulEl.innerHTML += 
        `<li>
        <a target = '_blank' href= '${myLeads[j]}'> ${myLeads}
        </li> `

        j += 1;
}

