function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map(element => element.length));
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog", "jumped"));
