const button = document.querySelector('#button');

const cnpj = document.querySelector('#cnpj');
const result = document.querySelector('#result');

const verifyCNPJ = (c) => {
    c = c.split('-')
    
    const digits = c[1];
    const numbers = c[0].replace(/[.|\/]/g, '');

    if (verifyFirstDigit(numbers) != digits[0] || verifySecondDigit(numbers+""+digits[0]) != digits[1]) return 'Inválido';
    
    return 'Válido';
}

const verifyFirstDigit = (nums) => {
    let weigth = 2;
    let result = 0;

    for (let i = nums.length - 1; i >= 0; i--) {
        result += nums[i] * weigth;
        weigth = (weigth == 9 ? 2 : weigth+=1);
    }

    const module = result % 11;
    result = (module < 2 ? 0 : 11 - module);
    return result;
}

const verifySecondDigit = (nums) => {
    let weigth = 2;
    let result = 0;

    for (let i = nums.length - 1; i >= 0; i--) {
        result += nums[i] * weigth;
        weigth = (weigth == 9 ? 2 : weigth+=1);
    }

    const module = result % 11;
    result = (module < 2 ? 0 : 11 - module);
    return result;
}

button.addEventListener("click", () => {
    const res = verifyCNPJ(cnpj.value);

    result.innerHTML = res;
})