function createTask(title, description, dueDate, priority) {
    return {
        title,
        description,
        dueDate,
        priority
    }
}

const test = createTask("test", "test", "test", "test")
console.log(test)

export { createTask }