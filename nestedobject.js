const obj = { "a.b.c": "hello" };

function nestedObject(obj) {
  let result = {};

  for (const key in obj) {
    const value = obj[key];
    const keys = key.split(".");
    let nestedObj = result;
    for (let i = 0; i < keys.length; i++) {
      const nestedKey = keys[i];
      if (i === keys.length - 1) {
        nestedObj[nestedKey] = value;
      } else {
        nestedObj[nestedKey] = nestedObj[nestedKey] || {};
        nestedObj = nestedObj[nestedKey];
      }
    }
  }
  console.log(result);
  return result;
}

nestedObject(obj);
