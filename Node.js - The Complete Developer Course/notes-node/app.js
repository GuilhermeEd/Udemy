console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

console.log(_.isString(true));
console.log(_.isString('Guilherme'));

var filteredArray = _.uniq(['A', 'B', 'B', 'C', 'C', 'C']);
console.log(filteredArray);

/* var res = notes.addNote();
console.log(res);

console.log('Result: ', notes.add(9, -2));

 var user = os.userInfo();
fs.appendFileSync('greetings.txt', `Hello ${user.username}!`);  */