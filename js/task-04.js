const decriment = document.querySelector('[data-action="decrement"]');
const incriment = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector("#value");

decriment.addEventListener("click", clickminus);
incriment.addEventListener("click", clickplus);

let number = 0;

function clickminus(ev) {
  number -= 1;
  counterValue.textContent = number;
}

function clickplus(ev) {
  number += 1;
  counterValue.textContent = number;
}
