const { ObjectID } = require('mongodb');

const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/Todo');
const { User } = require('../server/models/User');

// const id = '5b44936e78d6b4744a20cedf11';

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid')
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('todo By Id', todo);
// }).catch((e) => console.log(e));

const id = '5b448188979705f84444dfb0';

User.findById(id).then((user) => {
  if (!user) {
    return console.log('User not found');
  }
  console.log('User: ', user);
}).catch((e) => console.log(e));