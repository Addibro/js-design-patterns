var Task = function(data) {
    this.name = data;
    this.completed = false;
    // save functions to use in the prototype
}

// add functions that every Task object should have
// Classname.prototype.methodName

Task.prototype.complete = function(){
    console.log('completed task: ' + this.name);
    this.completed = true;
}

Task.prototype.save = function(){
    console.log('Saving task: ' + this.name);
}

// create a Legacy Task
var legacyTask = new Task('Legacy Task');
legacyTask.complete();
legacyTask.save();


var urgentTask = new Task('Legacy Task');
// use Decorator pattern to add functionality (priority and a notify function)
urgentTask.priority = 2;
urgentTask.notify = () => console.log('notifying important people');
// add notify to save method
urgentTask.save = function() {
    this.notify();
    Task.prototype.save.call(this); 
    // call uses 'this' to bind this save executing to the (this) scope
}
urgentTask.complete();
urgentTask.save();