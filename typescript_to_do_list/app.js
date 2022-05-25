"use strict";
const taskName = document.getElementById("taskName");
const btnAddTask = document.getElementById("btnAddTask");
const taskList = document.getElementById("taskList");
const btnDeleteTasks = document.getElementById("deleteTasks");
let tasks = [];
const showTasks = () => {
    if (taskList != null) {
        taskList.innerHTML = "";
        tasks.forEach((task, i) => {
            const li = document.createElement("li");
            li.className = "list-group-item";
            li.textContent = task;
            const btn = document.createElement("button");
            btn.textContent = "Atlikta";
            btn.className = "btn btn-info float-end";
            btn.onclick = () => {
                deleteTask(i);
            };
            li.appendChild(btn);
            taskList.appendChild(li);
        });
    }
};
const deleteTasks = () => {
    localStorage.removeItem("toDoList");
    tasks = [];
    showTasks();
};
const deleteTask = (index) => {
    tasks.splice(index, 1);
    saveTasks();
    showTasks();
};
let jsonString = localStorage.getItem("toDoList");
if (jsonString != null) {
    tasks = JSON.parse(jsonString);
    showTasks();
}
const addTask = () => {
    if (taskName != null) {
        tasks.push(taskName.value);
        taskName.value = "";
        console.log(tasks);
        saveTasks();
        showTasks();
    }
};
const saveTasks = () => {
    localStorage.setItem("toDoList", JSON.stringify(tasks));
};
if (btnAddTask != null) {
    btnAddTask.onclick = addTask;
}
if (btnDeleteTasks != null) {
    btnDeleteTasks.onclick = deleteTasks;
}
