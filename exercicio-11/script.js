const button = document.querySelector('#button');
const grade1 = document.querySelector('#grade1');
const grade2 = document.querySelector('#grade2');
const result = document.querySelector('#result');
const spanStatus = document.querySelector('#status');

const calculateStatus = () => {
    const grade = Number(grade1.value) + Number(grade2.value);

    const status = grade >= 60 ? 'APROVADO' : 'REPROVADO';

    return {
        grade,
        status,
    }
}

button.addEventListener("click", () => {
    const results = calculateStatus();

    result.innerHTML = results.grade;
    spanStatus.innerHTML = results.status;
});