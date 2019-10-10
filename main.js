const taskList = document.querySelector(".task-list");
const removeBtn = document.querySelector(".btn-remove");
const clearBtn = document.querySelector(".btn-clear");

const message = "Task number ";
let taskNumber = 0;

onAddTask = () => {
  taskNumber++;
  const li = document.createElement("li");
  li.textContent = message + `${taskNumber}`;
  taskList.appendChild(li);

  if (taskNumber == 1) {
    removeBtn.disabled = false;
    clearBtn.disabled = false;
  }
};

onRemoveTask = () => {
  taskNumber--;
  taskList.removeChild(taskList.lastChild);

  if (taskNumber == 0) {
    removeBtn.disabled = true;
    clearBtn.disabled = true;
  }
};

onClear = () => {
  taskList.innerHTML = "";
  taskNumber = 0;
  removeBtn.disabled = true;
  clearBtn.disabled = true;
};
