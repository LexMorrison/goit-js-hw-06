const InputText = document.querySelector("#validation-input");

InputText.addEventListener("blur", InputBorderValue);

function InputBorderValue(ev) {
  if (
    ev.currentTarget.value.length === Number(ev.currentTarget.dataset.length)
  ) {
    InputText.classList.add("valid");
    InputText.classList.remove("invalid");
  } else {
    InputText.classList.add("invalid");
    InputText.classList.remove("valid");
  }
}
