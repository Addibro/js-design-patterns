# Design patterns
This will go through some good design patterns for javascript

##### Let's go through prototypes first..

A prototype is an encapsulation of properties that an object links to.
So for every copy of the object it all links back to the same prototype. 

When two objects of Task, they both point/link back to that same task.Prototype. 
```
Task1 ---> Task Prototype
Task2 -----^
```

Example of adding a function to a class prototype:
```
Task.prototype.complete = function () {
    this.completed = true; // completed is a property in Task
}
```
Now every Task object will have a 'complete' function

##### What we will be woring with
We have an object/class, called Task, which has a name and has the functions complete and save:

```
class Task {
    constructor(name) {
        this.name = name;
        this.completed = false;
    }
    complete() {
        this.completed = true;
    }
    save() {
        console.log('saveing task');
    }
}
```

## Creational patterns
- How to construct new objects
- Adapting creation to the situation

#### Constructor pattern
Use to create new objets with their own object scope. 

The `new` keyword 
- Creates a brand new object
- Links to an object prototype 
- Binds 'this' to the new object scope
- Implicitly returns 'this'

Example of constructor pattern:

```
function ObjectName(param1, param2) {
    this.param1 = param1;
    this.param2 = param2;
}
```

ECMAScript 2015 uses classes

Example of a class:
```
'use strict' // node

class Task {
    constructor(name) {
        this.name = name;
        this.completed = false;
    }
    complete() {
        //... function logic
    }
    save() {
        //... function logic
    }
}
```

#### Module pattern
- Simple way to encapsulate a group of similar methods
- Creates a "Toolbox" of functions to use

Example of a module pattern:
```
var Module = {
    var privateVar = 'I am private...';
    method: function(){...},
    nextMethod: function(){...}
    return {
        method: method,
        nextMethod: nextMethod
    }
}
```

#### Factory pattern
A pattern used to simplify object creation
- Creating different objects based on need (different types of objects)
- Repository creation

Example:

```
var repoFactory = function() {

    // store all the different repos
    var repoList = [{name: 'task', source:'./specificRepo'}, ...]

    // assign the different repos to repoFactory
    repoList.forEach(repo => {
        // get the specific repo and assign it to the repoFactory (this)
        this[repo.name] = require(repo.source); // 'this' refers to repoFactory 
    })
}

// export it
module.exports = new repoFactory;
```

#### Singleton pattern
Used to restrict an object to one instance of that object across the app
- It remembers the last time you used it
- Hands the same instance back

Node uses CommonJS which can give you singletons by caching functions/objects. 

`module.exports = repo;` 
This will export a function (or object) only. You would have to execute the function in another (importing) module like this:

`var repo = require('./repo')();`
The '()' executes the function directly

If you on the other hand want to cache functions we can execute the function
inside the module.exports, which creates a singleton:
`module.exports = repo()` 
NodeJs will store/cache that instance of this return object


## Structural patterns
Concerned with how object are made up and simplify relationships between objects
- Deal with the relationship of objects:
- Extend functionality
- Simplify functionaliy

#### Decorator pattern
Used to add new functionality to an existing object, without being obtrusive. 
- More complete inheritance
- Wraps an object 
- Protects existing objects
- Allows extended functionality without changing the original class

Example when we want to add functionality to Task. Create an UrgentTask
```
var UrgentTask = function(name, priority) {
    // use Task's constructor
    Task.call(this, name); // this is the same as 'super' in Java or .NET
    this.priority = priority;
}

// Set UrgentTask's prototype to Task's prototype
UrgentTask.prototype = Object.create(Task.prototype);

// Add decorator pattern to UrgentTask by adding a notifying functionality
UrgentTask.prototype.notify = function() {
    //.. notify
}

// Decorate the save function
UrgentTask.prototype.save = function() {
    // notify...
    this.notify();
    //.. do some stuf before saving
    // call the original Task's save method
    Task.prototype.save.call(this);
}

```

#### Facade pattern
used to provide a simplified interface to a complicated system. 
- This about the fron of a building (nice on the outside, inside maybe not)
- Hides chaos from us
- Simplifies the interface
- JQuery (sits on top of the DOM)

Example if you have an ugly and messy (module pattern) API which you want to simplify:
```
var TaskService = function() {
    return {
        // .. lots of messy functions like complete, completeDate, notify ect
    }
}

// make it simplified
var TaskServiceWrapper = function() {
    // make it more automatic/simpler
    var completeAndNotify = function(task) {
        TaskService.complete();
        TaskService.notify();
        // ...
    }

    return {completeAndNotify: completeAndNotify}
}(); // execute the function so it becomes the return statement (an object with the completeAndNotify method)

TaskServiceWrapper.completeAndNotify(task);

```

