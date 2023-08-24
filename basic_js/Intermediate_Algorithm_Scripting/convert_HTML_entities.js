function convertHTML(str) {
  const objOfCharacters = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };

  return str
    .split("")
    .map((element) => {
      return /[&<>"']/g.test(element) ? objOfCharacters[element] : element;
    })
    .join("");
}

// Solutions
// function convertHTML(str) {
//   // Use Object Lookup to declare as many HTML entities as needed.
//   const htmlEntities = {
//     "&": "&amp;",
//     "<": "&lt;",
//     ">": "&gt;",
//     '"': "&quot;",
//     "'": "&apos;",
//   };
//   // Using a regex, replace characters with it's corresponding html entity
//   return str.replace(/([&<>\"'])/g, (match) => htmlEntities[match]);
// }
// function convertHTML(str) {
//   // Use Object Lookup to declare as many HTML entities as needed.
//   const htmlEntities = {
//     "&": "&amp;",
//     "<": "&lt;",
//     ">": "&gt;",
//     '"': "&quot;",
//     "'": "&apos;",
//   };
//   //Use map function to return a filtered str with all entities changed automatically.
//   return str
//     .split("")
//     .map((entity) => htmlEntities[entity] || entity)
//     .join("");
// }

// function convertHTML(str) {
//   // Split by character to avoid problems.

//   var temp = str.split("");

//   // Since we are only checking for a few HTML elements, use a switch

//   for (var i = 0; i < temp.length; i++) {
//     switch (temp[i]) {
//       case "<":
//         temp[i] = "&lt;";
//         break;
//       case "&":
//         temp[i] = "&amp;";
//         break;
//       case ">":
//         temp[i] = "&gt;";
//         break;
//       case '"':
//         temp[i] = "&quot;";
//         break;
//       case "'":
//         temp[i] = "&apos;";
//         break;
//     }
//   }

//   temp = temp.join("");
//   return temp;
// }

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("Schindler's List"));
console.log(convertHTML("<>"));
