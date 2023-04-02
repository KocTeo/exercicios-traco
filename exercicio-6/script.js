const button = document.querySelector('#button');
const nome = document.querySelector('#name');
const value = document.querySelector('#value');
const hours = document.querySelector('#hours');
const phraseSpan = document.querySelector('#phrase');

const calculateSalary = () => {
    const salary = value.value * hours.value;

    return salary.toFixed(2);
}

button.addEventListener("click", () => {
    phraseSpan.innerHTML = `O pagamento para ${nome.value} deve ser ${calculateSalary()}`
});