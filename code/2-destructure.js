// Destructuring allows you to unpack values from arrays or properties from
// objects into distinct variables.

// Task 1: Use destructuring to assign the values "John" and "Doe" from the
// `fullName` array into separate variables `firstName` and `lastName`.
let firstName, lastName;
const fullName = ["John", "Doe"];
[firstName, lastName] = fullName;

// Task 2: Destructure the `user` object below to create variables `name`
// and `age` using object destructuring.
const user = {
  name: "Alice",
  age: 25,
};
let name = user.name;
let age = user.age;

// Task 3: Print `firstName`, `lastName`, `name`, and `age` using console.log.
console.log(
  "First name",
  firstName,
  "Last name",
  lastName,
  "Name",
  name,
  "Age",
  age
);
// Task 4: Write a function called `getFullName` that takes an object with properties
// `firstName` and `lastName`, and returns a string that combines them in the format
// "FirstName LastName". The function has to use destructuring.
function getFullName(object) {
  const { firstName, lastName } = object;
  let fullName = firstName + " " + lastName;
  return fullName;
}
// Task 5: Call the `getFullName` function with the `person` object and print
// the result using console.log.
const person = {
  firstName: "Jane",
  lastName: "Smith",
};
console.log(getFullName(person));
