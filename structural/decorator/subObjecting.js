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

var UrgentTask = function(name, priority) {
    // use Task's constructor and pass this and 'name' as arguments
    // do not add Task's prototype tho
    Task.call(this, name);
    this.priority = priority;
}

// Set the prototype to UrgentTask's prototyp
UrgentTask.prototype = Object.create(Task.prototype);

// create a urgent task
var ut = new UrgentTask('urgent task', 1);

// can now use Task's prototype's methods: 
ut.complete();
// ut.save();

// let's decorate the UrgentTask
UrgentTask.prototype.notify = () => console.log('notifying people');
UrgentTask.prototype.save = function() {
    this.notify();
    console.log('do stuff before saving...');
    // call the Task save
    Task.prototype.save.call(this);
}

ut.save();






// Other examples of 'subObjecting'
function Product(name, price) {
    this.name = name;
    this.price = price;
}
  
function Food(name, price, category) {
    Product.call(this, name, price);
    this.category = category;
}

