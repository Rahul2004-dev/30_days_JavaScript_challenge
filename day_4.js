// for loops

// Write a program to print numbers from 1 to 100 using a for loop.
for (let index = 1; index <= 100; index++) {
    console.log(index)
}

// Write a program to print the multiplication table of 5 using a for loop.
for (let index = 1; index <= 10 ; index++) {
    console.log(5 * index)   
}

// While loop

// Write a program to calculate the sum of numbers from 1 to 10 using while loop.
let num = 0;
let index = 1;
while (index <= 10) {
    num = num + index;
    index++;
}
console.log(num)

// Write a program to print numbers from 10 to 1 using a while loop.
let i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}

// Do..While loop 

// Write a program to print numbers from 1 to 5 using a do...while loop.
let input = 1;
do {
    console.log(input)
    input++;
} while (input <= 5);

// Write a program to calculate the factorial of a number using a do...while loop. 
let i = 5;
let down = 1;
let count = [];
do {
  count.push(i);
  down = i * down;
  i--;
} while (i >= 1);
  console.log(`${count} factorial is : ${down}`)

// function A (i) {
//   let down = 1;
// let count = [];
//   do {
//   count.push(i);
//   down = i * down;
//   i--;
// } while (i >= 1);
// console.log(`${count} factorial is : ${down}`)
// }

// A(6)



// Nested loop

// Write a program to print a pattern using nested for loops. 
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }

// Loop control statement 
// Write a program to print numbers from 1 to 10, but skip the number 5 using the continue state.
for(i = 1; i <= 10; i++){
    if(i === 5){
      continue;
    }
    console.log(i)
  }

// Write a program to print numbers from 1 to 10, but stop the loop when the number 7 using the break statement.
for(i = 1; i <= 10; i++){
    if(i === 7){
      break;
    }
    console.log(i)
  }

