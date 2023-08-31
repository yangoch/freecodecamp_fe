// function dropElements(arr, func) {
//   let beforeTrueCondition = [...arr];
//   let afterTrueCondition = [];
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];

//     if (!func(element)) {
//       count++;
//       beforeTrueCondition.shift(element);
//     }
//   }

//   for (let j = 0; j < arr.length; j++) {
//     const element = arr[j];

//     if (func(element) && j < count) {
//       afterTrueCondition.push(element);
//     }
//   }

//   return [...afterTrueCondition, ...beforeTrueCondition];
// }
// Solutions
// function dropElements(arr, func) {
//   while (arr.length > 0 && !func(arr[0])) {
//     arr.shift();
//   }
//   return arr;
// }

// function dropElements(arr, func) {
//   let sliceIndex = arr.findIndex(func);
//   console.log(sliceIndex);
//   return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length);
// }
// function dropElements(arr, func) {
//   // drop them elements.
//   let originalLen = arr.length;
//   for (let i = 0; i < originalLen; i++) {
//     if (func(arr[0])) {
//       break;
//     } else {
//       arr.shift();
//     }
//   }
//   return arr;
// }
// function dropElements(arr, func) {
//   return arr.length > 0 && !func(arr[0])
//     ? (dropElements(arr.slice(1), func))
//     : arr;
// }

console.log(
  dropElements([1, 2, 3], function (n) {
    return n > 0;
  }),
  [1, 2, 3]
);
console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n > 5;
  }),
  []
);
console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n >= 3;
  }),
  [3, 4]
);
console.log(
  dropElements([1, 2, 3, 7, 4], function (n) {
    return n > 3;
  }),
  [7, 4]
);
console.log(
  dropElements([1, 2, 3, 9, 2], function (n) {
    return n > 2;
  }),
  [3, 9, 2]
);
console.log(
  dropElements([0, 1, 0, 1], function (n) {
    return n === 1;
  }),
  [1, 0, 1]
);
