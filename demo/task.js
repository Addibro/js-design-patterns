var task = {
    title: 'My task',
    description: 'My Description',
    //toString: function() {
    //    return this.title + ' ' + this.description;
    //}
};


// add a property using Object.defineProperty()
Object.defineProperty(task, 'toString', {
    value: function(){
        return this.title + ' ' + this.description;
    },
    writable: false, // false to prevent changes to this property
    enumerable: false, // false to prevent being loopable
    configurable: true // false to prevent property to be changed (writable, enumerable, configurable)
})

task.toString = 'hi'; // won't change toString()


// Inheritance, using Object.create()
var urgentTask = Object.create(task); // urgentTask inherits from task

// Override property 
Object.defineProperty(urgentTask,'toString', {
    value: function () {
        return this.title + ' is a urgent task';
    },
    writable: false,
    enumerable: true,
    configurable: true
}) 
console.log(urgentTask.toString());


