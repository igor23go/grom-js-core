function calc(expression) {
  const a = expression.split(' ');
  let result;
  switch (a[1]) {
    case '+':
      result = Number(a[0]) + Number(a[2]);
      break;
    case '-':
      result = Number(a[0] - a[2]);
      break;
    case '*':
      result = Number(a[0] * a[2]);
      break;
    case '/':
      result = Number(a[0] / a[2]);
  }
  return `${expression} = ${result}`;
}
console.log(calc('1 + 2'));

function calc2(expression) {
  const [a, operator, b] = expression.split(' ');
  let result;
  switch (operator) {
    case '+':
      result = Number(a) + +b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      result = a / b;
      break;
  }
  return `${expression} = ${result}`;
}
console.log(calc2('1 + 2'));
