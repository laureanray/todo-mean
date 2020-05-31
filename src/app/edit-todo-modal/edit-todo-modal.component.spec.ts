import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTodoModalComponent } from './edit-todo-modal.component';

describe('EditTodoModalComponent', () => {
  let component: EditTodoModalComponent;
  let fixture: ComponentFixture<EditTodoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTodoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTodoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
