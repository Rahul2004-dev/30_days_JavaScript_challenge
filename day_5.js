// function declaration

// 1. Write a function to check if a number is even or odd and log the result to the console.

function evenOrOdd(var_A){
    if(var_A % 2 === 0){
      console.log(var_A + " is Even.")
    }else{
      console.log(var_A + " is Odd.")
    }
  }
  
  evenOrOdd(21)

// 2. Write a function to calculate a square of a number and the result.

function square(var_B){
    // console.log(var_B * var_B)
    const result = var_B * var_B;
    return result;
  }
  
  console.log(square(2))

// Function Expression

// 3. Write a function expression to find the maximum of two numbers and log the result to the console.

const maximum = function(var_C, var_D){
    return Math.max(var_C, var_D)
  }
  
  console.log(maximum(22, 22))
  
//   const second = function(c, d){
//     if(c > d){
//       console.log("maximum " + c)
//     }else{
//       console.log("maximum " + d)
//     }
//   }
  
//   second(5, 55)

// 4. Write a function expression to concatnate two strings and return the result.

const concatnate = function(var_E, var_F){
    const string = var_E + var_F;
    console.log(string)
  }
  
  concatnate("Rahul", "Gupta")

// Arrow function 

// 5. Write an arrow function to calculate the sum of two numbers and return the result.
const arrow = (var_G, var_H) => {
    return var_G + var_H;
  }
  
  console.log(arrow(5, 6))

// 6. Write an arrow function to check if a string contains a specific character and return a boolean value.
const strings = (var_I, str) => {
    const var_A = var_I.includes(str)
    console.log(var_A)
 }
 
 
 strings("Rahul", "l6")

// function parameters and default values 

// 7. Write a function that takes two parameters and returns their products . Provide the default value for the second parameter.

function parameter(a, b = 3) {
    return a * b
}

console.log(parameter(3))

// 8. Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age. 
function greeting(name, age = 20){
    console.log(`Congratulations dear ${name}, Today you have turned ${age} years old. `)
  }
  
  greeting("Rahul Gupta")

// Higher order function 

// 9. Write a higher-order function that takes a function and a number, and calls the function that many times.

function first(fn, n){
    for (var i = 0; i < n; i++) {
      fn();
    }
  }
  
  const second = () => console.log("Rahul Gupta")
  
  first(second, 25)
// 10. Write a higher-order function that takes two function and a value, applies the first function to the value, and then applies the second function to the result. 

function a(b, c, value){
    b(value);
    c(bac);
  }
  
  const ba = (f) =>  bac = f ** 3;
  
  const ca = (g) => console.log(g / 2)
  
  a(ba, ca, 8)