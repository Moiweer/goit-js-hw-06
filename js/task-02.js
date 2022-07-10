const ul = document.querySelector("ul");
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const li = document.createElement("li");
li.classList.add(".item")
const createIngredients =
  (array) => array.map((el) => `<li>${el}</li>`).join("");

const list = createIngredients(ingredients);

ul.insertAdjacentHTML("beforeend", list);
console.log(createIngredients(ingredients));