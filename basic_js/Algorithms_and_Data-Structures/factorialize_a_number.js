function factorialize(num) {
  if (num === 0) return 1;

  let count = 1;

  for (let i = 1; i <= num; i++) {
    count *= i;
  }

  return count;
}

console.log(factorialize(5));
