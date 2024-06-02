const obj = { "1.2.3": "hello" };

function dotToObject(obj) {
  const result = {};

  for (const key in obj) {
    let value = obj[key];
    let keys = key.split(".");

    let nestedObject = result;
    for (let i = 0; i < keys.length; i++) {
      const nestedKey = keys[i];

      if (i === keys.length - 1) {
        nestedObject[nestedKey] = value;
      } else {
        nestedObject[nestedKey] = nestedObject[nestedKey] || {};
        nestedObject = nestedObject[nestedKey];
      }
    }
  }
  console.log(result);
  return result;
}

dotToObject(obj);

console.log("hello");
