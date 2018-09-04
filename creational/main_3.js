var Task = require('./constructor/constructor');
var Repos = require('./factory/factory2'); // can access the different repos with dot notation

var task1 = new Task(Repos.task.get(1));
var user = new Task(Repos.user.get(2));
var project = new Task(Repos.project.get(2));

task1.complete();
user.complete();
user.save();