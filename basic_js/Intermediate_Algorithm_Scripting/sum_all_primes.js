// function isPrime(num) {
//   if (num < 2) return false;
//   for (var i = 2; i < num; i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }

// function sumPrimes(number) {
//   let arr = [];
//   for (var i = 2; i <= number; i++) {
//     if (isPrime(i)) {
//       arr.push(i);
//     }
//   }
//   return arr.reduce((acc, cv) => acc + cv, 0);
// }

// Solutions
// function sumPrimes(num) {
//   // Helper function to check primality
//   function isPrime(num) {
//     const sqrt = Math.sqrt(num);
//     // console.log(sqrt);
//     for (let i = 2; i <= sqrt; i++) {
//       console.log(num, i, sqrt);
//       if (num % i === 0)
//         return false;
//     }
//     return true;
//   }

//   // Check all numbers for primality
//   let sum = 0;
//   for (let i = 2; i <= num; i++) {
//     if (isPrime(i))
//       sum += i;
//   }
//   return sum;
// }
// function sumPrimes(num) {
//   // Check all numbers for primality
//   let primes = [];
//   for (let i = 2; i <= num; i++) {
//     if (primes.every((prime) => i % prime !== 0))
//       primes.push(i);
//   }
//   return primes.reduce((sum, prime) => sum + prime, 0);
// }

console.log();
console.log(sumPrimes(10));
