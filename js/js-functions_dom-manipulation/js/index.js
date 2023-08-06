const box = document.querySelector("[data-js=box]");
const redButton = document.querySelector("[data-js=js-red-button]");
const greenButton = document.querySelector("[data-js=js-green-button]");
const blueButton = document.querySelector("[data-js=js-blue-button]");
const grayButton = document.querySelector("[data-js=js-gray-button]");

/*
We want to add some functionality to the buttons on this page. When pressing a button, the corresponding color should be applied to the box.
  1: Create a function removeAllColors which removes all color classes from the box.
  2: Create a function addColor which takes a class name as a parameter and adds the class to the box.
  3: Use the two functions in the event listeners of the buttons to color in the box when the button is clicked.
*/

redButton.addEventListener("click", () => {
  removeClass();
  addClass("red");
  console.log("red");
});

blueButton.addEventListener("click", () => {
  removeClass();
  addClass("blue");
  console.log("blue");
});

greenButton.addEventListener("click", () => {
  removeClass();
  addClass("green");
  console.log("green");
});

grayButton.addEventListener("click", () => {
  removeClass();
  addClass("gray");
  console.log("gray");
});

function removeClass() {
  return box.classList.remove("red", "blue", "green", "gray");
}
function addClass(className) {
  return box.classList.add(className);
}
