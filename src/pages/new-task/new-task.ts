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

  task: { title: string, description: string } = {
    title: '',
    description: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public taskService: TasksProvider, public formBuilder: FormBuilder) {
    this.taskForm = formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.nullValidator]
    });

    if (this.navParams.get('task')) {
      this.task = this.navParams.get('task');
    }
  }

  saveTask(task) {
    if (!this.navParams.get('isUpdate')) {
      this.taskService.createTask(task);
    } else {
      this.taskService.updateTask(task);
    }
    
    this.navCtrl.pop();
  }

}
