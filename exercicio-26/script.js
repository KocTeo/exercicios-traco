const button = document.querySelector('#button');

const word = document.querySelector('#word');
const result = document.querySelector('#result');

const analyseString = () => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    let qtnConsonants = 0;
    let qtnVowels = 0;
    const array = word.value.toLowerCase().split('');

    for (let i = 0; i < array.length; i++) {
        console.log('passou for');
        if (vowels.includes(array[i])) {
            qtnVowels += 1;
        } else {
            qtnConsonants += 1;
        }
    }

    return {
        consonants: qtnConsonants,
        vowels: qtnVowels,
    }
}

button.addEventListener("click", () => {
    const res = analyseString();

    result.innerHTML = `Vogais: ${res.vowels}  //  Consoantes: ${res.consonants}`;
})