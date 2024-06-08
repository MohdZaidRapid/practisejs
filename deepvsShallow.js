const original = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
};

// shallow copy
// const obj1 = { ...original };

// obj1.name = "zaid";
// obj1.age = 3000;
// obj1.address.country = "delhi";
// console.log(obj1);
// console.log(original);

///////////////////////////////////////////////////////////////
// deep copy

const obj2 = JSON.parse(JSON.stringify(original));

// const obj = obj2.address.country;
obj2.address.country = "free";

console.log(obj2);
console.log(original);
console.log(original);
console.log(original);
console.log(original);
console.log(original);
console.log(original);
console.log(original);
console.log(original);
console.log(original);
console.log(original);
console.log(original);

console.log("string");
