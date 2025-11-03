// this module is used to edit tasks

// function to edit task passed in
function editTask(taskList, id, attribte, value) {

    let taskIndex = taskList.findIndex(task => task.id === id);
    let task = taskList[taskIndex];
    // bracket notation required to dynamic key value
    task[attribte] = value;

    taskList.filter((task) => task.id !== id);

    return taskList;
}

export { editTask };