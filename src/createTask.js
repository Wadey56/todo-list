// this module is used to create tasks

// factory function for tasks
function createTask(title, description, dueDate, priority, project = "default") {

    // generate a random id
    let id = window.crypto.randomUUID();

    return {
        id,
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