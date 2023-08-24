function myReplace(str, before, after) {
  return str
    .split(" ")
    .map((word) => {
      if (word === before) {
        return /[A-Z]/.test(before[0])
          ? `${after[0].toUpperCase()}${after.slice(1)}`
          : `${after[0].toLowerCase()}${after.slice(1)}`;
      } else {
        return word;
      }
    })
    .join(" ");
}

console.log(
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
);
// A quick brown fox leaped over the lazy dog
console.log(
  myReplace("Let us get back to more Coding", "Coding", "algorithms")
);
// Let us get back to more Algorithms
