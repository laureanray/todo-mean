const Todo = require('../models/todo');


const todos = [
  {
    todoText: 'Todo #1'
  },
  {
    todoText: 'Todo #1'
  },
  {
    todoText: 'Todo #2'
  }
]


const seed = () => {
    Todo.count({}).then(count => {
      console.log(count);
      if (count === 0) {
        todos.forEach(todoItem => {
          const todo = Todo(todoItem);
          todo.save()
            .then(result => {
              if (result === todo) {
                console.log(`Added todo: ${todo.todoText}`);
              }
            })
            .catch(err => {
              if (err) {
                console.log(`Error saving todo: ${todo.todoText}`);
              }
            })
        });
      }
    })
}


module.exports = seed;
