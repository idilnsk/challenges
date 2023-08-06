console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe");
}

// The exercise starts here!
/*
function showWelcomeMessage(userName) {
  onSuccess(handleUserLogin);
  console.log(handleUserLogin + `${userName}`);
}
*/
function showWelcomeMessage(userName) {
  console.log(`Welcome ${userName}.You are logged in.`);
}
handleUserLogin(showWelcomeMessage);
handleUserLogin((userName)=>{
  console.log(`Welcome ${userName}.You are logged in.`);
});
