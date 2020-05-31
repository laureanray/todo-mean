import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import Todo from "../model/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }


  getTodos () {
    return this.http.get(`${environment.api}/todo`);
  }

  getTodo (id: string) {
    return this.http.get(`${environment.api}/todo/${id}`);
  }

  deleteTodo (id: string) {
    return this.http.delete(`${environment.api}/todo/${id}`);
  }

  updateTodo(id: string, todo: Todo) {
    return this.http.put(`${environment.api}/todo/${id}`, todo);
  }

  createTodo(todo: Todo) {
    return this.http.post(`${environment.api}/todo/`, todo);
  }
}
