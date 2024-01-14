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

// const getFiniteNumbers = arr => arr.filter(number => Number.isFinite(number));
// const getFiniteNumbersV2 = arr => arr.filter(number => isFinite(number));
// const getNaN = arr => arr.filter(number => Number.isNaN(number));
// const getNaNV2 = arr => arr.filter(number => isNaN(number));

// function getIntegers(arr) {
//   const newArr = arr.filter(number => Number.isInteger(number));
//   return newArr;
// }

// const numbers = ['str', 25, '35', 40, Infinity, -Infinity, NaN, -10, 2.5, 3.9];

// console.log(getFiniteNumbers(numbers));
// console.log(getFiniteNumbersV2(numbers));
// console.log(getNaN(numbers));
// console.log(getNaNV2(numbers));
// console.log(getIntegers(numbers));
// console.log(numbers);

// parseInt, parseFloat методы

function getParsedIntegers(arr) {
  const newArr = arr.map(number => Number.parseInt(number, 10));
  return newArr;
}
function getParsedIntegersV2(arr) {
  const newArr = arr.map(number => parseInt(number, 10));
  return newArr;
}
function getParsedFloats(arr) {
  const newArr = arr.map(number => Number.parseFloat(number));
  return newArr;
}
function getParsedFloatsV2(arr) {
  const newArr = arr.map(number => parseFloat(number));
  return newArr;
}

//  parseInt, parseFloat методы со стрелочными функциями
// const getParsedIntegers = arr => arr.map(number => Number.parseInt(number, 10));
// const getParsedIntegersV2 = arr => arr.map(number => parseInt(number, 10));
// const getParsedFloats = arr => arr.map(number => Number.parseFloat(number));
// const getParsedFloatsV2 = arr => arr.map(number => parseFloat(number));

const numb = ['12.5px', 1.3, '12.7px'];
const numbers = ['str25str', 25, '35', 40, Infinity, -Infinity, NaN, -10, 2.5, 3.9];
console.log(getParsedIntegers(numbers));
console.log(getParsedIntegers(numb));
console.log(getParsedIntegersV2(numbers));
console.log(getParsedIntegersV2(numb));
console.log(getParsedFloats(numbers));
console.log(getParsedFloats(numb));
console.log(getParsedFloatsV2(numbers));
console.log(getParsedFloatsV2(numb));
console.log(numbers);
console.log(numb);
