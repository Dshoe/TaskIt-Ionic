# Taskit Ionic Client
Custom todo list and task manager.

## Features
- Create a task with a title and description
- Delete a task
- Local database for offline use (PouchDB)
- Automatic syncing to remote database (CouchDB)

## Run this project

### Ensure Ionic and Cordova are installed
```bash
$ npm install -g ionic cordova
```

### Add CORS to CouchDB
```bash
$ npm install -g add-cors-to-couchdb
$ add-cors-to-couchdb
```

### Compile and run source code
```bash
$ ionic serve
```
