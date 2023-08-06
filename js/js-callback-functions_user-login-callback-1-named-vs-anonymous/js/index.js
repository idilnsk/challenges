console.clear();

function showWelcomeMessage() {
  const message = "Welcome! You are logged in now.";
  console.log(message);
}

function handleUserLogin(onSuccess) {
  // You might wonder why this function is called `onSuccess`. This will become clear by the fourth challenge! 🤞
  onSuccess(showWelcomeMessage);
}
// Call handleUserLogin below!

handleUserLogin(showWelcomeMessage);

handleUserLogin(() => {
  const message = "Welcome! You are logged in now.";
  console.log(message);
});
