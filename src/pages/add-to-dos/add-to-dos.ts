import { NgForm } from '@angular/forms';
import { ToDoService } from './../../services/toDo.service';
import { Component } from '@angular/core';

@Component({
  selector: 'page-add-to-dos',
  templateUrl: 'add-to-dos.html',
})
export class AddToDosPage {
  
  constructor(
              private toDoService: ToDoService) {
  }

  onSubmit(form: NgForm) {
   this.toDoService.addToDo(form.value.title, 
                            form.value.description);
  form.resetForm();
  }
}
