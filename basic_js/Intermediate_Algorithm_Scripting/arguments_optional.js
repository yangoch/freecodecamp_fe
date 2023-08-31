function addTogether(x) {
  const args = [...arguments];

  const checkTypeOfNumber = (num) => Number.isInteger(num);

  if (args.length === 1 && checkTypeOfNumber(args[0])) {
    return function addTogether(y) {
      if (checkTypeOfNumber(x) && checkTypeOfNumber(y)) {
        return x + y;
      }
    };
  }

  if (checkTypeOfNumber(args[0]) && checkTypeOfNumber(args[1])) {
    return args.reduce((acc, cv) => acc + cv, 0);
  }
}

// Solutions
// function addTogether() {
//   const [first, second] = arguments;

//   if (typeof (first) === "number") {
//     if (typeof (second) === "number") return first + second;
//     if (arguments.length === 1) return (second) => addTogether(first, second);
//   }
// }
// function addTogether() {
//   const [first, second] = arguments;

//   function addSecond(second) {
//     if (typeof (second) === "number") return first + second;
//   }

//   if (typeof (first) === "number") {
//     if (arguments.length === 1) return addSecond;
//     if (arguments.length === 2) return addSecond(second);
//   }
// }

console.log(addTogether(2, 3), 5);
console.log(addTogether("2", 3), undefined);
console.log(addTogether(5)(7), 12);
