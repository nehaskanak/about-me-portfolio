function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span onclick="toggleCheck(this)">${taskText}</span>
    <button onclick="deleteTask(this)">❌</button>
  `;
  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}

function toggleCheck(element) {
  element.classList.toggle("checked");
}

function deleteTask(button) {
  button.parentElement.remove();
}
