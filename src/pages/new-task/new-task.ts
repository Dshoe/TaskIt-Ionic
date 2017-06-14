import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { TasksProvider } from "../../providers/tasks/tasks";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

/**
 * Save new tasks.
 */
@IonicPage()
@Component({
  selector: 'page-new-task',
  templateUrl: 'new-task.html',
})
export class NewTaskPage {

  taskForm: FormGroup;

  constructor(public navCtrl: NavController, public taskService: TasksProvider, public formBuilder: FormBuilder) {
    this.taskForm = formBuilder.group({
      title: ['', Validators.required]
    });
  }

  createTask(task) {
    this.taskService.createTask(task);
    this.navCtrl.pop();
  }

}
