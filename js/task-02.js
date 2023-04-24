const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const components = ingredients.map((component) => {
  const ingridientEl = document.createElement("li");
  ingridientEl.textContent = `${component}`;
  ingridientEl.classList.add("item");

  return ingridientEl;
});

ingredientsList.append(...components);
