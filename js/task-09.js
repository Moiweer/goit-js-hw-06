const body = document.querySelector("body");
const button = document.querySelector(".change-color");
let valueColor = document.querySelector(".color")

// function changeColor() {
//   body.style.backgroundColor = getRandomHexColor();
//   valueColor.textContent = `${body.style.backgroundColor}`
// }
function changeColor() {
  const newColor = getRandomHexColor()
  body.style.backgroundColor = newColor;
  valueColor.textContent = `${newColor}`;
}

function getRandomHexColor() {

  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)}`;
}
const colorResult = button.addEventListener("click", changeColor);