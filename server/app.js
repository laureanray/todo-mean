const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const todoRoutes = require('./routes/todo');
const seed = require('./data/seed');


if (process.env.NODE_ENV === "production") {
  process.env.DB_URL = "mongodb://localhost/todo-prod";
  process.env.PORT = "80";
} else if (process.env.NODE_ENV === "test") {
  process.env.DB_URL = "mongodb://localhost/todo-test";
  process.env.PORT = "3001";
} else if (process.env.NODE_ENV === "dev") {
  process.env.DB_URL = "mongodb://localhost/todo-dev";
  process.env.PORT = "3000";
}


// Connect to the MongoDB server
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true})
  .catch(err => {
  console.log("Unable to connect to MongoDB");
});

// Configuration and Middleware setup
app.set('port', 3000);
app.use(bodyParser.json());

// Routes Setup
app.use('/todo', todoRoutes);

// 404 fallback
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

// Seed Database
// seed();

module.exports = app;
