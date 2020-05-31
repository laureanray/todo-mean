const app = require('./app');

const server = app.listen(app.get("port"), () => {
  console.log(`Server is running at port: ${app.get("port")}`);
});

module.exports = server;
