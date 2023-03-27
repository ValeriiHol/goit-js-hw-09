const bodyColor = document.querySelector('body');
const startBtnClick = document.querySelector('[data-start]');
const stopBtnClick = document.querySelector('[data-stop]');

let timeInterval = null;
stopBtnClick.disabled = true;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
// getRandomHexColor = () => {
//     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

function backgroundChangeColor () {
    const newColor = getRandomHexColor();
    bodyColor.style.backgroundColor = newColor;
}
// backgroundChangeColor = () => {
//     const newColor = getRandomHexColor();
//     bodyColor.style.backgroundColor = newColor;
// }
// нажаль стрілочні функціі чомусь працюють в ВСкоде, а в Хромі видають помилки

startBtnClick.addEventListener('click', () => {
    timeInterval = setInterval(backgroundChangeColor, 1000);
    startBtnClick.disabled = true;
    stopBtnClick.disabled = false;
})

stopBtnClick.addEventListener('click', () => {
    clearInterval(timeInterval);
    startBtnClick.disabled = false;
    stopBtnClick.disabled = true;
})
