function whatIsInAName(collection, source) {
  // 1
  const sourceKeys = Object.keys(source);
  console.log(sourceKeys);
  return collection.filter((obj) => {
    return sourceKeys.every(key => obj[key] === source[key]);
  });
  // 1

  // 2
  // const sourceKeys = Object.keys(source);
  // return collection.filter((obj) => {
  //   for (let i = 0; i < sourceKeys.length; i++) {
  //     const key = sourceKeys[i];
  //     if (obj[key] !== source[key]) {
  //       return false;
  //     }
  //   }
  //   return true;
  // });
  // 2

  // 3
  // let keysOfArray = [];

  // for (let i = 0; i < collection.length; i++) {
  //   const obj = collection[i];
  //   let foundMisMatch = false;

  //   for (const sourceProp in source) {
  //     if (obj[sourceProp] !== source[sourceProp]) {
  //       foundMisMatch = true;
  //     }
  //   }
  //   console.log(obj, foundMisMatch, i);
  //   if (!foundMisMatch) {
  //     keysOfArray.push(obj);
  //   }
  // }
  // return keysOfArray;
  // 3
}

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
  )
);
// [{ first: "Tybalt", last: "Capulet" }]

console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, bat: 2 }
  )
);
// [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]

console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, cookie: 2 }
  )
);
// [{ "apple": 1, "bat": 2, "cookie": 2 }].
