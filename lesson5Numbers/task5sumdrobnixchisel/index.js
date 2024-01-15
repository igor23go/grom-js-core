function getTotalPrice(arr) {
  let sum = 0;
  //   const newArr = arr
  //     .map(number => {
  //       return Math.floor(number * 100) / 100;
  //     })
  //     .reduce((sum, elem) => {
  //       return Math.floor(sum * 100) / 100 + elem;
  //     }, 0);

  //   return `$${newArr}`;

  arr.forEach(elem => {
    sum += Math.floor(elem * 100) / 100;
  });
  return `$${Math.floor(sum * 100) / 100}`;
}
const numbers = [2.333, 5.555, 7.755, 88.555];
console.log(getTotalPrice(numbers));
