// this module is used to create tasks

// factory function for tasks
function createTask(title, description, dueDate, priority, project = "default") {

    return {
        title,
        description,
        dueDate,
        priority,
        project,
        // all tasks start as incompleted
        completed: false,
    }
}

export { createTask };