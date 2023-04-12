const button = document.querySelector('#button');

const init = document.querySelector('#init');
const final = document.querySelector('#final');
const result = document.querySelector('#result');

const sum = () => {
    let s = 0;
    for (let i = Number(init.value) + 1; i < Number(final.value); i++) {
        if (i % 2 != 0) {
            s += i;
        }
    }

    return s;
}

button.addEventListener("click", () => {
    const res = sum();
    result.innerHTML = `SOMA DOS ÍMPARES = ${res}`;
})