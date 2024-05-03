let str = "Welcome to this js guide";

// ["zaid", "bad", "sad", "kad"];

// function reverseLine(str) {
//   let arr = str.split("");
//   let str1 = "";
//   for (let i = arr.length - 1; i >= 0; i--) {
//     str1 += arr[i];
//   }
//   arr = str1;

//   return arr;
// }

// console.log(reverseLine(str));

function reverseLine(str) {
  let words = str.split(" "); // Split the string into an array of words
  let reversedWords = [];

  for (let word of words) {
    let reversedWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i]; // Reverse each word character by character
    }
    reversedWords.push(reversedWord); // Push the reversed word to the array
  }
  console.log(reversedWords);
  return reversedWords.join(" "); // Join the reversed words back into a single string
}

reverseLine(str);
