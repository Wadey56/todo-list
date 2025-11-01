import { createTask } from "./createTask.js"
import { deleteTask } from "./deleteTask.js"

// test create
const task1 = createTask("task 1", "description 1", "2025-01-01", "high", "project 1");

// temp storage
export let tempStorage = [task1];
console.log(tempStorage);

// test delete
tempStorage = deleteTask(tempStorage, task1.id);
console.log(tempStorage);