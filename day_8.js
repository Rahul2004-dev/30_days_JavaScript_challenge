
// Tasks/Activities:
// Activity 1: Template Literals
// • Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console. 
const literal = {
    personName : "Rahul Gupta",
    age : 20
  }
  
  console.log(`${Object.keys(literal)} : ${Object.values(literal)}`)

// • Task 2: Create a multi-line string using template literals and log it to the console.
const multilineString = `
This is a multi-line string
created using template literals.
It can span multiple lines
and is very convenient to use.
`;

console.log(multilineString);

// Activity 2: Destructuring
// • Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const arrayDestructing = [1, 2, 3, 4, 5]

const [a, b, ...rest] = arrayDestructing;

console.log(a, b)

// • Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
const book = {
    title : "Fundamental of Computers",
    auther : "Rahul Gupta"
  }
  
  const {title, auther} = book;
  console.log(title, auther)
  
// Activity 3: Spread and Rest Operators
// • Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
const array = ["Hello", "Dear", "Hitesh", "Sir"]
const newArray = [...array, "I", "Am", "Rahul"]

console.log(newArray)

// • Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function rest(...rest){
  const [a, b] = rest;
  return a + b;
}
console.log(rest(6,2))

// Activity 4: Default Parameters
// • Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function product(a, b = 1){
  return a * b;
}
console.log(product(5))
console.log(product(5, 2))

// Activity 5: Enhanced Object Literals
// • Task 8: Use enhanced object literals to create an object with methods and  properties, and log the object to the console.
const person = {
  // property
  name: 'John Doe',
  age: 30,

  // method
  sayHello() {
    console.log(`Hello, my name is ${this.name}!`);
  },

  // method
  getAge() {
    return this.age;
  }
};

console.log(person);

// Task 9: Create an object with computed property names based on variables and log the object to the console.
const prefix = 'user';
const suffix = 'Info';

const obj = {
  [`${prefix}Name`]: 'John Doe',
  [`${prefix}Age`]: 30,
  [`${suffix}Created`]: '2022-01-01',
  [`${suffix}Updated`]: '2022-01-15'
};

console.log(obj);