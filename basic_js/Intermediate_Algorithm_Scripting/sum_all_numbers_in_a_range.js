function sumAll(arr) {
  let sum = 0;

  if (arr[0] < arr[1]) {
    for (let i = arr[0]; i <= arr[1]; i++) {
      sum += i;
    }
  } else {
    for (let i = arr[1]; i <= arr[0]; i++) {
      sum += i;
    }
  }

  return sum;
}
// Best Practices
// function sumAll(arr) {
//   let sumBetween = 0;
//   for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
//     sumBetween += i;
//   }
//   return sumBetween;
// }
// function sumAll(arr) {
//   const [first, last] = [...arr].sort((a, b) => a - b);
//   return first !== last
//     ? first + sumAll([first + 1, last])
//     : first;
// }
// function sumAll(arr) {
//   let max = Math.max(arr[0], arr[1]);
//   let min = Math.min(arr[0], arr[1]);
//   let sumBetween = 0;
//   for (let i = min; i <= max; i++) {
//     sumBetween += i;
//   }
//   return sumBetween;
// }

console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));
