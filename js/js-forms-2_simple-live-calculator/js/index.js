console.clear();

const firstInput = document.querySelector('[data-js="firstValue"]');
const secondInput = document.querySelector('[data-js="secondValue"]');
const result = document.querySelector('[data-js="result"]');

firstInput.addEventListener("input", () => {
  result.innerHTML = ""; //deleting previous calculations
  const newResult = document.createElement("span");
  newResult.innerHTML = `<span>${firstInput.value * secondInput.value}</span>`;
  result.append(newResult);
});
secondInput.addEventListener("input", () => {
  result.innerHTML = ""; //deleting previous calculations
  const newResult = document.createElement("span");
  newResult.innerHTML = `<span>${firstInput.value * secondInput.value}</span>`;
  result.append(newResult);
});
