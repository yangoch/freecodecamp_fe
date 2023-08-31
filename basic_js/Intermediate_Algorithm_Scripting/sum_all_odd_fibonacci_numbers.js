// function sumFibs(num) {
//   if(num <= 1) {
//     return num;
//   } else {
//     return sumFibs(num - 1) + sumFibs(num - 2)
//   }
// }
// const fib = n => {
//   let prev = 0, next = 1;
//   for(let i = 0; i < n; i++){
//     next = prev + next;
//     prev = next - prev;
//   }
//   return prev;
// }

const sumFibs = (num) => {
  let prev = 0;
  let next = 1;
  let arr = [];

  for (let i = 0; i < num; i++) {
    let temp = next;
    next = prev + next
    prev = temp;
    
    if(prev % 2 && prev <= num) {
      arr.push(prev);
    }

  }

  return arr.reduce((acc, cv) => acc + cv, 0);
}
// Solutions
// function sumFibs(num) {
//   let prevNumber = 0;
//   let currNumber = 1;
//   let result = 0;
//   while (currNumber <= num) {
//     if (currNumber % 2 !== 0) {
//       result += currNumber;
//     }
//     currNumber += prevNumber;
//     prevNumber = currNumber - prevNumber;
//   }

//   return result;
// }
// console.log(sumFibs(15));
console.log(sumFibs(1000));
console.log(sumFibs(4000000));