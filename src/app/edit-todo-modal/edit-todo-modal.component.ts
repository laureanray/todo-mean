import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {TodoService} from "../../services/todo.service";
import Todo from "../../model/todo";

@Component({
  selector: 'app-edit-todo-modal',
  templateUrl: './edit-todo-modal.component.html',
  styleUrls: ['./edit-todo-modal.component.sass']
})
export class EditTodoModalComponent implements OnInit {
  todoText: string;
  disabled = false;
  isSaving = false;

  constructor(public dialogRef: MatDialogRef<EditTodoModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoText = this.data.todo.todoText;
  }

  keyup($event: KeyboardEvent) {
    this.disabled = this.todoText.length <= 0;
  }

  save() {
    this.data.todo.todoText = this.todoText;
    this.isSaving = true;
    this.todoService.updateTodo(this.data.todo._id, this.data.todo).subscribe((todo: Todo) => {
        if (todo.todoText == this.todoText) {
          this.dialogRef.close();
        }
    });
  }
}
