// WAP to check if a number is positive negative or zero, and log the result to the console. 
let var_A = 56
if(var_A > 0){
    console.log("Positive")
}else if(var_A < 0){
    console.log("Negative")
}else{
    console.log("Zero")
}

function a(varr_A) {
    const Result = (varr_A > 0) ? "Positive" : (varr_A < 0) ? "Negative" : "Zero" 
    return Result;
  }
  
  console.log(a(-5))

// WAP to check if a person is eligible to vote  (age>=18) and log the rsult to the console.
let varr_B = 56

if(varr_B >= 18){
    console.log("A person is eligible to vote their constitution")
}else{
    console.log("A person is not eligible to vote their constitution")
}

function Voting (age) {
    const eligibity = (age >= 18) ? "A person is eligible to vote their constitution" : "A person is not eligible to vote their constitution"
    return eligibity
}
console.log(Voting(18))

// WAP to find the largest number of three numbers using nested if-else Statement. 
let varr_C = 10265
let varr_D = 8752
let varr_E = 6556

if(varr_C < varr_D){
  if(varr_D < varr_E){
    console.log("Greatest:" + varr_E)
  }else{
    console.log("fd: " + varr_D)
  }
}else if(varr_C > varr_E){
  console.log("dfgjhg :" + varr_C)
}else{
  console.log("hg :" + varr_E)
}

// WAP that uses a switch to determine the day of the weekend based on a number (1-7) and log the day name to the console. 
let day;
switch(new Date().getDay()){
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thrusday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}
console.log("Today is: " + day)

// WAP that uses the switch case to assign a grade ("A", "B", "C", "D", "E") based on a score and log the grade to the console.
let grade = 85;



switch (true) {
    case grade > 90:
        console.log("Grade: A");
        break;
    case grade > 80:
        console.log("Grade: B");
        break;
    case grade > 70:
        console.log("Grade: C");
        break;
    case grade > 60:
        console.log("Grade: D");
        break;
    default:
        console.log("Grade: E");
}
// WAP that uses the ternary operater to check if a number is even or odd and log the result to the console.
function check(varrA){
  const ternary = varrA % 2 === 0
  return ternary ? "Even" : "Odd"
}
console.log(check(898))

// WAP to check if a year is a leap year using multiple conditions (divisable by 4, but not 100 unless also divisible by 400) and log the result to the console.
let leap = 1900
if(leap % 4 === 0){
    if(leap % 400 === 0){
        if(leap % 100 === 0){
            console.log(`${leap} is a leap year`)
        }else{
            console.log(`${leap} is not a leap year`)
        }
    console.log(`${leap} is a leap year`)
    }else{
        console.log(`${leap} ia not a leap year`)
    }
}
