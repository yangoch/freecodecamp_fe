function fearNotLetter(str) {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x).toLocaleLowerCase());

  const indexRange = [
    alphabet.indexOf(str[0]),
    alphabet.indexOf(str[str.length - 1]),
  ];
  const lostLetter = alphabet
    .filter(
      (char, i, arr) =>
        i >= indexRange[0] && i <= indexRange[1] && !str.includes(char)
    )
    .join("");

  return lostLetter || undefined;
}

// Solutions
// function fearNotLetter(str) {
//   for (let i = 1; i < str.length; ++i) {
//     if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
//       return String.fromCharCode(str.charCodeAt(i - 1) + 1);
//     }
//   }
// }
// function fearNotLetter(str) {
//   let currCharCode = str.charCodeAt(0);
//   let missing = undefined;

//   str
//     .split("")
//     .forEach(letter => {
//       if (letter.charCodeAt(0) === currCharCode) {
//         currCharCode++;
//       } else {
//         missing = String.fromCharCode(currCharCode);
//       }
//     });

//   return missing;
// }
// function fearNotLetter(str) {
//   for (let i = 0; i < str.length; i++) {
//     /* code of current character */
//     const charCode = str.charCodeAt(i);

//     /* if code of current character is not equal to first character + no of iteration
//         then a letter was skipped */
//     if (charCode !== str.charCodeAt(0) + i) {
//       /* if current character skipped past a character find previous character and return */
//       return String.fromCharCode(charCode - 1);
//     }
//   }
//   return undefined;
// }

console.log(fearNotLetter("abce")); // d
console.log(fearNotLetter("bcdf")); // e
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); // undefined
