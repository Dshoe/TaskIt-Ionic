import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewTaskPage } from "../new-task/new-task";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  newTask() {
    this.navCtrl.push(NewTaskPage);
  }

}
