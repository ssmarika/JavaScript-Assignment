// Check if a number is odd or even

let x = 20;
let rem = x % 2;

if (rem === 0) {
  console.log(`${x} is even`);
} else {
  console.log(`${x} is odd`);
}

//Check if input variable is a number or not

let y = 12;
let t = typeof y;

if (t == "number") {
  console.log(`${y} is a number`);
} else {
  console.log(`${y} is not a number`);
}

//Find the largest of two numbers

let a = 100;
let b = 200;

if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${b} is greater than ${a}`);
}

//Find the largest of three numbers

let p = 50;
let q = 6;
let r = 7;

if (p > q && p > r) {
  console.log(`${p} is the greatest`);
} else if (q > r) {
  console.log(`${q} is the greatest`);
} else {
  console.log(`${r} is the greatest`);
}

// Perform arithmetic operation based on the option provided

let num1 = 10;
let num2 = 5;
let option = "Subtraction";

switch (option) {
  case "Addition":
    let add = num1 + num2;
    console.log(`The result of addition is ${add}`);
    break;

  case "Subtraction":
    let sub = num1 - num2;
    console.log(`The result of subtraction is ${sub}`);
    break;

  case "Multiplication":
    let mul = num1 * num2;
    console.log(`The result of multiplication is ${mul}`);
    break;

  case "Division":
    let div = num1 / num2;
    console.log(`The result of division is ${div}`);
    break;
}

// Find the grade for student marks

let marks = 99;

if (marks >= 90) {
  console.log("The grade obtained is A+");
} else if (marks >= 80) {
  console.log("The garde obtained is A");
} else if (marks >= 70) {
  console.log("The grade obtained is B");
} else if (marks >= 60) {
  console.log("The grade obtained is C");
} else {
  console.log("The grade obtained is F");
}
