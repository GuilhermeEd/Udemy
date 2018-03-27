const moment = require('moment');

const date = moment();
date.add(1, 'years').subtract(9, 'months');
console.log(date.format('MMM Do, YYYY'));

console.log(date.format('h:mm'));