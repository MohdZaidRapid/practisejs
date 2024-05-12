let person1 = {
  name: "Adam AHS",
  age: 25,

  showDetails: function () {
    console.log(`${this.name} is  ${this.age} years old`);
  },
};

let person2 = {
  name: "Steve",
  age: 20,
  showDetails: function () {
    console.log(`${this.name} is  ${this.age} years old`);
  },
};

// person1.showDetails();
// person2.showDetails();
person1.showDetails.call(person2)