const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
};
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
refs.stopBtn.disabled = true;
let timerId;
function switchColors() {
    refs.body.style.backgroundColor = getRandomHexColor();
}
refs.startBtn.addEventListener('click', () => {
    refs.stopBtn.disabled = false;
    refs.startBtn.disabled = true;
    timerId = setInterval(() => {
        switchColors();
    }, 1000)
})
refs.stopBtn.addEventListener('click', () => {
    refs.stopBtn.disabled = true;
    refs.startBtn.disabled = false;
    clearInterval(timerId);
})