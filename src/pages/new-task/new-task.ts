import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TasksProvider} from "../../providers/tasks/tasks";

/**
 * Save new tasks.
 */
@IonicPage()
@Component({
  selector: 'page-new-task',
  templateUrl: 'new-task.html',
})
export class NewTaskPage {

  task: { title: string } = {
    title: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public taskService: TasksProvider) {}

  createTask() {
    this.taskService.createTask(this.task);
    this.navCtrl.pop();
  }

}
