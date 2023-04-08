const button = document.querySelector('#button');
const seconds = document.querySelector('#seconds');
const result = document.querySelector('#result');

const conversor = () => {
    const hourInSeconds = 3600;
    const minuteInSeconds = 60;
    const rest = seconds.value % hourInSeconds;

    const hours = Math.floor((seconds.value / hourInSeconds));
    const minutes = Math.floor(rest / minuteInSeconds);
    const secs = Math.floor(rest % minuteInSeconds);
    return `${hours}:${minutes}:${secs}`;
}

button.addEventListener("click", () => {
    result.innerHTML = conversor();
});