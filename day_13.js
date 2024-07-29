// ﻿

// Day 13: Modules
// Tasks/Activities:
// Activity 1: Creating and Exporting Modules
// ⚫ Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.
export function exModule(a, b){
    return a + b;
}
// • Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
export class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sayHello(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age}
            years old.`
            );
        }
    }

// Activity 2: Named and Default Exports
// • Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.
function nameA(params) {
    console.log(params)
}

function nameB(params) {
    console.log(params)
}

export {nameA, nameB}

// • Task 4: Create a module that exports a single function using default export. Import and use this function in another script.
export function nameC(params) {
    return params ** 2
}

// Activity 3: Importing Entire Modules
// ⚫ Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.
export const PI = 3.14;
export const SQUARE_ROOT_OF_TWO = 1.414;

export function square(x) {
  return x * x;
}

export function cube(x) {
  return x * x * x;
}

// Activity 4: Using Third-Party Modules
// • Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.
// • Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script. Activity 5: Module Bundling (Optional)
// • Task 8: Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.

// ﻿

// Feature Request:
// 1. Basic Module Script: Write a script that creates a module exporting a function and imports it in another script.
// 2. Named and Default Exports Script: Create a script demonstrating both named and default exports and their usage.
// 3. Third-Party Module Script: Write a script that installs, imports, and uses functions from third-party modules like lodash and axios.
// 4. Module Bundling Script: Create a script demonstrating how to bundle JavaScript files using a module bundler (optional).
// Achievement:
// By the end of these activities, students will:
// • Create and export functions, objects, and constants using modules.
// • Import modules using named and default imports.
// • Use third-party modules installed via npm.
// • Understand the basics of module bundling (optional).