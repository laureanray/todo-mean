import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodoModalComponent } from './add-todo-modal.component';

describe('AddTodoModalComponent', () => {
  let component: AddTodoModalComponent;
  let fixture: ComponentFixture<AddTodoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTodoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTodoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
