var repo = function(){

    var db = {};

    var get = function(id){ 
        console.log('project' + id);
        return { 
            name: 'new user from db' // this is going to be data.name (see constructor.js)
        }
    } 

    var save = function(user){
        console.log('Saving user: ' + user.name + ' to the db');
        
    } 

    return { // returns an object with a series of functions
        get: get,
        save: save
    }
}

module.exports = repo(); // is going to be the return object (line 2)