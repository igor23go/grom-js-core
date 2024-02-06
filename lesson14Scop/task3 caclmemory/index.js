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
function getMemory() {
  return memory;
}
console.log(add(5));
console.log(decrease(3));
console.log(reset());
console.log(getMemory());
