const button = document.querySelector('#button');
const name1 = document.querySelector('#name1');
const age1 = document.querySelector('#age1');
const name2 = document.querySelector('#name2');
const age2 = document.querySelector('#age2');

const text = document.querySelector('#text');

const calculateMedia = () => {
    const media = (Number(age1.value) + Number(age2.value)) / 2;
    return media;
}

const constructSentece = () => {
    const media = calculateMedia();
    const sentence = `A idade média de ${name1.value} e ${name2.value} é de ${media} anos`
    return sentence;
}

button.addEventListener("click", () => {
    text.innerHTML = constructSentece();
});