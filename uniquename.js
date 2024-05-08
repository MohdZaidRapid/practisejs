const array = [{ name: "zaid" }, { name: "anas" }, { name: "anas" }];
const array2 = [
  { name: "zaid", age: "23" },
  { name: "anas", age: "24" },
  { name: "anas", age: "23" },
  { name: "rayan", age: "21" },
  { name: "rayan", age: "23" },
];

function removeDuplicates(array) {
  const uniqueObjects = [];
  const seenNames = {};

  for (const obj of array) {
    if (!seenNames[obj.name]) {
      seenNames[obj.name] = true;
      uniqueObjects.push(obj);
    }
  }

  return uniqueObjects;
}

function uniqueobj(array, value) {
  const uniqueObj = [];
  const isUnique = {};

  for (const item of array) {
    if (!isUnique[item[value]]) {
      isUnique[item[value]] = true;
      uniqueObj.push(item);
    }
  }

  console.log(uniqueObj);
  return uniqueObj;
}

// Example usage:
const array3 = [
  { id: 1, value: "a" },
  { id: 2, value: "b" },
  { id: 3, value: "a" },
];
const result = uniqueobj(array3, "value");
// console.log(result);

// const uniqueArray = removeDuplicates(array);
// const uniqueObj = uniqueobj(array3, "value");

// console.log(uniqueArray);
