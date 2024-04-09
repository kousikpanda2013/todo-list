function addTodo() {
    var input = document.getElementById("todoInput");
    var text = input.value.trim();
    if (text === "") return;

    var todoList = document.getElementById("todoList");
    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    checkbox.onclick = updateTotalTasks;

    var span = document.createElement("span");
    span.textContent = text;

    var deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function() {
      li.remove();
      updateTotalTasks();
    };

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    input.value = "";
    updateTotalTasks();
  }

  function updateTotalTasks() {
    var totalTasks = document.getElementById("totalTasks");
    var todoList = document.getElementById("todoList");
    var tasks = todoList.getElementsByTagName("li");
    var count = 0;
    for (var i = 0; i < tasks.length; i++) {
      if (!tasks[i].querySelector(".checkbox").checked) {
        count++;
      }
    }
    totalTasks.textContent = count;
  }