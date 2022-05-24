const taskName = <HTMLInputElement|null>document.getElementById("taskName");
const btnAddTask = document.getElementById("btnAddTask");
const taskList = document.getElementById("taskList");

let tasks:string[]=[];

const showTasks=()=>{
    if (taskList!=null) {
        taskList.innerHTML="";
        
        tasks.forEach((task)=>{
            const li=document.createElement("li");
            li.className="list-group-item";
            li.textContent=task;
            taskList.appendChild(li);
        });
    }
}

let jsonString= localStorage.getItem("toDoList");
if (jsonString!=null) {
    tasks = JSON.parse(jsonString);
    showTasks();
}

const addTask=()=>{
    if (taskName!=null) {
        tasks.push(taskName.value);
        taskName.value="";
        console.log(tasks);

        localStorage.setItem("toDoList", JSON.stringify(tasks));

        showTasks();

    }
};

if (btnAddTask!=null) {
    btnAddTask.onclick=addTask;
}