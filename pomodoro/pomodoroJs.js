//** === Pomodoro === */
const tasks = [];
let time = 0;
let timer = null;
let timerBreak = null;
let current = null;

const bAdd = document.querySelector(`#bAddInput`);
const itTask = document.querySelector(`#itTaskInput`);
const form = document.querySelector(`#form`);
const taskName = document.querySelectorAll(`#time #taskName`);

/* renderTime();
renderTask();
 */
//** === Formulary */
form.addEventListener(`submit`, (e) => {
  e.preventDefault();

  if (itTask.value !== ``) {
    createTask(itTask.value);
    itTask.value = ``;
    renderTask();
  }
});
//** === Create Task */
const createTask = (value) => {
  const newTask = {
    id: (Math.random() * 100).toString(36).slice(3),
    title: value,
    completed: false,
  };

  tasks.unshift(newTask);
};

//** === Render Task */
const renderTask = () => {
  const html = tasks.map((task) => {
    return `
        <div class="task">
            <div class="completed">${
              task.completed
                ? `<span class="done">Done</span>`
                : `<button class="start-button" data-id="${task.id}">Start</button>`
            }</div>
            <div class="title">${task.title}</div>
        </div>
     `;
  });

  const taskContainer = document.querySelector(`#tasks`);
  taskContainer.innerHTML = html.join(``);
  /* === Button*/
  const startButtons = document.querySelectorAll(`.task .start-button`);
  startButtons.forEach((btn) => {
    btn.addEventListener(`click`, () => {
      if (!timer) {
        const id = btn.getAttribute(`data-id`);
        startButtonHandler(id);
        btn.textContent = `On Progress`;
      }
    });
  });
};

//** === Start Button && Start Timer */
const startButtonHandler = (id) => {
  /* == Time == */
  time = 1 * 60;
  current = id;
  const taskIndex = tasks.findIndex((task) => task.id === id);

  taskName.textContent = tasks[taskIndex].title;

  timer = setInterval(() => {
    timerHandler(id);
  }, 1000);
};

//** === Time Handler  */
const timerHandler = (id) => {
  time--;
  renderTime();
  /* === Clear Interval Timer === */
  if (time === 0) {
    clearInterval(timer);
    /*  current = null;
    taskName.textContent = ``; */
    taskCompleted(id);
    timer = null;
    renderTask();
    startBreak();
  }
};
//** === Start Break */
const startBreak = () => {
  time = 1 * 60;
  taskName.textContent = 'Break';
  timerBreak = setInterval(() => {
    timerBreakHandler();
  }, 1000);
};
//** === TimerBreakHandler */
const timerBreakHandler = () => {
  time--;
  renderTime();
  /* === Clear Interval Timer === */
  if (time === 0) {
    clearInterval(timerBreak);
    current = null;
    timerBreak = null;
    taskName.textContent = '';
    renderTask();
  }
};

//** === Render Time */
const renderTime = () => {
  const timerDiv = document.querySelector(`#time #value`);
  const minutes = parseInt(time / 60);
  const seconds = parseInt(time % 60);

  timerDiv.textContent = `${minutes < 10 ? '0' : ''}${minutes} : ${
    seconds < 10 ? '0' : ''
  }${seconds}`;
};

//** === Task Completed */
const taskCompleted = (id) => {
  const taskIndex = tasks.findIndex((task) => task.id === id);
  tasks[taskIndex].completed = true;
};
