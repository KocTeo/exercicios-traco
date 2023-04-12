const button = document.querySelector('#button');

const nums = document.querySelector('#nums');
const result = document.querySelector('#result');

const minAndMax = () => {
    const array = nums.value.split(',');
    const numArray = array.map(Number);

    const lower = Math.min(...numArray);
    const upper = Math.max(...numArray);

    return {
        lower,
        upper
    }
}

button.addEventListener("click", () => {
    const res = minAndMax();

    result.innerHTML = `Menor: ${res.lower}  //  Maior: ${res.upper}`
})