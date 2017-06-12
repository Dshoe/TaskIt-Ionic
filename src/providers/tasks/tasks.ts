import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import PouchDB from 'pouchdb';

@Injectable()
export class TasksProvider {

  db: any;
  remote: any;

  constructor(public http: Http) {
    this.db = new PouchDB('taskit');

    this.remote = 'http://localhost:5984/taskit';

    let options = {
      live: true,
      retry: true,
      continuous: true
    };

    this.db.sync(this.remote, options);
  }

}
