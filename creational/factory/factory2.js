var repoFactory = function(){
    var repoList = [{name: 'task', source: '../taskRepo.js'},
                    {name: 'user', source: '../userRepo.js'},
                    {name: 'project', source: '../projectRepo.js'}];
    repoList.forEach(repo => {
        console.log(repo);
        this[repo.name] = require(repo.source); // this referers to repoFactory
        // first iteration will be repos['task'] = require('../taskRepo.js')
        // since repos is equal to repoFactory (this)
        // repos[repo.name] will create a property on repoFactory
        // that will have the value "require('../taskRepo.js')"
    });
    console.log(this);
}

module.exports = new repoFactory;