const button = document.querySelector('#button');
const glucose = document.querySelector('#glucose')
const result = document.querySelector('#result');

const calculateGlucose = () => {
    if (glucose.value <= 100) {
        return "Classificação: Normal";
    } else if (glucose.value > 100 && glucose.value <= 140) {
        return "Classificação: Elevado";
    } else {
        return "Classificação: Diabetes";
    }
}

button.addEventListener("click", () => {
    result.innerHTML = calculateGlucose();
})