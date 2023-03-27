//** =========== === Carousel === ============ */
console.log('Hello World');
//** ==== ====== ===== */
const panels = document.querySelectorAll(`.panel`);

function openImages() {
  console.log('Open Images');
  this.classList.toggle(`open`);
}

function imageTransform(e) {
  //this.classList.toggle(`open`);
  console.log(e.propertyName);
  if (e.propertyName.includes(`flex-grow`)) {
    this.classList.toggle(`open-active`);
  }
}

panels.forEach((image) => image.addEventListener('click', openImages));
panels.forEach((image) =>
  image.addEventListener('transitionend', imageTransform)
);
