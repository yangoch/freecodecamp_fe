function getIndexToIns(arr, num) {
  const sortedArray = [...arr, num].sort((a, b) => a - b);
  return sortedArray.indexOf(num);
}

// function getIndexToIns(arr, num) {
//   return arr.filter((val) => num > val).length;
// }

console.log(getIndexToIns([40, 60], 50)); // 1
console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); // 3
console.log(getIndexToIns([2, 5, 10], 15)); // 3
console.log(getIndexToIns([], 1)); // 0
