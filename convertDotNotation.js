function convertDotNotationToObject(obj) {
  const result = {};

  for (const key in obj) {
    const value = obj[key];
    const keys = key.split(".");

    let nestedObj = result;
    for (let i = 0; i < keys.length; i++) {
      const nestedKey = keys[i];
      if (i === keys.length - 1) {
        nestedObj[nestedKey] = value;
      } else {
        console.log(nestedObj[nestedKey]);

        nestedObj[nestedKey] = nestedObj[nestedKey] || {};
        nestedObj = nestedObj[nestedKey];
      }
    }
  }

  return result;
}

// Example usage:
const obj = { "a.b.c": "someValue" };
const convertedObj = convertDotNotationToObject(obj);
console.log(convertedObj); // Output: { a: { b: { c: 'someValue' } } }
