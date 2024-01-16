const getRandomNumbers = (length, from, to) => {
  // put your code here
  const start = Math.ceil(from);
  const end = Math.floor(to);
  if (to === from || start > end) {
    return null;
  }
  const array = new Array(length)
    .fill()
    .map(() => Math.floor(Math.random() * (end - start) + start));
  return array;
};

// тут важливо застосувати метод Math.floor при створенні елементів масиву ні в методі fill() а в методі map()!!!

console.log(getRandomNumbers(5, 1.4, 3.22));
console.log(getRandomNumbers(7, 1.4, 1.9));
console.log(getRandomNumbers(7, 2.11, 2.9));
// examples
getRandomNumbers(5, 1.4, 3.22); // ==> [2, 2, 2, 3, 2]
getRandomNumbers(5, 1.4, 3.22); // ==> [3, 2, 2, 2, 2]
getRandomNumbers(5, 1.4, 3.22); // ==> [3, 3, 2, 3, 2]
getRandomNumbers(3, 2.4, 4.5); // ==> [4, 3, 4]
getRandomNumbers(3, 1.9, 2.5); // ==> [2, 2, 2]

getRandomNumbers(7, 1.4, 1.9); // ==> null
getRandomNumbers(7, 2.11, 2.9); // ==> null
getRandomNumbers(1, 2.5, 0.9); // ==> null
