function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (func(element)) {
      return element;
    }
  }
}

// function findElement(arr, func) {
//   return arr.find(func);
// }

console.log(
  findElement([1, 7, 3, 4], (num) => (num % 2 === 0 ? num : undefined))
);
