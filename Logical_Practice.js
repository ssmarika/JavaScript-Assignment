// find
// a. a>b AND c<=d
// b. a+b< OR d*a>=c
// c. (a**c===d AND d===e+a-1) OR d%e!==1
// d. 2**a+b>d OR c-d>b

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
