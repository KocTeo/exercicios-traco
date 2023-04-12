const button = document.querySelector('#button');

const date = document.querySelector('#date');
const result = document.querySelector('#result');

const discoverSign = (date) => {
    const month = date.split('/')[1];
    const day = date.split('/')[0];
    let sign = '';

    if (month == '01') {
        sign = Number(day) < 21 ? 'Capricórnio' : 'Aquário';
    };
    if (month == '02') {
        sign = Number(day) < 19 ? 'Aquário' : 'Peixes';
    };
    if (month == '03') {
        sign = Number(day) < 21 ? 'Peixes' : 'Áries';
    };
    if (month == '04') {
        sign = Number(day) < 21 ? 'Áries' : 'Touro';
    };
    if (month == '05') {
        sign = Number(day) < 21 ? 'Touro' : 'Gêmeos';
    };
    if (month == '06') {
        sign = Number(day) < 21 ? 'Gêmeos' : 'Câncer';
    };
    if (month == '07') {
        sign = Number(day) < 23 ? 'Câncer' : 'Leão';
    };
    if (month == '08') {
        sign = Number(day) < 23 ? 'Leão' : 'Virgem';
    };
    if (month == '09') {
        sign = Number(day) < 23 ? 'Virgem' : 'Libra';
    };
    if (month == '10') {
        sign = Number(day) < 23 ? 'Libra' : 'Escorpião';
    };
    if (month == '11') {
        sign = Number(day) < 22 ? 'Escorpião' : 'Sargitário';
    };
    if (month == '12') {
        sign = Number(day) < 22 ? 'Sargitário' : 'Capricórnio';
    }

    return sign;
}

button.addEventListener("click", () => {
    const sign = discoverSign(date.value);

    result.innerHTML = `Signo: ${sign}`;
})