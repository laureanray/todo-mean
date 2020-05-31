import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddTodoModalComponent} from "./add-todo-modal/add-todo-modal.component";
import Todo from "../model/todo";
import {TodoService} from "../services/todo.service";
import * as moment from 'moment';
import todo from "../model/todo";
import {EditTodoModalComponent} from "./edit-todo-modal/edit-todo-modal.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'todo-crud'
  todos: Todo[];

  constructor(private dialog: MatDialog, private todoService: TodoService) {
  }

  ngOnInit() {
    this.fetchTodos();
  }

  addTodo() {
    console.log('add todo');
    this.dialog.open(AddTodoModalComponent, {
      width: '400px'
    }).afterClosed().subscribe(() => {
      this.fetchTodos();
    })
  }

  fetchTodos() {
    this.todoService.getTodos().subscribe((todos: Todo[]) => {
      this.todos = todos;
      for (let i = 0; i < this.todos.length; i++) {
        this.todos[i].updatedAt = moment(this.todos[i].updatedAt).fromNow();
      }
    });
  }

  toggleDone(id: string) {
    // update todo
    const todoToUpdate = this.todos.find(todo => {
      return todo._id === id;
    });
    todoToUpdate.isDone = !todoToUpdate.isDone;
    console.log(todoToUpdate);
    this.todoService.updateTodo(id, todoToUpdate).subscribe((todo: Todo) => {
      if (todo.isDone === todoToUpdate.isDone) {
        this.fetchTodos();
      }
    });
  }

  delete(_id: string) {
    this.todoService.deleteTodo(_id).subscribe(() => {
        this.fetchTodos();
    });
  }

  edit(_id: string) {
    const todo = this.todos.find(t => {
      return t._id === _id;
    })
    this.dialog.open(EditTodoModalComponent, {
      width: '400px',
      data: {
        todo
      }
    });
  }
}
