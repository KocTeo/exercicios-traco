const button = document.querySelector('#button');
const minutes = document.querySelector('#minutes');
const result = document.querySelector('#result');

const calculateFinalPrice = () => {
    if (minutes.value <= 50) return "R$50.00";

    const total = ((minutes.value - 100) * 2);
    return `R$${(total + 50).toFixed(2)}`;
}

button.addEventListener("click", () => {
    const total = calculateFinalPrice()
    result.innerHTML = `Valor a pagar: ${total}`;
});