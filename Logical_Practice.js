// !Find
// !a. a>b AND c<=d
// !b. a+b< OR d*a>=c
// !c. (a**c===d AND d===e+a-1) OR d%e!==1
//! d. 2**a+b>d OR c-d>b

let a = 2;
let b = 3;
let c = 5;
let d = 10;
let e = 9;

r1 = a > b && c <= d;
r2 = a + b < c || d * a >= c;
r3 = (a ** c === d && d === e + a - 1) || d % e !== 1;
r4 = 2 ** a + b > d || c - d > b;

console.log(`a. ${r1}`);
console.log(`b. ${r2}`);
console.log(`c. ${r3}`);
console.log(`d. ${r4}`);

// !Explain the difference between == and === operator

// ! Check of "5"===5 and "5"==5. Explain the answer in both case.

let a = "5";
let b = 5;

console.log(a == b); // true, because == compares only value
console.log(a === b); // false, because === compares both the value and the datatype

// !Check if 100 greater than 100. ALso check if 100 is greater than or equal to 100

console.log(100 > 100); //false
console.log(100 >= 100); //true

// !Check if 5 is less than 10

console.log(5 < 10); //true

// ! Is "Dinesh"==="dinesh"?Explain

let name1 = "Dinesh";
let name2 = "dinesh";

console.log(sname1 === name2); // Output: false
// the difference in case (uppercase "D" vs. lowercase "d") makes the values unequal in a case-sensitive comparison.

// !Explain NaN

let result = parseInt("abc"); // Trying to convert a non-numeric string to a number
console.log(result); // Output: NaN
