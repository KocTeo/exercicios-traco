const button = document.querySelector('#button');

const init = document.querySelector('#init');
const final = document.querySelector('#final');
const result = document.querySelector('#result');

const calculate = () => {
    let sum = 0;
    for (let i = Number(init.value); i <= Number(final.value); i++) {
        sum += i;
        console.log(sum);
    }

    return `Resultado: ${sum}`;
}

button.addEventListener("click", () => {
    result.innerHTML = calculate();
})