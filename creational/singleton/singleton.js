var TaskRepo = (() => {
    // taskRepo object
    var taskRepo;
    // function to create a new instance of the repo and returns it
    function createRepo() {
        var taskRepo = new Object('Task');
        return taskRepo;
    }
    // when we need the task repo getInstance will be invoked
    return {
        getInstance: function() {
            // if taskRepo hasn't been created yet
            if (!taskRepo) {
                taskRepo = createRepo();
            }
            // return the taskRepo object
            return taskRepo;
        }
    }
})();