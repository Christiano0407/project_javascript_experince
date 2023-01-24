//** === Pomodoro === */
const tasks = [];
let time = 0;
let timer = null;
let timerBreak = null;
let current = null;

const bAdd = document.querySelector(`#bAddInput`);
const itTask = document.querySelector(`#itTaskInput`);
const form = document.querySelector(`#form`);
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
};
