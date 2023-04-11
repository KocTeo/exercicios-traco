const button = document.querySelector('#button');
const select = document.querySelector('#select');

const test = document.querySelector('#test');

const scale = document.querySelector('#scale');
const temp = document.querySelector('#temp');
const result = document.querySelector('#result');

select.addEventListener('click', () => {
    if (scale.value == 'C') {
        test.innerHTML = 'Digite a temperatura em Celsius:';
    } else {
        test.innerHTML = 'Digite a temperatura em Fahrenheit:';
    }
})

button.addEventListener("click", () => {
    if (scale.value == 'C') {
        const convert = (temp.value * 1.8) + 32;
        const res = `Temperatura equivalente em Fahrenheit: ${convert}`;
        return result.innerHTML = res;
    } else {
        const convert = (temp.value - 32) * (5/9);
        const res = `Temperatura equivalente em Celsius: ${convert.toFixed(2)}`;
        return result.innerHTML = res;
    }
})