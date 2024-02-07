const createLogger = () => {
  // put your code here
  const array = [];

  function log(message) {
    const obj = {};
    obj.message = message;
    obj.type = 'log';
    obj.dateTime = new Date();
    array.unshift(obj);
  }
  function warn(message) {
    const obj = {};
    obj.message = message;
    obj.type = 'warn';
    obj.dateTime = new Date();
    array.unshift(obj);
  }
  function error(message) {
    const obj = {};
    obj.message = message;
    obj.type = 'error';
    obj.dateTime = new Date();
    array.unshift(obj);
  }
  function getRecords(str) {
    const finishArray = [];
    if (array.length === 0) {
      return array;
    }
    if (str === undefined) {
      return array;
    }
    if (str === 'log') {
      array.filter(elem => elem.type === 'log').map(elem => finishArray.push(elem));
    }
    if (str === 'warn') {
      array.filter(elem => elem.type === 'warn').map(elem => finishArray.push(elem));
    }
    if (str === 'error') {
      array.filter(elem => elem.type === 'error').map(elem => finishArray.push(elem));
    }
    return finishArray;
  }

  return {
    log,
    warn,
    error,
    getRecords,
  };
};

// examples
const logger1 = createLogger();
logger1.log('User logged in');
logger1.warn('User is tring to ented restricted page');
logger1.log('User logged out');
logger1.error('Unexpected error on the site');

console.log(logger1.getRecords()); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
console.log(logger1.getRecords('log')); // ===> [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
console.log(logger1.getRecords('error')); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
console.log(logger1.getRecords('warn')); // ===> [{ message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }]

const logger2 = createLogger();
logger2.warn('Opps, something is happenning');
console.log(logger2.getRecords('error')); // ===> []
console.log(logger2.getRecords('warn')); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]
console.log(logger2.getRecords()); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]

const logger3 = createLogger();
console.log(logger3.getRecords('error')); // ===> []
console.log(logger3.getRecords()); // ===> []
