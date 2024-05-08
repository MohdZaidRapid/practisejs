const array = [{ name: "zaid" }, { name: "anas" }, { name: "anas" }];

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

const uniqueArray = removeDuplicates(array);
console.log(uniqueArray);
