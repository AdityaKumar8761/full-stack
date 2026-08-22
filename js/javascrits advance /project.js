let display = document.querySelector("#display");

let stock = {
    name: "QtechAI",
    price: 0
};

let previousPrice = stock.price;

function updatePrice() {
    previousPrice = stock.price;

    stock.price = Math.trunc(Math.random() * 100);
}

function sym(current, previous) {
    if (current > previous) {
        return "↑";
    } 
    else if (current < previous) {
        return "↓";
    } 
    else {
        return "—";
    }
}

function render() {
    display.innerHTML = `
        <h1>Name: ${stock.name}</h1>
        <h1>
            Price: ${stock.price} 
            ${sym(stock.price, previousPrice)}
        </h1>
    `;
}


render();

setInterval(() => {
    updatePrice();
    render();
}, 1500);