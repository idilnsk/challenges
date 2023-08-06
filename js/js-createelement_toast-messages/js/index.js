console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", (e) => {
  e.preventDefault();
  const toastContainerNew = document.createElement("li");
  toastContainerNew.classList.add("toast-container__message");
  toastContainerNew.textContent = "This text is displayed in the element";
  toastContainerNew.innerHTML = `<p>${toastContainerNew.textContent}</p>`;
  toastContainer.append(toastContainerNew);
});

// Exercise: Append a new entry to the toast messages container
clearButton.addEventListener("click", (e) => {
  toastContainer.innerHTML = "";

  // Exercise: Clear the stack of toast messages
});
