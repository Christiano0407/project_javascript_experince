//**TODO === ===================== Day Event ==================== ===  */
//** ==== Variable */
const eventName = document.querySelector(`#eventName`);
const eventDate = document.querySelector(`#eventDate`);
const bAdd = document.querySelector(`#idBAdd`);
const taskContainer = document.querySelector(`#tasksContainer`);
const form = document.querySelector(`#idForm`);

//** ==== Events */
let events = [];
let arr = []; // Add Information

//** === formulary */
form.addEventListener(`submit`, (e) => {
  e.preventDefault();
  addEvent();
});
//** === Add Event */
const addEvent = () => {
  if (eventName.value === '' || eventDate === '') {
    return;
  }
  // => EventDiff => Si ya pasó la  ====
  if (dateDiff(eventDate.value) < 0) {
    return;
  }
  const newEvent = {
    id: (Math.random() * 100).toString(36).slice(3),
    name: eventName.value,
    date: eventDate.value,
  };
  // === Add Array Events ===
  events.unshift(newEvent);

  eventName.value = '';

  renderEvents();
};
//** === DateDiff === return date mls=1000 & min=3600 & day=24 ===  */
const dateDiff = (d) => {
  const targetDate = new Date(d);
  const today = new Date();
  const difference = targetDate.getTime() - today.getTime();
  const days = Math.ceil(difference / (1000 * 3600 * 24));
  return days;
};

//** === render Event = date, name, id => newEvent && data-id => Meta Etiqueta ===  */
const renderEvents = () => {
  const eventHTML = events.map((event) => {
    return `
        <div class="event">
            <div class="days">
                <span class="days-number">${dateDiff(event.date)}</span>
                <span class="days-text">Days</span>
            </div>

            <div class="event-name">${event.name}</div>
            <div class="event-date">${event.date}</div>

            <div class="actions" data-id="${event.id}" >
                <button class="btnDelete">Delete</button>
            </div>
        </div>
     `;
  });
  taskContainer.innerHTML = eventHTML.join('');
};
