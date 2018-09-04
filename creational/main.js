var Task = require('./constructor');

var Repo = require('./module');

var task1 = new Task(Repo.get(1)); // fake get() from db

var task2 = new Task({name: 'create a demo for modules'});
var task3 = new Task({name: 'create a demo for singletons'});
var task4 = new Task({name: 'create a demo for prototypes'});

task1.complete();
task2.complete();
task2.save();
task3.save();
task4.save();