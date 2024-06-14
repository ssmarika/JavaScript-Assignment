// ! 1. Why do we use rest operator and spread operator?
// ?Rest Operator
// The rest operator is used to collect multiple elements into an array. It is primarily used
// in two contexts: function parameters and destructuring assignments.

// Function Parameters:
// When defining a function, the rest operator allows you to accept an indefinite number of
// arguments as an array.

const getSum = (x, y, ...otherValue) => {
  const sum = otherValue.reduce((total, item) => {
    total = total + item;

    return total;
  }, 0);

  let totalSum = x + y + sum;

  return totalSum;
};

const result = getSum(1, 2, 3, 4, 5, 6);

console.log(result);

// Destructuring Assignments:
// The rest operator can be used to collect the remaining elements of an array or the remaining
// properties of an object into a new array or object.

const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]

// ? Spread Operator
// The spread operator is used to expand or spread elements. It can be used in function
//  array literals, and object literals.

// Array Literals:
// The spread operator can be used to create a new array that includes all the elements of an
// existing array.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

// Object Literals:
// The spread operator can be used to create a new object that includes all the properties of an
// existing object.
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combined1 = { ...obj1, ...obj2 };
console.log(combined1); // Output: { a: 1, b: 2, c: 3, d: 4 }

// ! 2. Give an example of a spread operator to copy objects and arrays.

// ? For Object
const student1 = {
  fName: "Smarika",
  lName: "Shrestha",
  age: 21,
  address: "Patan",
};
const student2 = { ...student1 };
console.log(student2);

// ? For Array
const subject1 = ["Maths", "English", "Science"];
const subject2 = [...subject1];
console.log(subject2);

// ! 4. Use default value for a function which divides two numbers

const division = (num1 = 10, num2 = 5) => {
  div = num1 / num2;
  console.log(`DIvision: ${div}`);
};

division();

// ! 5. Create an object named laptopDetails. Add fields like brand, processor,ram,core,gpu,
// !    storage,screenSize. Do object destructure and print out laptop details.

const laptopDetail = {
  brand: "HP",
  processor: "intel i7",
  ram: 16,
  core: 5,
  gpu: 16,
  storage: 512,
  screenSize: 22,
};

const { brand, processor, ram, core, gpu, storage, screenSize } = laptopDetail;

console.log(brand, processor, ram, core, gpu, storage, screenSize);

// ! 6. Create an array called countryList. Add some countries like Nepal, India,China..
// !    Use array destructure to print out data.

const nations = ["Nepal", "China", "India", "Bhutan", "Sri Lanka"];

const [a, b, ...otherValues] = nations;

console.log(a, b, otherValues);
