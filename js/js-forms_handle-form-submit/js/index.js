console.clear();

const form = document.querySelector('[data-js="form"]');
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const formDataObject = Object.fromEntries(formData);
  console.log(formDataObject);
  const age = Number(formData.get("age"));
  const badness = Number(formData.get("badness"));
  const ageBadnessSum = age + badness;
  const firstName = formData.get("firstName");
  console.log(`The age-badness-sum of "${firstName}" is ${ageBadnessSum}`);
});
