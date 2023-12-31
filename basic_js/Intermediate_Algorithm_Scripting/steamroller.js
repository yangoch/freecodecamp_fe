function steamrollArray(arr, fixedArray = []) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (Array.isArray(element)) {
      steamrollArray(element, fixedArray);
    } else {
      fixedArray.push(element);
    }
  }

  return fixedArray;
}

// Solutions

// function steamrollArray(arr) {
//   const flattenedArray = [];
//   // Loop over array contents
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       // Recursively flatten entries that are arrays
//       //  and push into the flattenedArray
//       flattenedArray.push(...steamrollArray(arr[i]));
//     } else {
//       // Copy contents that are not arrays
//       flattenedArray.push(arr[i]);
//     }
//   }
//   return flattenedArray;
// };

// function steamrollArray(arr) {
//   const flat = [].concat(...arr);
//   return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
// }

console.log(steamrollArray([1, [2], [3, [[4]]]]));
