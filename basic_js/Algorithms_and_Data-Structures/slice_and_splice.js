function frankenSplice(arr1, arr2, n) {
  let clonedArray2 = [...arr2];
  const firstPartOfSecondArray = clonedArray2.splice(0, n);
  const secondPartOfSecondArray = clonedArray2.splice(clonedArray2.length - n);

  return [...firstPartOfSecondArray, ...arr1, ...secondPartOfSecondArray];
}

// solutions
// function frankenSplice(arr1, arr2, n) {
//   // It's alive. It's alive!
//   let localArray = arr2.slice();
//   for (let i = 0; i < arr1.length; i++) {
//     localArray.splice(n, 0, arr1[i]);
//     n++;
//   }
//   return localArray;
// }

// function frankenSplice(arr1, arr2, n) {
//   // It's alive. It's alive!
//   let localArr = arr2.slice();
//   localArr.splice(n, 0, ...arr1);
//   return localArr;
// }

// function frankenSplice(arr1, arr2, n) {
//   return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
// }


console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)); 
// ["head", "shoulders", "claw", "tentacle", "knees", "toes"]
