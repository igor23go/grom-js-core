const createCalculator = () => {
  // put your code here
  let memory = 0;
  function add(num) {
    memory += num;
  }
  function decrease(num) {
    memory -= num;
  }
  function reset() {
    memory = 0;
  }
  function getMemo() {
    return memory;
  }
  return {
    add,
    decrease,
    reset,
    getMemo,
  };
};
const calculator = createCalculator();
const calculatorNext = createCalculator();

console.log(calculator.getMemo()); // 0
console.log(calculator.add(3));
console.log(calculator.getMemo()); // 3
console.log(calculator.decrease(5));
console.log(calculator.getMemo()); // -2

calculatorNext.add(5);
calculatorNext.getMemo(); // 5

calculator.getMemo(); // -2
calculator.reset();
calculator.getMemo(); // 0

calculatorNext.getMemo(); // 5

// ВЫВОДЫ:
// 1. функция без return делает свою роботу, просто возвращает undefined!!!!!!!
