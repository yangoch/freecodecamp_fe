function bouncer(arr) {
  return arr.filter(item => item ? item : null);
}

console.log(bouncer([7, "ate", "", false, 9]));