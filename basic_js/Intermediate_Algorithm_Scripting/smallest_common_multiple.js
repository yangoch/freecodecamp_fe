function smallestCommons(arr) {
  const minNumber = Math.min(...arr);
  const maxNumber = Math.max(...arr);

  const range = Array(maxNumber - minNumber + 1)
    .fill(0)
    .map((_, i) => i + minNumber);

  console.log(range);

  let sum = 1;
  let rangeNumbers = [];

  for (let i = minNumber; i <= maxNumber; i++) {
    sum *= i;
    rangeNumbers.push(i);
  }

  for (let j = 1; j <= sum; j++) {
    if (rangeNumbers.every((number) => j % number === 0)) {
      return j;
    }
  }
}

// function smallestCommons(arr) {
//   const minNumber = Math.min(...arr);
//   const maxNumber = Math.max(...arr);
//   const rangeNumbers = Array(maxNumber - minNumber + 1)
//     .fill(0)
//     .map((_, i) => i + minNumber);
//   const multiplication = rangeNumbers.reduce((acc, cv) => acc * cv);

//   for (let j = 1; j <= multiplication; j++) {
//     if (rangeNumbers.every((number) => j % number === 0)) {
//       return j;
//     }
//   }
// }

console.log(smallestCommons([1, 5]), 60);
console.log(smallestCommons([2, 10]), 2520);
