'use strict';
// 
const Repo = require('../module/taskRepo');

var Task = function(data) {
        this.name = data.name;
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
    // console.log('Saving task: ' + this.name);
    Repo.save(this);
}

module.exports = Task;