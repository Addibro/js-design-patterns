var Task = require('./constructor/constructor');
var Repos = require('./factory/factory');

var task1 = new Task(Repos.getRepo('task').get(1));
var user = new Task(Repos.getRepo('user').get(2));

task1.complete();
user.complete();
user.save();