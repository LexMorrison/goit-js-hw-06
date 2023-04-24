const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Each field must be filled");
  } else {
    const userObj = {
      email: email.value,
      password: password.value,
    };
    console.log(userObj);
    event.currentTarget.reset();
  }
}
