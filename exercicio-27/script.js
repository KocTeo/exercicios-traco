const button = document.querySelector('#button');

const word = document.querySelector('#word');
const result = document.querySelector('#result');

const analyseString = () => {
    const lowerWord = word.value.toLowerCase();
    
    const reverseWord = lowerWord.split('').reverse().join('');

    if (lowerWord === reverseWord){
        return 'É palíndroma';
    } else {
        return "Não é palíndroma";
    }
}

button.addEventListener("click", () => {
    result.innerHTML = analyseString();
})