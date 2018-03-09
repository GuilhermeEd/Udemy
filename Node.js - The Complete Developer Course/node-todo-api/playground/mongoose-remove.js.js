const { ObjectID } = require('mongodb');

const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');

Todo.remove({}).then((result) => {
  console.log(result);
});

Todo.findOneAndRemove({_id: '5a9ca5a9821193ac1743c74a'}).then((todo) => {
  
});

Todo.findByIdAndRemove('').then((todo) => {
  console.log(todo);
});