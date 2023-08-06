console.clear();

const operand1 = 12;
const operand2 = 4;

/*
Mathematical operations
*/
const addButton = document.querySelector('[data-js="add"]');
const subtractButton = document.querySelector('[data-js="subtract"]');
const multiplyButton = document.querySelector('[data-js="multiply"]');
const divideButton = document.querySelector('[data-js="divide"]');
const exponentButton = document.querySelector('[data-js="exponent"]');
const moduloButton = document.querySelector('[data-js="modulo"]');

addButton.addEventListener("click", () => {
  let result = operand1 + operand2;
  console.log(result);
});

// 1. Add the two operands and store the result in a variable. Log the variable's value to the console.

subtractButton.addEventListener("click", () => {
  let result = operand1 - operand2;
  console.log(result);
});

multiplyButton.addEventListener("click", () => {
  let result = operand1 * operand2;
  console.log(result);
});

divideButton.addEventListener("click", () => {
  let result = operand1 / operand2;
  console.log(result);
});

exponentButton.addEventListener("click", () => {
  let result = operand1 ** operand2;
  console.log(result);
});

moduloButton.addEventListener("click", () => {
  let result = operand1 % operand2;
  console.log(result);
});

/*
Update the first operand

Please don't forget to think about the declaration of the variable "operand1".
*/
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
  let result = operand1 + 1;
  console.log(result);
  // 7. Increase the value of "operand1" by 1. Log the new value to the console.
});

increaseByFiveButton.addEventListener("click", () =>  {
  let result = operand1 + 5;
  console.log(result);

  // 8. Increase the value of "operand1" by 5. Log the new value to the console.
});

decreaseByOneButton.addEventListener("click", () => {
  // 7. Decrease the value of "operand1" by 1. Log the new value to the console.
});

decreaseByFiveButton.addEventListener("click", () => {
  // 8. Decrease the value of "operand1" by 5. Log the new value to the console.
});

multiplyByTwoButton.addEventListener("click", () => {
  // 11. Multiply the value of "operand1" by 2. Log the new value to the console.
});

divideByTwoButton.addEventListener("click", () => {
  // 12. Divide the value of "operand1" by 2. Log the new value to the console.
});
