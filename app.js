let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value !== '') {
        const task = {
            id: Date.now(),
            text: taskInput.value
        };

        tasks.push(task);
        updateTaskList();
        taskInput.value = '';
    }
}

function removeTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    updateTaskList();
}

function updateTaskList() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task.text}</span>
            <button onclick="removeTask(${task.id})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}
