const laptopList = [
  {
    name: "LOQ",
    brand: "Lenovo",
    price: 1070,
  },
  {
    name: "Aspire 5",
    brand: "Acer",
    price: 730,
  },
  {
    name: "Modern 15",
    brand: "MSI",
    price: 690,
  },
  {
    name: "Macbook Pro M3",
    brand: "Apple",
    price: 2059,
  },
  {
    name: "Inspiron G15",
    brand: "Dell",
    price: 1015,
  },
  {
    name: "Idea Pad",
    brand: "Lenovo",
    price: 1059,
  },
  {
    name: "Zenbook 15",
    brand: "MSI",
    price: 1064,
  },
];

// ! 1. give 6 percent on 6:6 on each laptop

const discountedList = laptopList.map((item) => {
  let discountedPrice = item.price * (94 / 100);

  return {
    ...item,
    price: discountedPrice,
  };
});

console.log("Question 1");
console.log(discountedList);

// ! 2. increase price of Dell laptops by 10%

const increasedList = laptopList.map((item) => {
  if (item.brand === "Dell") {
    let increasedPrice = item.price * 1.1;

    return {
      ...item,
      price: increasedPrice,
    };
  }

  return {
    ...item,
  };
});

console.log("Question 2");
console.log(increasedList);

// ! 3. find all lenovo laptops

const lenovoList = laptopList.filter((item) => item.brand === "Lenovo");
console.log("Question 3");
console.log(lenovoList);

// ! 4. update name of "Idea Pad" to "Idea Pad Ultra"

const updatedList = laptopList.map((item) => {
  if (item.name === "Idea Pad") {
    let updatedName = "Idea Pad Ultra ";

    return {
      ...item,
      name: updatedName,
    };
  }

  return {
    ...item,
  };
});

console.log("Question 4");
console.log(updatedList);

// ! 5. get all laptops whose price is below $1050

const belowPriceList = laptopList.filter((item) => item.price < 1050);
console.log("Question 5");
console.log(belowPriceList);

// ! 6. find "Zenbook 15" laptop details

const zenDetails = laptopList.find((item) => item.name === "Zenbook 15");

console.log("Question 5");
console.log(zenDetails);

// ! 7. find sum of prices of all laptops

const total = laptopList.reduce((sum, item) => {
  sum = sum + item.price;

  return sum;
}, 0);

console.log("Question 7");
console.log(`Total sum of all laptops is ${total}`);
