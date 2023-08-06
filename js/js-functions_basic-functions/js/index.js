console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/
const title = "Harry Potter";
const writer = "jk Rowling";
const rating = 9.81;
const sales = 10000;
logBookData();
// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/
console.log(
  `The book title: ${title},\n The writer: ${writer},\nThe rating: ${
    rating + 5
  },\n Sales: ${sales + 5}`
);
console.log("--------------");
/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/

function logBookData() {
  console.log(
    `The book title: ${title},\n The writer: ${writer},\nThe rating: ${rating},\n Sales: ${sales}`
  );
}
logBookData();

function logBookData2() {
  console.log(
    `The book title: ${title},\n The writer: ${writer},\nThe rating: ${rating},\n Sales: ${
      sales + 15
    }`
  );
}
logBookData2();

console.log(
  `The book title: ${title},\n The writer: ${writer},\nThe rating: ${rating},\n Sales: ${
    sales + 20
  }`
);

logBookData3();
