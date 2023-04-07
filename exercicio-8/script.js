const button = document.querySelector('#button');
const measureA = document.querySelector('#measureA');
const measureB = document.querySelector('#measureB');
const measureC = document.querySelector('#measureC');
const resultsDiv = document.querySelector('#results');
const spanSquare = document.querySelector('#square-area');
const spanTriangle = document.querySelector('#triangle-area');
const spanTrapeze = document.querySelector('#trapeze-area');

const squareArea = () => {
    const area = Math.pow(measureA.value, 2);

    return area.toFixed(4);
}

const triangleArea = () => {
    const area = (measureA.value * measureB.value) / 2;

    return area.toFixed(4);
}

const trapezeArea = () => {
    const area = ((Number(measureA.value)+ Number(measureB.value)) * Number(measureC.value)) / 2;

    return area.toFixed(4);
}

button.addEventListener("click", () => {
    spanSquare.innerHTML = squareArea();
    spanTriangle.innerHTML = triangleArea();
    spanTrapeze.innerHTML = trapezeArea();
});