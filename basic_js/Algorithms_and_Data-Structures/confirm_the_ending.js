function confirmEnding(str, target) {
  const lengthOfTarget = target.length;
  const slicedString = str.slice(str.length - lengthOfTarget);
  return slicedString === target;

  // ===>
  //   return str.slice(str.length - target.length) === target;
  // ===>
  //   let re = new RegExp(target + "$", "i");
  //   return re.test(str);
  // ===>
  //   return str.slice(-target.length) === target
  // ===>
}
console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Open sesame", "same"));

console.log(
  confirmEnding(
    "Walking on water and developing software from a specification are easy if both are frozen",
    "specification"
  )
);
