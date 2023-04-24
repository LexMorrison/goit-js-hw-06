function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const mainBodyEl = document.body;
const randomColorTextEl = document.querySelector(".color");
const buttonChangeColorEl = document.querySelector(".change-color");

buttonChangeColorEl.addEventListener("click", changeColorFu);

function changeColorFu(event) {
  const randomColor = getRandomHexColor();
  randomColorTextEl.textContent = randomColor;
  mainBodyEl.style.backgroundColor = randomColor;
}
