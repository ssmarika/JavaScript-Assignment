//! Why do we need object?
// 1. Structure data => key value pair => group of primary data types === complex data type

// 2. Encapsulation => hide data , controlled access to data

// const obj = {};

// Object.defineProperty(obj,"name",{
//     value: "Mohan",
//     enumerable: false, //
//     writable: true, //controls later change, role for edit
//     configurable: true //controls the deletion of the object values
// });

// 3. Dynamic property => we can add, edit, update and delete property easily

// best example for square bracket access

const laptopDetail = {
  name: "F15",
  brand: "HP",
  ram: "16 GB",
  ssd: "512 GB",
};

let key = "ram";

console.log(laptopDetail[key]);  // using .key will throw error 

// 4. abstraction => hide process

// 5. modular, better organization of data


// ! QUESTION 2

// const myHOuseDetail = {
//   numberOfRooms: 9,
//   numberOfMember: 10,
//   colorOfHOuse: "Green",
//   builtYear: 2002,
//   numberOfStorey: 3,
// };

// ? do not use string data type for numberOfRoom data it may cause difficulty in access data from db later
// ? suppose finding the house with no of member greater than 5
//delete myHOuseDetail.numberOfMember;

// myHOuseDetail.numberOfRooms = 9;

// myHOuseDetail.estimatedPriceOfHouse = "2 crore";

// console.log(
//   `I have a ${myHOuseDetail.colorOfHOuse} coloured house with ${myHOuseDetail.numberOfRooms} rooms where ${myHOuseDetail.numberOfMember} people are living. The house is ${myHOuseDetail.numberOfStorey} storey and was built in ${myHOuseDetail.builtYear} with an estimated budget of ${myHOuseDetail.estimatedPriceOfHouse} `
// );



