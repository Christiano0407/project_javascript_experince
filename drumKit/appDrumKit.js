console.log('Music');
//** === === Const and Variables === === */
const keyAll = document.querySelectorAll(`.key`);

//*! === Functions and Events ===  */
window.addEventListener('keydown', (event) => {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  console.log(audio);

  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  console.log(key);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play(); // stop audio
  key.classList.add(`playing`);
  //key.classList.remove(`playing`);
  setTimeout(() => {}, 0.07);
});

const removeTransition = (e) => {
  console.log(e);
};

keyAll.forEach((play) => {
  return play.addEventListener('transitionend', removeTransition);
});
