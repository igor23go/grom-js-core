// function defer(func, ms) {
//   return function () {
//     setTimeout(func, ms);
//   };
// }
// const sayHi = () => {
//   console.log('Hi');
// };
// const deferredSayHi = defer(sayHi, 3000);
// deferredSayHi();

// function defer(func, ms) {
//   return function () {
//     setTimeout(() => func(...arguments), ms);
//   };
// }
// const sum = (a, b) => {
//   console.log(a + b);
// };
// const deferredSayHi = defer(sum, 3000);
// deferredSayHi(1, 2);

function defer(func, ms) {
  return function () {
    setTimeout(() => func.call(this, ...arguments), ms);
  };
}
const user = {
  name: 'Tom',
  sayHi() {
    console.log(`Hi I'm ${this.name}`);
  },
};
const deferredHi = defer(user.sayHi, 3000);
deferredHi.call({ name: 'Bob' });
