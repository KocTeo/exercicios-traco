const button = document.querySelector('#button');

const num = document.querySelector('#num');
const result = document.querySelector('#result');

button.addEventListener("click", () => {
    for (let i = 1; i <= 10; i++) {
        const span = document.createElement('span');
        const br = document.createElement('br');

        span.innerHTML = `${num.value} x ${i} = ${num.value * i}`;
        
        result.appendChild(span);
        result.appendChild(br);
    }
})