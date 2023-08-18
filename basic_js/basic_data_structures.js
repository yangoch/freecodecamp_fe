// function filteredArray(arr, elem) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let array = arr[i];

//     if (array.indexOf(elem) === -1) {
//       newArr.push(array);
//     }

//     // if (!array.includes(elem)) {
//     //   newArr.push(array);
//     // }
//   }
//   return newArr;
// }

// console.log(
//   filteredArray(
//     [
//       [3, 2, 3],
//       [1, 6, 3],
//       [3, 13, 26],
//       [19, 3, 9],
//     ],
//     3
//   )
// );

// console.log(
//   filteredArray(
//     [
//       [10, 8, 3],
//       [14, 6, 23],
//       [3, 18, 6],
//     ],
//     18
//   )
// );

// ===>

// Перевірка наявності властивості в об’єкті

// users.hasOwnProperty('Alan');
// 'Alan' in users;

// Ітерація через ключі об’єкта за допомогою інструкції for...in

// const refrigerator = {
//   milk: 1,
//   eggs: 12,
// };

// for (const food in refrigerator) {
//   console.log(food, refrigerator[food]);
// }

// const users = {
//   Alan: {
//     online: false,
//   },
//   Jeff: {
//     online: true,
//   },
//   Sarah: {
//     online: false,
//   },
// };

// function countOnline(allUsers) {
//   // Змініть код лише під цим рядком
//   let count = 0;
//   for (const name in allUsers) {
//     if (allUsers[name].online) count++;
//   }
//   return count;
//   // Змініть код лише над цим рядком
// }

// console.log(countOnline(users));



// Створення масиву зі всіх ключів об’єкта за допомогою Object.keys()

// let users = {
//     Alan: {
//       age: 27,
//       online: false
//     },
//     Jeff: {
//       age: 32,
//       online: true
//     },
//     Sarah: {
//       age: 48,
//       online: false
//     },
//     Ryan: {
//       age: 19,
//       online: true
//     }
//   };
  
//   function getArrayOfUsers(obj) {
//     // Змініть код лише під цим рядком
//     return Object.keys(obj);
//     // Змініть код лише над цим рядком
//   }
  
//   console.log(getArrayOfUsers(users));
