function sortContacts(arr, isAsc = true) {
  if (!Array.isArray(arr)) {
    return null;
  }

  return isAsc
    ? arr.sort((a, b) => a.name.localeCompare(b.name))
    : arr.sort((a, b) => b.name.localeCompare(a.name));
}
const array = [
  { name: 'Peny', phone: '11-22-33' },
  { name: 'Ann', phone: '33-333-33333' },
  { name: 'Klaudi', phone: '55-555-55555' },
];
console.log(sortContacts(5));
console.log(sortContacts(array));
console.log(sortContacts(array, 0));

// function checkSpam(str) {
//   return str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx');
// }
// console.log(checkSpam('krNGxXxra'));
// function trancate(str, maxlength) {
//   if (str.length <= maxlength) return str;
//   return str.substring(maxlength - 1, 0) + '...';
// }
// console.log(trancate('Everyone say say say say hi!!!!!!', 25));
// function extractCurrancyValue(value) {
//   const sum = value.slice(1);
//   console.log(typeof sum);
//   return sum;
// }
// console.log(extractCurrancyValue('$25'));
