import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  task: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public taskService: TasksProvider, public formBuilder: FormBuilder) {
    this.taskForm = formBuilder.group({
      title: ['', Validators.required]
    });
  }

  createTask() {
    this.task = {
      title: this.taskForm.controls['title'].value
    };
    this.taskService.createTask(this.task);
    this.navCtrl.pop();
  }

}
