//**TODO === ==== ===================== Rating =================== ===============  */
//** === Variable */
const ratingContainer = document.querySelector(`#rating`);
const limit = 5; // > Stars
let currentValue = 0;

//**! === Create Array of Parameter === => item == " _" >= No element => map((item, i)) */
//**! ==== Data-position >= Use Web Component */
//**! === join("") >= Unit Array */
//** === Array & Web Component Star (A) */
const html = Array.from(Array(limit)).map((_, i) => {
  return `
    <div class="item item-${i}" data-position="${i}" ></div>
    `;
});
ratingContainer.innerHTML = html.join('');

//** === Mouse = Star (A-1) */
document.querySelectorAll(`.item`).forEach((item) => {
  item.addEventListener(`mouseover`, (e) => {
    e.preventDefault();
    const position = item.getAttribute(`data-position`);

    document.querySelectorAll(`.item`).forEach((itemElement) => {
      if (itemElement.classList.contains(`item-full`)) {
        itemElement.classList.remove(`item-full`);
      }
    });

    for (let i = 0; i <= position; i++) {
      const squareColor = document.querySelector(`.item-${i}`);
      if (!squareColor.classList.contains(`item-full`)) {
        squareColor.classList.add(`item-full`);
      }
    }
  });
});
