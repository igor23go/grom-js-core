const user = {
  firstName: '',
  lastName: '',
  getFullName() {
    const name = this.firstName.concat(' ').concat(this.lastName);
    return name;
  },
  setFullName(fullName) {
    const name = fullName.split(' ');
    user.firstName = name[0];
    user.lastName = name[1];
  },
};
user.setFullName('Igor Bik');
console.log(user);
console.log(user.getFullName());
console.log(typeof user);
const ueee = user.getFullName.call(user, 'exp', 'exp');
console.log(ueee);
console.log(typeof ueee);

user.setFullName('Pit', 'Big');
console.log(user.getFullName('Pit', 'Big'));
const user2 = user.getFullName.call({ firstName: 'Tom', lastName: 'Gorn' });
console.log(user2);
user.setFullName('Nada', 'First');
const user3 = user.getFullName();
console.log(user3);
const user4 = user.getFullName.bind(user);
console.log(user4());
