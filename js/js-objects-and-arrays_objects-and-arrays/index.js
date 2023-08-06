console.clear();

const people = [
  {
    name: "Homer",
    age: 39,
    parents: { mothersName: "Mona", fathersName: "Abe" },
    pet: { animal: "dog", name: "Santa's Little Helper" },
    friend: { name: "Moe Szyslak", work: "owner of Moes Tavern" },
    "other friends": ["Barney Gumble", "Carl Carlson", "Lenny Leonard"],
    color_cloth: "white",
  },
  {
    name: "Marge",
    age: 36,
    parents: {
      mothersName: "Jacqueline Bouvier",
      fathersName: "Clancy Bouvier",
    },
    pet: { animal: "dog", name: "Santa's Little Helper" },
    kids: [
      { name: "Bart", child_number: "first" },
      { name: "Lisa", child_number: "second" },
      { name: "Maggie", child_number: "third" },
    ],
    color_cloth: "lightgreen",
  },
  {
    name: "Bart",
    age: 10,
    parents: { mothersName: "Marge", fathersName: "Homer" },
    pet: { animal: "dog", name: "Santa's Little Helper" },
    quotes: ["Ay Caramba!", "Eat my shorts!", "I didnt do it!"],
    color_cloth: "red",
  },
  {
    name: "Lisa",
    age: 8,
    parents: { mothersName: "Marge", fathersName: "Homer" },
    pet: { animal: "dog", name: "Santa's Little Helper" },
    quotes: [
      "Bart!",
      "If anyone wants me, Ill be in my room.",
      "Quit it, Bart!",
    ],
    color_cloth: "orange",
  },
];

// EXERCISE 1
// Change the value of the variable nameOfFirstPerson to equal the name of the first person.

const nameOfFirstPerson = people[0].name;
console.log("Name of the first person: ", nameOfFirstPerson);

// EXERCISE 2
// Change the value of the variable homersOtherFriends to equal the other friends of Homer.

const homersOtherFriends = people[0]["other friends"];

console.log("Homer's other friends: ", homersOtherFriends);

// EXERCISE 3
// Change the value of the variable ageOfThirdPerson to equal the age of the third person.

const ageOfThirdPerson = people[2].age;
console.log("Age of Third Person: ", ageOfThirdPerson);

// EXERCISE 4
// Change the value of the variable mothersNameOfSecondPerson to equal the mothers name of the second person.

const mothersNameOfSecondPerson = people[1].parents.mothersName;
console.log("Mother of second person: ", mothersNameOfSecondPerson);
// EXERCISE 5
// Change the value of the variable animaltypeOfLisasPet to equal the type of animal of Lisas pet.

const animaltypeOfLisasPet = people[3].pet.animal;
console.log("animal type of Lisa's pet: ", animaltypeOfLisasPet);

export {
  nameOfFirstPerson,
  homersOtherFriends,
  ageOfThirdPerson,
  mothersNameOfSecondPerson,
  animaltypeOfLisasPet,
};

const sheepArray = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

let sheepCount = 0;

for (let i = 0; i < sheepArray.length; i++) {
  if (sheepArray[i] === true) {
    sheepCount++;
  }
}

console.log(sheepCount);

const Nums = [4, 3, 9, 7, 2, 1];

let NumsCount = [];

for (let i = 0; i < Nums.length; i++) {
  const currentNum = Nums[i];

  if (
    currentNum === 2 ||
    currentNum === 3 ||
    currentNum === 5 ||
    currentNum === 7
  ) {
    NumsCount.push(currentNum);
  } else {
    NumsCount.push(currentNum * 2);
  }
}
console.log(NumsCount);
