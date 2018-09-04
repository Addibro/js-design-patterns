// node can only use classes in strict mode
'use strict';

class Task {
    constructor(name) {
        this.name = name;
        this.completed = false;
    }

    complete() {
        console.log('completed task: ' + this.name);
        this.complete = true;
    }

    save() {
        console.log('saving task: ' + this.name);
        
    }
}

// make it importable
// gives a reference to this Task constructor
module.exports = Task;
