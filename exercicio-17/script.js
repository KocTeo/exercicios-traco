const button = document.querySelector('#button');
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const result = document.querySelector('#result');

const verify = () => {
    if (num1.value % num2.value == 0 || num2.value % num1.value == 0) return "São múltiplos";

    return "Não são múltiplos";
}

button.addEventListener("click", () => {
    result.innerHTML = verify();
})