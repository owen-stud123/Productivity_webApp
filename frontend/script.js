// Timer functionality
let timer;
let totalSeconds = 0;

const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const minutesInput = document.getElementById("minutesInput");
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");

startBtn.addEventListener("click", () => {
  clearInterval(timer);
  totalSeconds = parseInt(minutesInput.value) * 60;

  timer = setInterval(() => {
    if (totalSeconds > 0) {
      totalSeconds--;
      const mins = Math.floor(totalSeconds / 60);
      const secs = totalSeconds % 60;

      minutesDisplay.textContent = mins;
      secondsDisplay.textContent = secs < 10 ? "0" + secs : secs;
    } else {
      clearInterval(timer);
      alert("Time's up!");
    }
  }, 1000);
});

resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  totalSeconds = 0;
  minutesDisplay.textContent = "0";
  secondsDisplay.textContent = "00";
  minutesInput.value = 25;
});

// Task list functionality
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

taskForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
});
