
let myLeads = JSON.parse(localStorage.getItem("myLead")) || [];

const ulEl = document.querySelector("#ul-el");
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const deleteBtn = document.querySelector("#delete-btn");
const tabBtn = document.querySelector("#saveTab-btn")

renderLeads(myLeads)


tabBtn.addEventListener("click" , function(){

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLead",JSON.stringify(myLeads))
    renderLeads(myLeads)
});

})





inputBtn.addEventListener("click", () => {
    let value = inputEl.value;

    if (value === "") return;

    myLeads.push(value);
    renderLeads(myLeads);

    inputEl.value = "";
    localStorage.setItem("myLead", JSON.stringify(myLeads));
});

inputEl.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        let value = inputEl.value;

        if (value === "") return;

        myLeads.push(value);
        renderLeads(myLeads);

        inputEl.value = "";
        localStorage.setItem("myLead", JSON.stringify(myLeads));
    }
});

function renderLeads(myLeads) {
        let listItems = "";
    
        for (let i = 0; i < myLeads.length; i++) {
            listItems += `
                <li>
                    <a target="_blank" href="${myLeads[i]}">
                        ${myLeads[i]}
                    </a>
                </li>
            `;
        }
    
        ulEl.innerHTML = listItems;

}

deleteBtn.addEventListener("click" , ()=>{
    localStorage.clear()
    myLeads=[]
    renderLeads(myLeads)
})
