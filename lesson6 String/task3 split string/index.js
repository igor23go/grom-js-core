// put your code here
function splitString(str, num = 10) {
  if (typeof str !== 'string') return null;
  const leng = str.length;
  const reminder = leng % num;
  //   let pointsQuantaty = leng / num;
  let pointsQuantaty = Number.isInteger(leng / num) ? 0 : num - reminder;
  let newStr = '';

  const pointStr = '.';
  const codeOfPoint = pointStr.charCodeAt(0);
  for (let i = leng; i < leng + pointsQuantaty; i += 1) {
    newStr += String.fromCodePoint(codeOfPoint);
  }
  newStr = str.concat(newStr);

  const array = [];
  let pos = 0;
  while (true) {
    const chank = newStr.substr(pos, num);
    if (chank.length === 0) {
      break;
    }
    array.push(chank);
    pos += num;
  }
  return array;
}
const abc = 'abc defg higklmnop qrstuv wxyz';
// console.log(splitString(1, 4));
console.log(splitString(abc, 7));
console.log(splitString(abc, 4));
console.log(splitString(abc, 5));
console.log(splitString(abc, 6));
// console.log(splitString(abc));
