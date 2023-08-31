function palindrome(str) {
  const matchedStr = str.toLowerCase().match(/[A-Za-z0-9]/g);
  return matchedStr.join("") === matchedStr.reverse().join("");
}

console.log(palindrome("0_0 (: /-\ :) 0-0"), true);
console.log(palindrome("_eye"), true);
console.log(palindrome("eye"), true);
console.log(palindrome("A man, a plan, a canal. Panama"), true);
console.log(palindrome("My age is 0, 0 si ega ym."), true);
console.log(palindrome("1 eye for of 1 eye."), false);
