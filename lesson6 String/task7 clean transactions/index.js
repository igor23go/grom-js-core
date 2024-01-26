function cleanTrnsactionsList(arr) {
  const copyArr = [...arr];
  const everyElOfArIsString = copyArr.join().split(',');
  const resSpace = everyElOfArIsString.map(elem => {
    return elem.trim();
  });
  const resMinesWords = resSpace.map(element => {
    return parseFloat(element);
  });
  const rounding = resMinesWords.map(elem => {
    return elem.toFixed(2);
  });

  const result = rounding.map(elem => {
    let trAction = elem;
    trAction = '$' + trAction;
    return trAction;
  });
  return result;
}
const array = [' 1.9jhjkh ', '16.4', 17, ' 1 dollar '];
console.log(cleanTrnsactionsList(array));

function cleanTrnsactionsList2(arr) {
  const copyArr = [...arr];
  const arrFiltered = copyArr.filter(elem => isFinite(elem));
  const arrNumbers = arrFiltered.map(elem => parseFloat(elem));
  const arrRounding = arrNumbers.map(elem => elem.toFixed(2));
  const result = arrRounding.map(elem => {
    return '$' + elem;
  });
  return result;
}
console.log(cleanTrnsactionsList2(array));
console.log(array);
