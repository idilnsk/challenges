console.clear();

// EXERCISE 1
// Use array destructuring to extract the variables "name", "price", and "quantity".
// Make sure to export your variable as in the example below to make the tests work.

const item = ["Egg", 0.25, 12];

//const [name, price, quantity] = item;
export const [name, price, quantity] = item;
console.log(item);

// example: export const [value1, value2] = array;

// EXERCISE 2
// Use array destructuring to extract the variables "firstNameOfChris", "lastNameOfChris" and "ageOfChris".

const personChris = [12, "Chris", "Owen"];

const [ageOfChris, firstNameOfChris, lastNameOfChris] = personChris;

console.log(ageOfChris, firstNameOfChris, lastNameOfChris);

// EXERCISE 3
// Use array destructuring to extract the variables "firstNameOfAlex" and "lastNameOfAlex".
// Make sure not to have unused variables.

const personAlex = ["Alex", 12, "Main"];

const [firstNameOfAlex, , lastNameOfAlex] = personAlex;

console.log(firstNameOfAlex, lastNameOfAlex);

// EXERCISE 4
// Use array destructuring to extract the last name from the array
// as variable called "lastName".

const students = ["Christina", "Jon", "Alexandare"];

const [, , lastName] = students;
console.log(lastName);

// EXERCISE 5
// Use array destructuring to extract all of the names from this nested array.
// Assign the given order of students to variables called "student1" to "student5".
/*
const nestedStudents = ["Chris", ["Ahmad", "Antigoni"], ["Toby", "Sam"]];

const [0,[1,2],[3,4]]=nestedStudents;
console.log(0,1,2,3,4);
*/
// EXERCISE 6
// Spread the values of the values array into the function call of the add function.
// Keep in mind that you need to export the variable 'result' to make the test work.

const values = [1, 6, 7, 9, 12, 5, 4];

const result = add(1); // Spread values inside this function call

function add(...values) {
  return values.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
}

export { result };

console.log(result);
