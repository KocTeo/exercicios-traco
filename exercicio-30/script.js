const button = document.querySelector('#button');

const num = document.querySelector('#num');
const result = document.querySelector('#result');

const writeOut = (n) => {
    const units = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove'];
    const tens = ['Vinte', 'Trinta', 'Quarenta', 'Cinquenta', 'Sessenta', 'Setenta', 'Oitenta', 'Noventa'];
    const special = ['Dez', 'Onze', 'Doze', 'Treze', 'Quatorze', 'Quinze', 'Dezesseis', 'Dezessete', 'Dezoito', 'Dezenove'];

    if (num.value.length === 1) {
        return units[Number(num.value - 1)];
    } else {
        if (num.value[0] == 1) {
            return special[Number(num.value[1])];
        } else {
            if (num.value[1] == 0) {
                return tens[Number(num.value[0] - 2)];
            }
            return `${tens[Number(num.value[0] - 2)]} e ${units[Number(num.value[1] - 1)]}`;
        }
    }
}

button.addEventListener("click", () => {
    const res = writeOut();

    result.innerHTML = res;
})