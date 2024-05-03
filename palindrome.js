let str = "saippuakivikauppias";

function palindrome(str) {
  let i = 0;
  let j = str.length - 1;
  let arr = str.split("");
  while (i < j) {
    if (arr[i] !== arr[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

let isPalindrome = palindrome(str);

if (isPalindrome) {
  console.log("palindrome");
} else {
  console.log("Not palindrome");
}
