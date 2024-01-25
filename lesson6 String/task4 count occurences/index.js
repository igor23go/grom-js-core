const countOccurrences = (text, str) => {
  // put your code here
  if (str === '') {
    return null;
  }
  let count = 0;
  let pos = 0;

  while (true) {
    const indOfStr = text.indexOf(str, pos);
    if (indOfStr === -1) break;
    count += 1;
    pos = indOfStr + 1;
  }
  return count;
};
console.log(countOccurrences('aabbaaabbbaaaabbbb', 'bb'));
console.log(countOccurrences('aabbaaabbbaaaabbbb', ''));
