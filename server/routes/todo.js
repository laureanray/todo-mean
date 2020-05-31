const Todo = require('../models/todo');
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  Todo.find({})
    .then(result => {
      if (result) {
        res.status(200).send(result);
      }
    }).catch(err => {
      if (err) {
        res.status(500).send({
          message: 'Error getting todos'
        })
      }
  })
});

router.get('/:id', (req, res, next) => {
    Todo.findById(req.params.id)
      .then(result => {
        if (result) {
          res.status(200).send(result);
        } else {
          res.status(404).send({
            message: 'Todo not found'
          })
        }
      })
      .catch(err => {
        if (err) {
          res.status(500).send({
            message: 'Invalid id'
          })
        }
      })
});


router.post('/', (req, res, next) => {
  const body = req.body;
  const todo = Todo(body);
  todo
    .save()
    .then(result => {
      if (result === todo) {
        res.status(201).send(result);
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 'Internal server error'
      })
    })
});

router.put('/:id', (req, res, next) => {
  Todo.findById(req.params.id)
    .then(result => {
      if (result) {
        result.todoText = req.body.todoText;
        result.isDone = req.body.isDone;
        result
          .save()
          .then(todo => {
            if (todo) {
              res.send(todo);
            }
          })
          .catch(err => {
            if (err) res.status(500).send({
              message: 'Failed updating the todo'
            });
          });
      } else {
        res.status(404).send({
          message: 'Todo not found'
        })
      }
    })
    .catch(err => {
      if (err) {
        res.status(500).send({
          message: 'Invalid id'
        })
      }
    });
});


router.delete('/:id', (req, res, next) => {
  Todo.deleteOne({_id: req.params.id})
    .then(result => {
      if (result.n === 0 && result.deletedCount === 0) {
        res.status(404).send({
          message: 'Todo not found'
        })
      } else {
        res.send({
          message: 'Todo deleted'
        });
      }
    })
    .catch(err => {
      if (err) {
        res.status(500).send({
          message: 'Invalid id'
        })
      }
    });
});

module.exports = router;
