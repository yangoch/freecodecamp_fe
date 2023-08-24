function destroyer(arr) {
  const args = [...arguments].slice(1);
  return arr.filter(item => !args.includes(item));
}

// Best Practices
// function destroyer(arr) {
//   const valsToRemove = Object.values(arguments).slice(1);
//   const filteredArray = [];

//   for (let i = 0; i < arr.length; i++) {
//     let removeElement = false;
//     for (let j = 0; j < valsToRemove.length; j++) {
//       if (arr[i] === valsToRemove[j]) {
//         removeElement = true;
//       }
//     }
//     if (!removeElement) {
//       filteredArray.push(arr[i]);
//     }
//   }
//   return filteredArray;
// }
// function destroyer(arr, ...valsToRemove) {
//   return arr.filter(elem => !valsToRemove.includes(elem));
// }

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));