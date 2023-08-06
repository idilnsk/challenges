const input = document.querySelector('[data-js="age-input"]');
const button = document.querySelector('[data-js="age-button"]');
const output = document.querySelector('[data-js="age-output"]');

button.addEventListener("click", () => {
  const age = Number(input.value);
  let result = "";
  if (age < 18) {
    result = "You are a teen";
  } else {
    result = "You are not a teen";
  }
  console.log(result);
});
// Number(x) converts the string from the input to a number
// Beware: input values are *always* strings!

// Exercise:
// Use conditions and the logical AND operator to write
// "You are a teen." or "You are not a teen." into the output.
