function spinalCase(str) {
  let stringFirstLetterToLowerCase = `${str[0].toLowerCase()}${str.slice(1)}`;
  let spinalString = "";

  for (let i = 0; i < stringFirstLetterToLowerCase.length; i++) {
    const char = stringFirstLetterToLowerCase[i];

    if (/[A-Z]/.test(char)) {
      spinalString += ` ${char.toLowerCase()}`;
    } else if (/_/.test(char)) {
      spinalString += "";
    } else {
      spinalString += char;
    }
  }
  return spinalString
    .split(" ")
    .filter((item) => item !== "")
    .join("-");
}

// Solutions
// function spinalCase(str) {
//   // Create a variable for the white space and underscores.
//   var regex = /\s+|_+/g;

//   // Replace low-upper case to low-space-uppercase
//   str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

//   // Replace space and underscore with -
//   return str.replace(regex, "-").toLowerCase();
// }

// function spinalCase(str) {
//   // Replace low-upper case to low-space-uppercase
//   str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
//   // Split on whitespace and underscores and join with dash
//   return str
//     .toLowerCase()
//     .split(/(?:_| )+/)
//     .join("-");
// }

// function spinalCase(str) {
//   // "It's such a fine line between stupid, and clever."
//   // --David St. Hubbins

//   return str
//     .split(/\s|_|(?=[A-Z])/)
//     .join("-")
//     .toLowerCase();
// }


console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("AllThe-small Things"));
