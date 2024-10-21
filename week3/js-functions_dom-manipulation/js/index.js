const box = document.querySelector("[data-js=box]");
const redButton = document.querySelector("[data-js=js-red-button]");
const greenButton = document.querySelector("[data-js=js-green-button]");
const blueButton = document.querySelector("[data-js=js-blue-button]");
const grayButton = document.querySelector("[data-js=js-gray-button]");

function removeAllColors() {
  box.classList.remove("red");
  box.classList.remove("blue");
  box.classList.remove("green");
  box.classList.remove("gray");
}
function addColor(color) {
  box.classList.add(color);
}

redButton.addEventListener("click", () => {
  removeAllColors();
  addColor("red");
});

blueButton.addEventListener("click", () => {
  removeAllColors();
  addColor("blue");
});

greenButton.addEventListener("click", () => {
  removeAllColors();

  addColor("green");
});

grayButton.addEventListener("click", () => {
  removeAllColors();
  addColor("gray");
});
