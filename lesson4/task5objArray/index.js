// function getSpecialNumbers(arr) {
//   const newArray = [];
//   arr.filter(number => number % 3 === 0).map(number => newArray.push(number));
//   return newArray;
// }
// console.log(getSpecialNumbers([2, 3, 4, 6, 9]));

// function sortDesc(arr) {
//   const newArray = arr.slice();
//   newArray.sort((a, b) => b - a);
//   return newArray;
// }
// const arr2 = [5, 2, 3, 1, 4, 6, 9];
// console.log(sortDesc(arr2));
// console.log(arr2);

// const flatArray = arr => {
//   // put your code here
//   const newArray = arr.flat(Infinity).sort((a, b) => a - b);
//   return newArray;
// };
// const numbers = [1, 2, 3, [4, 5, 6, 7, [8, 9]]];
// console.log(flatArray(numbers));

// const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => {
//   // put your code here
//   const newArray = allStudentsList
//     .filter(name => !studentsForRetake.includes(name))
//     .map(name => `Good job, ${name}`);
//   return newArray;
// };

// const allStudTest1 = ['Den', 'John', 'Ann', 'Mike'];
// const retakeStudTest1 = ['John', 'Mike'];
// getMessagesForBestStudents(allStudTest1, retakeStudTest1); // ===> ['Good job, Den', 'Good job, Ann']
// console.log(getMessagesForBestStudents(allStudTest1, retakeStudTest1));

// function cloneArr(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   const newArray = [...arr];
//   return newArray;
// }
// const numbers = [5, 2, 3, 1, 4, 6, 9];
// console.log(cloneArr(numbers));
// console.log(numbers);

// const withdraw = (clients, balances, client, amount) => {
//   // put your code here
//   const indexOfClient = clients.indexOf(client);
//   if (balances[indexOfClient] > amount) {
//     return balances[indexOfClient] - amount;
//   }
//   return -1;
// };

// // examples
// withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50); // ==> 37 (balances array should be [1400, 37, -6])
// withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10); // ==> -1 (balances array should be [1400, 87, -6])
// console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10));

// function sum(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   const number = arr.reduce((acc, elem) => {
//     return acc + elem;
//   }, 0);
//   return number;
// }
// console.log(sum([5, 6, 4]));

// function filterNames(arr, text) {
//   const newArray = arr.filter(value => {
//     return value.includes(text) && value.length > 5;
//   });
//   return newArray;
// }
// console.log(filterNames(['sasasa', 'dasasasa', 'kakasas', 'sas', 'sas'], 'sas'));

// function reverseArray(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   const reversArray = arr.slice();

//   return reversArray.reverse();
// }
// const original = [1, 2, 3];
// console.log(reverseArray(original));
// console.log(original);

// OBJECTS

// const transformToObject = arr => {
//   // put your code here
//   const obj = {};
//   arr.forEach(elem => {
//     obj[elem] = elem;
//   });
//   return obj;
// };
// const numbers = [1, 2, 3, 4, 5];
// console.log(transformToObject(numbers));

// const concatProps = obj => {
//   // put your code here
//   const array = Object.keys(obj);
//   return array;
// };
// const object = { key1: 1, key2: 2, key3: 3 };
// console.log(concatProps(object));

// const getAdults = obj => {
//   // put your code here
//   const newObj = {};
//   for (const key in obj) {
//     if (obj[key] >= 18) {
//       newObj[key] = obj[key];
//     }
//   }
//   return newObj;
// };
// console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }));
// // examples
// getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }); // ==> { 'John Doe': 19, Bob: 18 }
// getAdults({ Ann: 56, Andrey: 7 }); // ==> { Ann: 56 }

// function getKeys(obj) {
//   // put you code here
//   const output = Object.keys(obj).map(value => console.log(value));
// }
// getKeys({ name: 'Denis', city: 'Warsaw', englishLevel: 'A1' });
// console.log(getKeys({ mark: 17, ann: 20, pit: 30 }));
// console.log(getKeys({}));

// ПЕРВЫЙ ВАРИАНТ РОБОЧИЙ?

// const getCustomersList = obj => {
//   // put your code here
//   const newObj = Object.assign({}, obj);
//   console.log(newObj);
//   const arrayKeys = Object.keys(newObj);
//   console.log(arrayKeys);
//   const arrayValues = Object.values(newObj);
//   const arrayNewKey = arrayValues
//     .map(value => {
//       const objOfArray = value;
//       const index = arrayValues.indexOf(value);
//       objOfArray.id = arrayKeys[index];
//       return value;
//     })
//     .sort((a, b) => a.age - b.age);
//   return arrayNewKey;
// };

// ВТОРОЙ ВАРИАНТ РОБОЧИЙ?

// const getCustomersList = obj => {
//   // put your code here
//   const newObj = structuredClone(obj);
//   const arrayKeys = Object.keys(newObj);
//   const arrayValues = Object.values(newObj);
//   const arrayNewKey = arrayValues
//     .map(value => {
//       const objOfArray = value;
//       const index = arrayValues.indexOf(value);
//       objOfArray.id = arrayKeys[index];
//       return value;
//     })
//     .sort((a, b) => a.age - b.age);
//   return arrayNewKey;
// };

// ТРЕТИЙ ВАРИАНТ УБРАЛ ПЕРЕМЕННУЮ ДЛЯ ЗНАЧЕНИЯ ИНДЕКС В МАП

