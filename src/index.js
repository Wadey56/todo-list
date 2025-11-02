import { createTask } from "./createTask.js"
import { deleteTask } from "./deleteTask.js"
import { editTask } from "./editTask.js"

// test create
const task1 = createTask("task 1", "description 1", "2025-01-01", "high", "project 1");
const task2 = createTask("task 2", "description 2", "2025-01-01", "high", "project 1");

// temp storage
export let tempStorage = [task1, task2];
task1.description = "edited description";
console.log(tempStorage);

// test delete
tempStorage = deleteTask(tempStorage, task1.id);
console.log(tempStorage);

// test edit
tempStorage = editTask(tempStorage, task2.id, "title", "new title");
console.log(tempStorage);