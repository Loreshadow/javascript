// Sauvegarde les tâches dans le localStorage
function saveTasks() {
  const tasks = [];

  document.querySelectorAll("#pendingList li, #completedList li").forEach(li => {
    const name = li.querySelector(".task-name").textContent;
    const date = li.querySelector(".task-date").textContent;
    const [day, month, year] = date.split("/");
    const isoDate = `${year}-${month}-${day}`;
    const isCompleted = li.parentElement.id === "completedList";

    tasks.push({ name, date: isoDate, isCompleted });
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Charge les tâches depuis le localStorage
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach(task => {
    const li = createTaskElement(task.name, task.date, task.isCompleted);
    if (task.isCompleted) {
      completedList.appendChild(li);
    } else {
      pendingList.appendChild(li);
    }
  });
}

function isDuplicate(taskName) {
  const tasks = [...pendingList.querySelectorAll(".task-name")];
  return tasks.some(task => task.textContent.trim() === taskName);
}

function addTask() {
  const input = document.getElementById("taskInput");
  const taskName = input.value.trim();
  const taskDate = document.getElementById("DateInput").value;

  if (!taskName) {
    alert("Entrez un nom de tâche !");
    return;
  }

  if (!taskDate) {
    alert("Entrez une date !");
    return;
  }

  if (isDuplicate(taskName)) {
    alert("Ce nom de tâche existe déjà !");
    return;
  }

  const li = createTaskElement(taskName, taskDate, false);
  pendingList.appendChild(li);
  input.value = "";
  document.getElementById("DateInput").value = "";

  saveTasks();
}

function createTaskElement(name, date, isCompleted) {
  const li = document.createElement("li");

  const nameSpan = document.createElement("span");
  nameSpan.classList.add("task-name");
  nameSpan.textContent = name;

  const dateSpan = document.createElement("span");
  dateSpan.classList.add("task-date");
  const [year, month, day] = date.split("-");
  const formattedDate = `${day}/${month}/${year}`;
  dateSpan.textContent = formattedDate;

  const today = new Date();
  const taskDateObj = new Date(`${year}-${month}-${day}`);
  today.setHours(0, 0, 0, 0);
  taskDateObj.setHours(0, 0, 0, 0);

  if (taskDateObj < today) {
    dateSpan.classList.add("date-past");
  } else if (taskDateObj.getTime() === today.getTime()) {
    dateSpan.classList.add("date-today");
  } else {
    dateSpan.classList.add("date-future");
  }

  const infoDiv = document.createElement("div");
  infoDiv.classList.add("task-info");
  infoDiv.appendChild(nameSpan);
  infoDiv.appendChild(dateSpan);

  const btnDiv = document.createElement("div");
  btnDiv.classList.add("task-buttons");

  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = isCompleted ? "En cours" : "Terminer";
  toggleBtn.onclick = () => {
    toggleTask(li, isCompleted);
    saveTasks();
  };

  const editBtn = document.createElement("button");
  editBtn.textContent = "Modifier";
  editBtn.onclick = () => {
    editTask(nameSpan, dateSpan);
    saveTasks();
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Supprimer";
  deleteBtn.onclick = () => {
    li.remove();
    saveTasks();
  };

  btnDiv.appendChild(toggleBtn);
  btnDiv.appendChild(editBtn);
  btnDiv.appendChild(deleteBtn);

  if (isCompleted) nameSpan.classList.add("completed");

  li.appendChild(infoDiv);
  li.appendChild(btnDiv);

  return li;
}

function editTask(nameSpan, dateSpan) {
  const currentText = nameSpan.textContent;
  const newName = prompt("Modifier la tâche :", currentText);
  if (newName && newName.trim()) {
    const trimmedNewName = newName.trim();
    if (trimmedNewName === currentText) {
      return; // Aucun changement
    }

    const tasks = [...document.querySelectorAll(".task-name")];
    const duplicate = tasks.some(span =>
      span !== nameSpan && span.textContent.trim() === trimmedNewName
    );

    if (duplicate) {
      alert("Ce nom de tâche existe déjà !");
    } else {
      nameSpan.textContent = trimmedNewName;
    }
  }
}

function toggleTask(taskElement, currentlyCompleted) {
  const name = taskElement.querySelector(".task-name").textContent;
  const date = taskElement.querySelector(".task-date").textContent;
  const [day, month, year] = date.split("/");
  const isoDate = `${year}-${month}-${day}`;
  const newTask = createTaskElement(name, isoDate, !currentlyCompleted);
  taskElement.remove();
  if (currentlyCompleted) {
    pendingList.appendChild(newTask);
  } else {
    completedList.appendChild(newTask);
  }
}

// Charger les tâches au chargement de la page
window.addEventListener("DOMContentLoaded", loadTasks);
