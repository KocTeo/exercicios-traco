const button = document.querySelector('#button');

const final = document.querySelector('#final');
const result = document.querySelector('#result');

const calculate = () => {
    const nums = [];

    for (let i = 2; i <= final.value; i += 2) {
        nums.push(i);
    }

    return nums;
}

button.addEventListener("click", () => {
    const arrayNums = calculate();

    for (let i = 0; i < arrayNums.length; i++) {
        const span = document.createElement('span');
        const br = document.createElement('br');

        span.innerHTML = arrayNums[i];
        
        result.appendChild(span);
        result.appendChild(br);
    }
})