const getMaxAbsoluteNumber = arr => {
  // put your code here
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  const newArr = arr.map(elem => Math.abs(elem));
  return Math.max(...newArr);
};

// examples
console.log(getMaxAbsoluteNumber([-10, 10, -10])); // ===> 10
console.log(getMaxAbsoluteNumber([2.1, 0, 1.6])); // ===> 2.1
console.log(getMaxAbsoluteNumber([-6, 3, 5, -1])); // ===> 6
console.log(getMaxAbsoluteNumber([-777, 3, -1, 45, -20])); // ===> 777
console.log(getMaxAbsoluteNumber());
console.log(getMaxAbsoluteNumber([]));
