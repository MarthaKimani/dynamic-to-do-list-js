document.addEventListener("DOMContentLoaded", () => {
    const todoForm = document.getElementById("todo-form");
    const todoInput = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");
 const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";
    removeBtn.onclick = () => taskList.removeChild(li);

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    taskInput.value = "";
  }

  addButton.addEventListener("click", addTask);

  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }

    // Handle form submit
    todoForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const taskText = todoInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            todoInput.value = "";
        }
    });

    // Add task to list
    function addTask(text) {
        const li = document.createElement("li");
        li.classList.add("todo-item");

        const span = document.createElement("span");
        span.textContent = text;

        const completeBtn = document.createElement("button");
        completeBtn.textContent = "✔️";
        completeBtn.className = "complete-btn";
        completeBtn.addEventListener("click", () => {
            li.classList.toggle("completed");
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "🗑️";
        deleteBtn.className = "delete-btn";
        deleteBtn.addEventListener("click", () => {
            li.remove();
        });

        li.appendChild(span);
        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    }
});

