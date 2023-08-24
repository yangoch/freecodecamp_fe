function uniteUnique(arr) {
  const args = [...arguments];
  const joinedArrays = args.flat();
  let sortedArray = [];

  for (let i = 0; i < joinedArrays.length; i++) {
    const element = joinedArrays[i];

    if (!sortedArray.some((el) => el === element)) {
      sortedArray.push(element);
    }
  }

  return sortedArray;

  // The second solution
  // return [...new Set([...arguments].flat())];
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]), [1, 3, 2, 5, 4]);
console.log(
  uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]),
  [1, 2, 3, 5, 4, 6, 7, 8]
);
