const { ObjectID } = require('mongodb');

const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/Todo');
const { User } = require('../server/models/User');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

Todo.findOneAndRemove({ _id: '5b472664d43a84917952a02b' }).then((todo) => {
  console.log(todo);
});

Todo.findByIdAndRemove('5b472664d43a84917952a02b').then((todo) => {
  console.log(todo);
});