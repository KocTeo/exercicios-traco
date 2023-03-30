const button = document.querySelector('#button');
const height = document.querySelector('#height');
const base = document.querySelector('#base');

const area = document.querySelector('#area');
const perimeter = document.querySelector('#perimeter');
const diagonal = document.querySelector('#diagonal');

const calculateArea = () => {
    const calcArea = height.value * base.value;
    return calcArea.toFixed(4);
}

const calculatePerimeter = () => {
    const calcPerimeter = (height.value * 2) + (base.value * 2);
    return calcPerimeter.toFixed(4);
}

const calculateDiagonal = () => {
    const sideA = Math.pow(height.value, 2);
    const sideB = Math.pow(base.value, 2);
    const calcDiagonal = Math.sqrt(sideA + sideB);
    return calcDiagonal.toFixed(4);
}

const calculate = () => {
    area.innerHTML = calculateArea();
    perimeter.innerHTML = calculatePerimeter();
    diagonal.innerHTML = calculateDiagonal();
}

button.addEventListener("click", calculate);
