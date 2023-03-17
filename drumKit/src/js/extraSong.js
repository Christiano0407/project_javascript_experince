//** ================ Extra Project Song Practice ======================= */
const keys = document.querySelectorAll(`.key`);

const playSing = (event) => {
  const keyDiv = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  console.log(keyDiv);

  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  console.log(audio);

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();
  keyDiv.classList.add(`playing`);
};

function removeSong(e) {
  console.log(e);
  if (e.propertyName !== 'transform') return;
  this.classList.remove(`playing`);
}

//** ==== Transition Play and Remove Song ====  */
keys.forEach((sing) => sing.addEventListener('transitionend', removeSong));

//*TODO =========== Window */
window.addEventListener('keydown', playSing);
