function truthCheck(collection, pre) {
  return collection.every((obj) => obj[pre]);
}

// Solutions
// function truthCheck(collection, pre) {
//   // Create a counter to check how many are true.
//   let counter = 0;
//   // Check for each object
//   for (let c in collection) {
//     // If it is has property and value is truthy
//     if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
//       counter++;
//     }
//   }
//   // Outside the loop, check to see if we got true for all of them and return true or false
//   return counter == collection.length;
// }
// function truthCheck(collection, pre) {
//   return collection.every(function (element) {
//     return element.hasOwnProperty(pre) && Boolean(element[pre]);
//   });
// }

console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "isBot"
  ),
  false
);

console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "name"
  ),
  true
);
