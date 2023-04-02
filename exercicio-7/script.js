const button = document.querySelector('#button');
const distance = document.querySelector('#distance');
const spent = document.querySelector('#spent');
const totalSpan = document.querySelector('#total');

const calculateConsume = () => {
    const consume = distance.value / spent.value;

    return consume.toFixed(3);
}

button.addEventListener("click", () => {
    totalSpan.innerHTML = calculateConsume();
});