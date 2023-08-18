function repeatStringNumTimes(str, num) {
  if (num <= 0) return "";

  let repeatedString = "";

  for (let i = 0; i < num; i++) {
    repeatedString += str;
  }

  return repeatedString;
}

console.log(repeatStringNumTimes("abc", 3));
