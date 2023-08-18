function titleCase(str) {
  const stringToLowerCase = str.toLowerCase();
  const arrayOfString = stringToLowerCase.split(" ");

  return arrayOfString
    .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
    .join(" ");
}

// Solution
// function titleCase(str) {
//   return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
// }

console.log(titleCase("I'm a little tea pot"));
