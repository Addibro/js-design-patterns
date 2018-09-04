// is going to be responsible for all db calls
var repo = function(){

    var db = {};

    var get = function(id){ 
        console.log('getting task: ' + id);
        return { 
            name: 'new user from db' // this is going to be data.name (see constructor.js)
        }
    } 

    var save = function(task){ // the task object
        console.log('Saving user: ' + task.name + ' to the db');
        
    } 
    
    console.log('newing up task repo');
    // Revealing Module Pattern (define all methods above)
    return { // returns an object with a series of functions
        get: get,
        save: save
    }
}

module.exports = repo(); // is going to be the return object (line 2)