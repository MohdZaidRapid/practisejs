let str = "mohd zaid";

// ["mohd", "zaid"];

function capitalFirstLetter(str) {
  let arr = str.split(" ");
  let newWord = arr.map((element) => {
    return element.charAt(0).toUpperCase() + element.slice(1);
  });
  
  return newWord.join(" ");
}

console.log(capitalFirstLetter(str));
