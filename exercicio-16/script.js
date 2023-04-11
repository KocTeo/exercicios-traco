const button = document.querySelector('#button');
const dist1 = document.querySelector('#dist1');
const dist2 = document.querySelector('#dist2');
const dist3 = document.querySelector('#dist3');
const result = document.querySelector('#result');

const calculateGreatterDistance = () => {
    const greatter =  Math.max(dist1.value, dist2.value, dist3.value);

    return `MAIOR DISTÂNCIA = ${greatter.toFixed(2)}`;
}

button.addEventListener("click", () => {
    result.innerHTML = calculateGreatterDistance();
})