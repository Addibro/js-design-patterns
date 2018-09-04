var Task = function(data) {
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
}

// not so cool service
var TaskService = function() {
    return {
        complete: function (task) {
            task.complete = true;
        },
        setCompleteDate: function (task) {
            task.comletedDate = new Date();
            console.log(task.name + ' was completed on ' + task.comletedDate);
        },
        notifyCompletion: function(task, user) {
            console.log('Notifying ' + user + ' of the completion of ' + task.name);
        },
        save: function(task) {
            console.log('saving task: ' + task.name);
        }
    }
}

var myTask = new Task({
    name: 'My Task',
    priority: 1,
    project: 'JavaScript',
    user: 'Andreas',
    completed: false
});

// create a wrapper to handle the TaskService mess
var TaskServiceWrapper = function() {
    var completeAndNotify = function(myTask) {
        TaskService.complete(myTask);
        if (myTask.completed) {
            TaskService.setCompleteDate(myTask);
            TaskService.notifyCompletion(myTask, myTask.user);
            TaskService.save(myTask);
        }
    }
    return {
        completeAndNotify: completeAndNotify
    }
}(); // execute the function so that TaskServiceWrapper is an object with completeAndNotify() method. Will be the return statement as it were.

TaskServiceWrapper.completeAndNotify();
