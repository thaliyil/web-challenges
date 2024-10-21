console.clear();

const operand1 = 12;
const operand2 = 4;

const addButton = document.querySelector('[data-js="add"]');
const subtractButton = document.querySelector('[data-js="subtract"]');
const multiplyButton = document.querySelector('[data-js="multiply"]');
const divideButton = document.querySelector('[data-js="divide"]');
const exponentButton = document.querySelector('[data-js="exponent"]');
const moduloButton = document.querySelector('[data-js="modulo"]');

addButton.addEventListener("click", () => {
  const sum = operand1 + operand2;
  console.log(sum);
});

subtractButton.addEventListener("click", () => {
  let result = operand1 - operand2;
  console.log(result);
});

multiplyButton.addEventListener("click", () => {
  const multiplicationResult = operand1 * operand2;
  console.log(multiplicationResult);
});

divideButton.addEventListener("click", () => {
  const dultiplicationResult = operand1 / operand2;
  console.log(dultiplicationResult);
});

exponentButton.addEventListener("click", () => {});

moduloButton.addEventListener("click", () => {
  let remainder = operand1 % operand2;
  console.log(remainder);
});

const increaseByOneButton = document.querySelector(
  '[data-js="increase-by-one"]'
);
const increaseByFiveButton = document.querySelector(
  '[data-js="increase-by-five"]'
);
const decreaseByOneButton = document.querySelector(
  '[data-js="decrease-by-one"]'
);
const decreaseByFiveButton = document.querySelector(
  '[data-js="decrease-by-five"]'
);
const multiplyByTwoButton = document.querySelector(
  '[data-js="multiply-by-two"]'
);
const divideByTwoButton = document.querySelector('[data-js="divide-by-two"]');

increaseByOneButton.addEventListener("click", () => {
  let operand1 = 85;

  operand1 += 1;
  console.log(operand1);
});

increaseByFiveButton.addEventListener("click", () => {
  let operand1 = 85;

  operand1 += 5;
  console.log(operand1);
});

decreaseByOneButton.addEventListener("click", () => {
  operand1--;
  console.log(operand1);
});

decreaseByFiveButton.addEventListener("click", () => {
  operand1 -= 5;
  console.log(operand1);
});
