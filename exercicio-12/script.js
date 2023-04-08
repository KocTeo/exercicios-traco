const button = document.querySelector('#button');
const coefA = document.querySelector('#coefA');
const coefB = document.querySelector('#coefB');
const coefC = document.querySelector('#coefC');
const result1 = document.querySelector('#result1');
const result2 = document.querySelector('#result2')

const bhaskara = () => {
    const bPow2 = Math.pow(coefB.value, 2);

    const delta = bPow2 - 4 * (coefA.value * coefC.value);

    if (delta < 0) return false;

    const sqrt1 = (- coefB.value + Math.sqrt(delta)) / (2 * coefA.value);
    const sqrt2 = (- coefB.value - Math.sqrt(delta)) / (2 * coefA.value);

    return {
        sqrt1: sqrt1.toFixed(4),
        sqrt2: sqrt2.toFixed(4),
    }
}

button.addEventListener("click", () => {
    const results = bhaskara();
    if (!results) {
        result2.innerHTML = '';
        return result1.innerHTML = `Esta equação não possui raízes reais`;
    }

    result1.innerHTML = `X1 = ${results.sqrt1}`;
    result2.innerHTML = `X2 = ${results.sqrt2}`;
});