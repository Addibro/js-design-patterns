// this will create different repos
var repoFactory = function() {
    this.getRepo = function(repoType){
        if (repoType === 'task'){
            if (this.taskRepo) {
                console.log('Retrieving from cache');
                return this.taskRepo; // if this.taskRepo exists in repoFactory
            } else {
                this.taskRepo = require('../module/taskRepo');
                return this.taskRepo;
            }
            return require('../module/taskRepo');
        } else if (repoType === 'user'){
            // user repo
            return require('../module/userRepo');
        } else if (repoType === 'project'){
            // project repo
            return require('../module/projectRepo');
        }
    }
}

module.exports = new repoFactory;