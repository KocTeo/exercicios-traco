const button = document.querySelector('#button');

const nums = document.querySelector('#nums');
const result = document.querySelector('#result');

const sum = () => {
    const array = nums.value.split(',');
    const numArray = array.map(Number);
    return numArray.sort((a, b) => a - b );
}

button.addEventListener("click", () => {
    result.innerHTML = sum();
})