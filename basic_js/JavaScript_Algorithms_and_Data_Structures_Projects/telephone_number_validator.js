function telephoneCheck(str) {
  const lengthOfNumber = str.match(/[0-9]/g).length;

  if (lengthOfNumber === 11 && Number(str.charAt(0)) === 1) {
    let brackets = {};
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (/[(|)|?]/.test(char)) {
        brackets[char] = (brackets[char] || 0) + 1;
      }
    }
    return brackets["("] === brackets[")"] && !brackets["?"] ? true : false;
  } else if (
    lengthOfNumber === 10 &&
    !/^[(|)|?]/.test(str[str.length - 1]) &&
    /\d{4}/.test(str.slice(-4))
  ) {
    let brackets = {};
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (/[(|)|?]/.test(char)) {
        brackets[char] = (brackets[char] || 0) + 1;
      }
    }
    return brackets["("] === brackets[")"] && !brackets["?"] ? true : false;
  }

  return false;
}

// Best Practices
// const re = /^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;
// function telephoneCheck(str) {
//   return re.test(str);
// }

// function telephoneCheck(str) {
//   return /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/.test(str);
// }

console.log(telephoneCheck("555-555-5555"), true);
console.log(telephoneCheck("1 555-555-5555"), true);
console.log(telephoneCheck("1 (555) 555-5555"), true);
console.log(telephoneCheck("5555555555"), true);
console.log(telephoneCheck("555-555-5555"), true);
console.log(telephoneCheck("(555)555-5555"), true);
console.log(telephoneCheck("1(555)555-5555"), true);
console.log(telephoneCheck("555-5555"), false);
console.log(telephoneCheck("5555555"), false);
console.log(telephoneCheck("1 555)555-5555"), false);
console.log(telephoneCheck("1 555 555 5555"), true);
console.log(telephoneCheck("1 456 789 4444"), true);
console.log(telephoneCheck("123**&!!asdf#"), false);
console.log(telephoneCheck("55555555"), false);
console.log(telephoneCheck("(6054756961)"), false);
console.log(telephoneCheck("2 (757) 622-7382"), false);
console.log(telephoneCheck("0 (757) 622-7382"), false);
console.log(telephoneCheck("-1 (757) 622-7382"), false);
console.log(telephoneCheck("2 757 622-7382"), false);
console.log(telephoneCheck("10 (757) 622-7382"), false);
console.log(telephoneCheck("27576227382"), false);
console.log(telephoneCheck("(275)76227382"), false);
console.log(telephoneCheck("2(757)6227382"), false);
console.log(telephoneCheck("2(757)622-7382"), false);
console.log(telephoneCheck("555)-555-5555"), false);
console.log(telephoneCheck("(555-555-5555"), false);
console.log(telephoneCheck("(555)5(55?)-5555"), false);
console.log(telephoneCheck("55 55-55-555-5"), false);
console.log(telephoneCheck("11 555-555-5555"), false);
