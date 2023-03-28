//**TODO ======================= Variable && Const && Let =============================== */
const panel = document.querySelectorAll(`.panel`);
//console.log(panel);

//**! ====== === Functions === ====== */
function pushPlay() {
  this.classList.toggle(`open`);
}

function playAnimation(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes(`flex-grow`)) {
    this.classList.toggle(`open-active`);
  }
}

//**TODO =========== === Events === ================= */
panel.forEach((img) => img.addEventListener('click', pushPlay));
panel.forEach((image) =>
  image.addEventListener(`transitionend`, playAnimation)
);
