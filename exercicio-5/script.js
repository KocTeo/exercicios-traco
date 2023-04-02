const button = document.querySelector('#button');
const radius = document.querySelector('#radius');
const areaSpan = document.querySelector('#area');

const PI = 3.14159;

const calculateRadius = () => {
    const area = PI * Math.pow(radius.value, 2);

    return area.toFixed(3);
}

button.addEventListener("click", () => {
    areaSpan.innerHTML = calculateRadius();
});