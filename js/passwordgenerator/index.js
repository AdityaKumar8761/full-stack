let characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M",
    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z",

    "a","b","c","d","e","f","g","h","i","j","k","l","m",
    "n","o","p","q","r","s","t","u","v","w","x","y","z",

    "0","1","2","3","4","5","6","7","8","9",

    "!","@","#","$","%","^","&","*","(",")",
    "-","_","=","+","[","]","{","}","|",";",
    ":","'",'"',",",".","<",">","?","/","`","~"
]

let div1 = document.querySelector(".div1")
let div2 = document.querySelector(".div2")

let len = characters.length

async function generate(){
    const sleep = ms => new Promise(res => setTimeout(res, ms))
    for(let n=0 ; n <(Math.trunc((Math.random()*8))+12) ; n++){
        div1.textContent += characters[Math.trunc(Math.random()*characters.length)]
        await sleep(100)
    }
    
    for(let n=0 ; n <(Math.trunc((Math.random()*8))+12) ; n++){
        div2.textContent += characters[Math.trunc(Math.random()*characters.length)]
        await sleep(100)
    }
}


div1.addEventListener("click", () => {
  const textToCopy = div1.innerText;

  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      alert("Text copied to clipboard!");
    })
    .catch(err => {
      console.error("Failed to copy text: ", err);
    });
});


div2.addEventListener("click", () => {
  const textToCopy = div2.innerText;

  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      alert("Text copied to clipboard!");
    })
    .catch(err => {
      console.error("Failed to copy text: ", err);
    });
});


