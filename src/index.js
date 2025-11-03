import { createTask } from "./createTask.js"
import { deleteTask } from "./deleteTask.js"
import { editTask } from "./editTask.js"
import { createProject } from "./createProject.js";

// test create
let task1 = createTask("task 1", "description 1", "2025-01-01", "high");
let task2 = createTask("task 2", "description 2", "2025-01-01", "high");

// temp storage
let tempStorage = [task1, task2];
task1.description = "edited description";
console.log(tempStorage);

// test delete
tempStorage = deleteTask(tempStorage, task1.id);
console.log(tempStorage);

// test edit
tempStorage = editTask(tempStorage, task2.id, "title", "new title");
console.log(tempStorage);

// test create project
const myProject = createProject("My project", "for cool things");
let task3 = createTask("task 12", "description 1", "2025-01-01", "high");
myProject.tasks.push(task3);
console.log(myProject);