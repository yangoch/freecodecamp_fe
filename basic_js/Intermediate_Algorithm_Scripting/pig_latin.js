// function translatePigLatin(str) {
//   const vowels = /[aeiou]/gi;
//   let consonantsCount = 0;

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];

//     if (!vowels.test(char)) {
//       consonantsCount++;
//     } else {
//       break;
//     }
//   }

//   if (consonantsCount > 0) {
//     return `${str.slice(consonantsCount)}${str.slice(0, consonantsCount)}ay`;
//   } else {
//     return `${str}way`;
//   }
// }
// Solutions
// function translatePigLatin(str) {
//   let consonantRegex = /^[^aeiou]+/;
//   let myConsonants = str.match(consonantRegex);
//   return myConsonants !== null
//     ? str
//         .replace(consonantRegex, "")
//         .concat(myConsonants)
//         .concat("ay")
//     : str.concat("way");
// }
// function translatePigLatin(str) {
//   if (str.match(/^[aeiou]/)) return str + "way";

//   const consonantCluster = str.match(/^[^aeiou]+/)[0];
//   return str.substring(consonantCluster.length) + consonantCluster + "ay";
// }
// function translatePigLatin(str) {
//   return str
//     .replace(/^[aeiou]\w*/, "$&way")
//     .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
// }

console.log(translatePigLatin("glove")); // oveglay
console.log(translatePigLatin("consonant")); // onsonantcay
console.log(translatePigLatin("algorithm")); // algorithmway
console.log(translatePigLatin("schwartz")); //artzschway
console.log(translatePigLatin("rhythm")); //rhythmay
