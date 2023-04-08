const button = document.querySelector('#button');
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const num3 = document.querySelector('#num3');
const result = document.querySelector('#result');

const returnMin = () => {
    const min = Math.min(num1.value, num2.value, num3.value);

    return min
}

button.addEventListener("click", () => {
    result.innerHTML = returnMin();
});