// const getCustomersList = obj => {
//   // put your code here
//   const newObj = structuredClone(obj);
//   const arrayKeys = Object.keys(newObj);
//   const arrayValues = Object.values(newObj);
//   const arrayNewKey = arrayValues
//     .map((value, index) => {
//       const objOfArray = value;
//       objOfArray.id = arrayKeys[index];
//       return value;
//     })
//     .sort((a, b) => a.age - b.age);
//   return arrayNewKey;
// };

// ЧЕТВЕРТЫЙ ВАРИАНТ - УБРАЛ КОПИЮ ОБЪЕКТА structuredClone И ПРОСТО ДОБАВИЛ ОПЕРАТОР СПРЕД В ПЕРЕМЕННОЙ objOfArray - таким образом вложенные объекты велью в исходном массиве не меняются

// const getCustomersList = obj => {
//   // put your code here
//   const arrayKeys = Object.keys(obj);
//   const arrayValues = Object.values(obj);
//   const arrayNewKey = arrayValues
//     .map((value, index) => {
//       const objOfArray = { ...value };
//       objOfArray.id = arrayKeys[index];
//       return objOfArray;
//     })
//     .sort((a, b) => a.age - b.age);
//   return arrayNewKey;
// };

// const customers = {
//   'cus-id-1': { name: 'Jack', age: 54 },
//   'cus-id-2': { name: 'Tony', age: 50 },
//   'cus-id-3': { name: 'Ann', age: 14 },
// };
// console.log(getCustomersList(customers));
// console.log(customers);
// console.log(getCustomersList({}));

// ОБЪЕКТ В МАССИВ ЖИТЕЛЕЙ

// const getPeople = obj => {
//   // put your code here
//   const arrayRooms = Object.values(obj)
//     .flat(Infinity)
//     .reduce((acc, el, ind) => {
//       acc[ind] = el.name;
//       return acc;
//     }, []);
//   return arrayRooms;
// };

// Посчитать баланс по всем транзакциям

// const getTotalRevenue = transactions => {
//   // put your code here
//   let sum = 0;
//   transactions.map(elem => {
//     sum += elem.amount;
//     return sum;
//   });
//   return sum;
// };

// Собрать объект

// function buildObject(keysList, valuesList) {
//   // put you code here
//   const obj = keysList.reduce((acc, elem) => {
//     const keyOfKeyslist = keysList.indexOf(elem);
//     acc[elem] = valuesList[keyOfKeyslist];
//     return acc;
//   }, {});
//   return obj;
// }

// СРАВНИТЬ ДВА ОБЪЕКТА

// function compareObjects(firstObj, secondObj) {
//   // put your code here
//   const firstValue = Object.entries(firstObj).sort();
//   const secondValue = Object.entries(secondObj).sort();
//   if (JSON.stringify(firstValue) === JSON.stringify(secondValue)) {
//     return true;
//   }
//   return false;
// }

// // examples
// const obj1 = {
//   name: 'Tom',
//   age: 17,
// };

// const obj2 = {
//   name: 'Bob',
//   age: 17,
// };

// const obj3 = {
//   name: 'Bob',
//   age: 17,
//   student: false,
// };

// const obj4 = {
//   name: 'Tom',
//   age: 17,
// };

// const obj5 = {
//   age: 17,
//   name: 'Tom',
// };
// console.log(compareObjects(obj1, obj2));
// console.log(compareObjects(obj2, obj3));
// console.log(compareObjects(obj1, obj4));
// console.log(compareObjects(obj4, obj5));
// compareObjects(obj1, obj2); // ==> false
// compareObjects(obj2, obj3); // ==> false
// compareObjects(obj1, obj4); // ==> true
// compareObjects(obj4, obj5); // ==> true

// NUMBERS NUMBERS NUMBERS
// isFinite, isNaN, Number.isFinite, Number,isNaN

// function getFiniteNumbers(arr) {
//   const newArr = arr.filter(number => Number.isFinite(number));
//   return newArr;
// }
// function getFiniteNumbersV2(arr) {
//   const newArr = arr.filter(number => isFinite(number));
//   return newArr;
// }
// function getNaN(arr) {
//   const newArr = arr.filter(number => Number.isNaN(number));
//   return newArr;
// }

// function getNaNV2(arr) {
//   const newArr = arr.filter(number => isNaN(number));
//   return newArr;
// }
// function getIntegers(arr) {
//   const newArr = arr.filter(number => Number.isInteger(number));
//   return newArr;
// }

// c помощью стрелочных функций isFinite, isNaN, Number.isFinite, Number, isNaN;
const getFiniteNumbers = arr => arr.filter(number => Number.isFinite(number));
const getFiniteNumbersV2 = arr => arr.filter(number => isFinite(number));
const getNaN = arr => arr.filter(number => Number.isNaN(number));
const getNaNV2 = arr => arr.filter(number => isNaN(number));

function getIntegers(arr) {
  const newArr = arr.filter(number => Number.isInteger(number));
  return newArr;
}

const numbers = ['str', 25, '35', 40, Infinity, -Infinity, NaN, -10, 2.5, 3.9];

console.log(getFiniteNumbers(numbers));
console.log(getFiniteNumbersV2(numbers));
console.log(getNaN(numbers));
console.log(getNaNV2(numbers));
console.log(getIntegers(numbers));
console.log(numbers);
