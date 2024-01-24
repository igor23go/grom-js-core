function splitText(str, num = 10) {
  const array = [];
  let position = 0;
  if (typeof str !== 'string') return null;
  while (true) {
    const chank = str.substr(position, num);
    if (chank.length === 0) {
      break;
    }
    array.push(chank[0].toUpperCase().concat(chank.slice(1)));
    position += num;
  }
  return array.join('\n');
}

const abc = 'abcdefghigklmnopqrstuvwxyz';
console.log(splitText(abc, 4));
