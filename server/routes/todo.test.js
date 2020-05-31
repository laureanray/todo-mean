const app = require('../app');
const chai = require('chai');
const chaiHttp = require('chai-http');
const Todo = require('../models/todo');
const expect = chai.expect;

chai.use(chaiHttp);


describe('API Tests', () => {
  describe('GET /todo', () => {
    it('should return all the todos', done => {
      chai
        .request(app)
        .get('/todo')
        .end((err, res, body) => {
          if (err) {
            done(err);
          } else {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            done();
          }
        })
    });

    it('should add a todo', done => {
      const todo = {
        todoText: 'Test todo'
      };

      chai
        .request(app)
        .post('/todo/create')
        .set("content-type", "application/json")
        .send(todo)
        .end((err, res, body) => {
          if (err) {
            done(err);
          } else {
            expect(err).to.be.null;
            expect(res).to.have.status(201);
            Todo.findById(res.body._id).then(res => {
              if (res) {
                done()
              }
            });
          }
        })
    })
  });
});
