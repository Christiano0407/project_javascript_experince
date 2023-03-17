console.log('Music');
//** === === Const and Variables === === */
const keys = document.querySelectorAll(`.key`);

//*! === Functions and Events ===  */

const playMusic = (event) => {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  console.log(audio);

  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  console.log(key);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play(); // stop audio
  key.classList.add(`playing`);
  //key.classList.remove(`playing`);
  //setTimeout(() => {}, 0.07);
};

function removeTransition(e) {
  console.log(e);
  if (e.propertyName !== 'transform') return;
  this.classList.remove(`playing`);
  //console.log(e.propertyName);
}

keys.forEach((key) => key.addEventListener('transitionend', removeTransition));

//** === Window === */
window.addEventListener('keydown', playMusic);
