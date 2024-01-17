const superRound = (num, prec) => {
  // put your code here
  const array = [];
  const precision = 10 ** prec;

  array.push(Math.floor(num * precision) / precision);
  array.push(Math.trunc(num * precision) / precision);
  array.push(Math.ceil(num * precision) / precision);
  array.push(Math.round(num * precision) / precision);
  array.push(+num.toFixed(prec));
  return array;
};

console.log(superRound(11.12556, 2));
// examples
superRound(11.12556, 2); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
superRound(6.11, 3); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]
