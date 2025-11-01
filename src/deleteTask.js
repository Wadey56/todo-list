// this module is used to delete tasks

// function to delete task passed in
function deleteTask(taskList, id) {
    return taskList.filter((task) => task.id !== id);
}

export { deleteTask };