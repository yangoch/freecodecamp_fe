function chunkArrayInGroups(arr, size) {
  // let count = 0;
  let array = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % size === 0) {
      // count += size;
      // array.push(arr.slice(i, count));
      array.push(arr.slice(i, i + size));
    }
  }

  return array;
}

// solutions
// function chunkArrayInGroups(arr, size) {
//   const newArr = [];
//   while (arr.length > 0) {
//     newArr.push(arr.splice(0, size));
//   }
//   return newArr;
// }
// function chunkArrayInGroups(arr, size) {
//   if (arr.length <= size) {
//     return [arr];
//   } else {
//     return [arr.slice(0, size)].concat(
//       chunkArrayInGroups(arr.slice(size), size)
//     );
//   }
// }

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); // [["a", "b"], ["c", "d"]].
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)); // [[0, 1, 2, 3], [4, 5]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)); // [[0, 1, 2, 3], [4, 5, 6, 7], [8]]
