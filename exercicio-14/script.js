const button = document.querySelector('#button');
const price = document.querySelector('#price');
const quantity = document.querySelector('#quantity');
const receive = document.querySelector('#receive');
const troco = document.querySelector('#troco');

const calculate = () => {
    const totalPrice = price.value * quantity.value;

    if (receive.value >= totalPrice) {
        const returned = receive.value - totalPrice;
        return `TROCO = ${returned.toFixed(2)}`;
    } else {
        const miss = (totalPrice - receive.value).toFixed(2);
        return `DINHEIRO INSUFICIENTE. FALTAM R$${miss} REAIS`;
    }
}

button.addEventListener("click", () => {
    troco.innerHTML = calculate();
})