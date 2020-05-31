# Todo List

This is a sample project which contains a server which serves as a REST API and an Angular frontend to demonstrate
usage of the API.

## Requirements
**Node.js**

**MongoDB**
## Installing and Running

Clone this repository then install all the npm packages for both frontend and the backend.

Run `npm install` in the **root** of the project for the installing the dependencies of the frontend.

Move into the server directory `cd server` and run `npm install` in the **server** directory of the project to install the dependencies of the backend.


### Starting 
Run `npm run start` from the **root** of the project. It should take a while for Angular to build please be patient during this time.

If for some reason this doesn't work try running the frontend and backend separately by running `npm run serve` in the **root** of the project and then
run `npm run serve` in the **server** directory. For more information please check the `package.json` of both the frontend and backend.

### Usage
#### Client
Go to [Web App](http://localhost:4200/) or type in `http://localhost:4200` in your browser.

#### Api Endpoints
`[GET] http://localhost:3000/todo` get all the todos

`[GET] http://localhost:3000/todo/id` get the todo that matches id

`[POST] http://localhost:3000/todo` create todo (application/json) body

`[PUT] http://localhost:3000/todo/id` update todo using id and (application/json) body

`[DELETE] http://localhost:3000/todo/id`
