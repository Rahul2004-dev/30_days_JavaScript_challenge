
// Activity 1: Array Creation and Access
// • Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
const var_A = [1, 2, 3, 4, 5]
console.log(var_A + typeof(var_A))

// • Task 2: Access the first and last elements of the array and log them to the console.
const var_B = [1, 2, 3, 4, 5]

console.log("First element : " + var_B[0] )
console.log("Last element : " + var_B[var_B.length - 1] )

// Activity 2: Array Methods (Basic)
const var_C = [1, 2, 3, 4, 5]
// Task 3: Use the push method to add a new number to the end of the array and log the updated array. • 
var_C.push(6)
console.log("New array : " + var_C )

// Task 4: Use the pop method to remove the last element from the array and log the updated array.
var_C.pop()
console.log('Updated array : ' + var_C)

// • Task 5: Use the shift method to remove the first element from the array and log the updated array. 
var_C.shift()
console.log("New array : " + var_C )

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
var_C.unshift(1)
console.log('Updated array : ' + var_C)

// Activity 3: Array Methods (Intermediate)
// • Task 7: Use the map method to create a new array where each number is doubled and log the new array.
const var_D = [1, 2, 3, 4, 5, 6]

const var_F = var_D.map((e) => {
  return e * 2;
})

console.log("Doubles :",  var_F)

// • Task 8: Use the filter method to create a new array with only even numbers and log the new array.
const var_G = var_D.filter((e) => {
  return e % 2 === 0
})
console.log("Even :",  var_G)

// • Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
const var_Z = var_D.reduce((accumlater, currentValue) => {
    console.log(accumlater, currentValue)
    return accumlater + currentValue;
  }, 0)
  console.log("Sum of array :",  var_Z)

// Activity 4: Array Iteration
// Task 10: Use a for loop to iterate over the array and log each element to the console.
for (var i = 0; i < var_D.length; i++) {
    console.log(var_D[i])
  }
  
// • Task 11: Use the forEach method to iterate over the array and log each element to the console.
var_D.forEach((e) => {
    console.log(e)
  })

// Activity 5: Multi-dimensional Arrays
// • Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
let multiArray = [[1,2,3], [4, 5, 6], [[7, 8, 9]]]
console.log(multiArray)

// • Task 13: Access and log a specific element from the two-dimensional array.
console.log(multiArray[1])