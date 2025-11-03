// this module is used to create projects

// factory function for projects
function createProject(title, description) {

    // generate a random id
    let id = window.crypto.randomUUID();
    // array for tasks rather than task containing projects
    let tasks = [];

    return {
        id,
        title,
        description,
        tasks
    }
}

export { createProject };