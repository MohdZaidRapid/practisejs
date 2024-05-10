const original = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
};

// shallow copy
const obj1 = { ...original };

obj1.name = "zaid";
obj1.address.country = "delhi";
console.log(obj1);

///////////////////////////////////////////////////////////////
// deep copy


