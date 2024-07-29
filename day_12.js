// ﻿

// Day 12: Error Handling
// Tasks/Activities:
// Activity 1: Basic Error Handling with Try-Catch
// • Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
function divideNumbers(a, b) {
    try {
      if (b === 0) {
        throw new Error("Cannot divide by zero!");
      }
      const result = a / b;
      console.log(`The result is: ${result}`);
    } catch (error) {
      console.error(`An error occurred: ${error.message}`);
    } finally {
      console.log("Division operation completed.");
    }
  }
  
  divideNumbers(10, 0);

// • Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
class DivisionError extends Error {
    constructor(message) {
      super(message);
      this.name = "DivisionError";
    }
  }
  
  function divideNumbers(a, b) {
    try {
      if (b === 0) {
        throw new DivisionError("Cannot divide by zero!");
      }
      const result = a / b;
      return result;
    } catch (error) {
      if (error instanceof DivisionError) {
        console.error(`Division error: ${error.message}`);
      } else {
        console.error(`An unknown error occurred: ${error.message}`);
      }
      return null;
    }
  }
  
  const numerator = 10;
  const denominator = 0;
  
  const result = divideNumbers(numerator, denominator);
  
  if (result !== null) {
    console.log(`The result is: ${result}`);
  } else {
    console.log("Division operation failed.");
  }

// Activity 2: Finally Block
// • Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
try {
    console.log("Entering try block...");
    const x = 10 / 2; // This will not throw an error
    console.log("Exiting try block...");
  } catch (error) {
    console.error("Entering catch block...");
    console.error(`An error occurred: ${error.message}`);
    console.error("Exiting catch block...");
  } finally {
    console.log("Entering finally block...");
    console.log("This code will always execute, regardless of errors.");
    console.log("Exiting finally block...");
  }

// Activity 3: Custom Error Objects
// • Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
// Define a custom error class that extends the built-in Error class
class InsufficientBalanceError extends Error {
    constructor(message, balance, amount) {
      super(message);
      this.name = "InsufficientBalanceError";
      this.balance = balance;
      this.amount = amount;
    }
  }
  
  // Function to withdraw money from an account
  function withdrawMoney(accountBalance, amount) {
    if (amount > accountBalance) {
      throw new InsufficientBalanceError(
        "Insufficient balance in your account",
        accountBalance,
        amount
      );
    }
    const newBalance = accountBalance - amount;
    return newBalance;
  }
  
  // Try to withdraw money from an account
  try {
    const accountBalance = 1000;
    const amountToWithdraw = 1500;
    const newBalance = withdrawMoney(accountBalance, amountToWithdraw);
    console.log(`Withdrawal successful. New balance: ${newBalance}`);
  } catch (error) {
    if (error instanceof InsufficientBalanceError) {
      console.error(`Error: ${error.message}`);
      console.error(`Account balance: ${error.balance}`);
      console.error(`Amount to withdraw: ${error.amount}`);
    } else {
      console.error(`An unknown error occurred: ${error.message}`);
    }
  }

// • Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.
// Define a custom error class for validation errors
class ValidationError extends Error {
    constructor(message, fieldName) {
      super(message);
      this.name = "ValidationError";
      this.fieldName = fieldName;
    }
  }
  
  // Function to validate user input
  function validateInput(fieldName, value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new ValidationError(`Please enter a valid ${fieldName}`, fieldName);
    }
  }
  
  // Function to get user input and attempt validation
  function getUserInput() {
    const name = prompt("Please enter your name:");
    const email = prompt("Please enter your email address:");
  
    try {
      validateInput("name", name);
      validateInput("email address", email);
      console.log("Validation successful!");
      console.log(`Name: ${name}`);
      console.log(`Email: ${email}`);
    } catch (error) {
      if (error instanceof ValidationError) {
        console.error(`Validation error: ${error.message}`);
        console.error(`Field name: ${error.fieldName}`);
      } else {
        console.error(`An unknown error occurred: ${error.message}`);
      }
    }
  }
  
  // Call the function to get user input and attempt validation
  getUserInput();

// Activity 4: Error Handling in Promises
// • Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.
const randomPromise = new Promise((resolve, reject) => {
    const randomBoolean = Math.random() < 0.5;
    if (randomBoolean) {
      resolve("Promise resolved!");
    } else {
      reject(new Error("Promise rejected!"));
    }
  });
  
  randomPromise
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.error(`Error: ${error.message}`);
    });

// • Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
async function handleRandomPromise() {
    try {
      const randomPromise = new Promise((resolve, reject) => {
        const randomBoolean = Math.random() < 0.5;
        if (randomBoolean) {
          resolve("Promise resolved!");
        } else {
          reject(new Error("Promise rejected!"));
        }
      });
  
      const result = await randomPromise;
      console.log(result);
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  }
  
  handleRandomPromise();

// Activity 5: Graceful Error Handling in Fetch
// • Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.
async function fetchData() {
    try {
      const response = await fetch('https://invalid-url.example.com/data');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(`Error fetching data: ${error.message}`);
    }
  }
  
  fetchData();
// • Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
async function fetchData() {
    try {
      const response = await fetch('https://invalid-url.example.com/data');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(`Error fetching data: ${error.message}`);
    } finally {
      console.log("Fetch complete.");
    }
  }
  
  fetchData();
  

// Feature Request:
// 1. Basic Error Handling Script: Write a script that demonstrates basic error handling using try-catch and finally blocks.
// 2. Custom Error Script: Create a script that defines and throws custom errors, handling them with try-catch blocks.
// 3. Promise Error Handling Script: Write a script that handles errors in promises using .catch() and try-catch within async functions. 4. Fetch Error Handling Script: Create a script that handles errors when using the fetch API to request data from invalid URLs.
// Achievement:
// By the end of these activities, students will:
// • Understand and implement basic error handling using try-catch blocks.
// • Use finally blocks to execute code regardless of the try-catch outcome.
// • Create and use custom error classes.
// • Handle errors in promises using .catch() and within async functions using try-catch.
// •
// Implement graceful error handling when making network requests with the fetch API.