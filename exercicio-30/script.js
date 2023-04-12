const button = document.querySelector('#button');

const num = document.querySelector('#num');
const result = document.querySelector('#result');

const writeOut = (n) => {
    const units = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove'];
    const tens = ['Vinte', 'Trinta', 'Quarenta', 'Cinquenta', 'Sessenta', 'Setenta', 'Oitenta', 'Noventa'];
    const special = ['Dez', 'Onze', 'Doze', 'Treze', 'Quatorze', 'Quinze', 'Dezesseis', 'Dezessete', 'Dezoito', 'Dezenove'];

    if (n.length === 1) {
        return units[Number(n - 1)];
    } else {
        if (n[0] == 1) {
            return special[Number(n[1])];
        } else {
            if (n[1] == 0) {
                return tens[Number(n[0] - 2)];
            }
            return `${tens[Number(n[0] - 2)]} e ${units[Number(n[1] - 1)]}`;
        }
    }
}

button.addEventListener("click", () => {
    const res = writeOut(num.value);

    result.innerHTML = res;
})