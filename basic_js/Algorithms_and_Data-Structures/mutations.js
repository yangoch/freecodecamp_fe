function mutation(arr) {
  const reg = new RegExp(`[${arr[0]}]`, "ig");
  return arr[1].match(reg).join("").length === arr[1].length;
}

// solutions
// function mutation(arr) {
//   return arr[1]
//     .toLowerCase()
//     .split("")
//     .every(function (letter) {
//       return arr[0].toLowerCase().indexOf(letter) !== -1;
//     });
// }

// function mutation([elem1, elem2]) {
//   const regex = new RegExp(`[^${elem1}]`, "i");
//   return !regex.test(elem2);
// }

console.log(mutation(["hello", "hey"]));
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(mutation(["Mary", "Aarmy"]));
