const sliderEl = document.querySelector("#font-size-control");

const contentEl = document.querySelector("#text");

sliderEl.addEventListener("input", changeSizeText);
changeSizeText();

function changeSizeText(event) {
  contentEl.style.fontSize = `${sliderEl.value}px`;
}
