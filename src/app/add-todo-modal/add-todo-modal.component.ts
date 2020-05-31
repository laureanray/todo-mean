import { Component, OnInit } from '@angular/core';
import {TodoService} from "../../services/todo.service";
import Todo from "../../model/todo";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-todo-modal',
  templateUrl: './add-todo-modal.component.html',
  styleUrls: ['./add-todo-modal.component.sass']
})
export class AddTodoModalComponent implements OnInit {
  disabled = true;
  todoText: string;
  isAdding = false;

  constructor(private todoService: TodoService,
              public dialogRef: MatDialogRef<AddTodoModalComponent>) { }

  ngOnInit(): void {
  }

  keyup($event: KeyboardEvent) {
    this.disabled = this.todoText.length <= 0;
  }

  add() {
    this.isAdding = true;
    const todo = new Todo();
    todo.todoText = this.todoText;
    this.todoService.createTodo(todo).subscribe((createdTodo: Todo) => {
      this.isAdding = false;
      this.dialogRef.close();
    });
  }
}
