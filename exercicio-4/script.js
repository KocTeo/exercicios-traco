const button = document.querySelector('#button');
const price = document.querySelector('#price');
const quantity = document.querySelector('#quantity');
const receive = document.querySelector('#receive');
const troco = document.querySelector('#troco');

const calculate = () => {
    const totalPrice = price.value * quantity.value;
    const returned = receive.value - totalPrice;
    return returned.toFixed(2);
}

button.addEventListener("click", () => {
    troco.innerHTML = calculate();
})