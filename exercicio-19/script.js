const button = document.querySelector('#button');

const salary = document.querySelector('#salary');
const result = document.querySelector('#result');

const calculateSalary = () => {
    if (salary.value <= 999) {
        const increase = salary.value * 0.2;
        const newSalary = Number(salary.value) + increase;
        return {
            increase,
            newSalary,
            percentage: 20,
        }
    } else if (salary.value <= 2999) {
        const increase = salary.value * 0.15;
        const newSalary = Number(salary.value) + increase;
        return {
            increase,
            newSalary,
            percentage: 15,
        }
    } else if (salary.value <= 7999) {
        const increase = salary.value * 0.1;
        const newSalary = Number(salary.value) + increase;
        return {
            increase,
            newSalary,
            percentage: 10,
        }
    } else {
        const increase = salary.value * 0.05;
        const newSalary = Number(salary.value) + increase;
        return {
            increase,
            newSalary,
            percentage: 5,
        }
    }
}

button.addEventListener("click", () => {
    const res = calculateSalary();
    const results = [
        `Novo salário = R$ ${res.newSalary.toFixed(2)}`,
        `Aumento = R$ ${res.increase.toFixed(2)}`,
        `Porcentagem = ${res.percentage} %`,
    ];

    results.map((s, i) => {
        const span = document.createElement('span');
        const br = document.createElement('br');
        span.innerHTML = s;
        result.appendChild(span);
        result.appendChild(br);
    });
})