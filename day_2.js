// Arithmetic Operations 
let var_A = 45
let var_B = 55
const var_C = var_A + var_B
console.log(var_C)
const var_D = var_A - var_B
console.log(var_D)
const var_E = var_A * var_B
console.log(var_E)
const var_F = var_A / var_B
console.log(var_F)
const var_G = var_A % var_B
console.log(var_G)

function Arithmetic (varr_A, varr_B) {
  const Result = {
    Add : varr_A + varr_B,
    Subs : varr_A - varr_B,
    Multiply : varr_A * varr_B,
    Division : varr_A / varr_B
  }
  return Result
}
console.log(Arithmetic(55,66))
// Assignment Operaters 
let var_H = var_A
var_H += var_B
console.log(var_H)
let var_I = var_A
var_I -= var_B
console.log(var_I)

// Comparision Operaters 
if(var_A > var_B) {
  console.log(`var_A is greater than var_B`)
}if(var_A < var_B) {
  console.log(`var_A is less than var_B`)
}else{
  console.log(`var_A is equal to var_B`)
}

if(var_A >= var_B) {
    console.log(`var_A is greater than or equal to var_B`)
  }if(var_A <= var_B) {
    console.log(`var_A is less than or equal to var_B`)
  }

let var_J = `"${var_A}"`
console.log(var_A == var_J) //Output: false
var_J = "55"
console.log(var_A == var_J) //Output: true - Automatically data type conersion into numbers
console.log(var_A === var_J) //Output: false - Data type conversion not allowed

// logical operater 
if (var_A == var_B && var_A === var_B) {
    console.log("both are ture")
  }else{
    console.log("Data type conversion not allowed")
  }
  
  if (var_A == var_B || var_A === var_B) {
    console.log("both are ture")
  }else{
    console.log("Data type conversion not allowed")
  }
  
  console.log(!(var_A == var_B))

//   ternary operater 
if(var_A > 0){
    console.log("positive")
  }else{
    console.log("negative")
  }