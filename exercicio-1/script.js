const widht = document.querySelector('#width');
const lenght = document.querySelector('#lenght');
const value = document.querySelector('#value');
const area = document.querySelector('#area');
const price = document.querySelector('#price');

const button = document.querySelector('#button');

button.addEventListener("click", () => {
    const totalArea = (widht.value * lenght.value);
    area.innerHTML = totalArea.toFixed(2);
    price.innerHTML = (totalArea * value.value).toFixed(2);
})
