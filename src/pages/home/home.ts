import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewTaskPage } from "../new-task/new-task";
import { TasksProvider } from "../../providers/tasks/tasks";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tasks: any;

  constructor(public navCtrl: NavController, public taskService: TasksProvider) {

  }

  ionViewDidLoad() {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getAllTasks().then((data) => {
      this.tasks = data;
    });
  }

  newTask() {
    this.navCtrl.push(NewTaskPage);
  }

  viewTask(task) {
    this.navCtrl.push(NewTaskPage, { task: task, isUpdate: true });
  }

  deleteTask(task) {
    this.taskService.deleteTask(task);
    this.getTasks();
  }

}
