//**TODO === === ========== CARD Project ============= === ===  */
//** ===== Variables */
const inputCard = document.querySelector(`#inputCard`);
const inputDate = document.querySelector(`#inputDate`);
const inputCVV = document.querySelector(`#inputCVV`);
//** ==== Mask Card - Characters */
const maskCardNumber = `####-####-####-####`;
const maskDate = `##/##`;
const maskCVV = `###`;
//** === Add */
let current = ``;
let cardNumber = [];
let dateNumber = [];
let cvvNumber = [];
//** === === Input Event & Validate (A) */
//**!===join >= Unit Array for Characters ("") <= === */
inputCard.addEventListener(`keydown`, (e) => {
  if (e.key === 'tab') {
    return;
  }
  e.preventDefault();
  handleInput(maskCardNumber, e.key, cardNumber);
  inputCard.value = cardNumber.join(``);
});

//** === Input Date (B) */
inputDate.addEventListener(`keydown`, (e) => {
  if (e.key === 'tab') {
    return;
  }
  e.preventDefault();
  handleInput(maskDate, e.key, dateNumber);
  inputDate.value = dateNumber.join(``);
});

//** === Input CVV (C) */
inputCVV.addEventListener(`keydown`, (e) => {
  if (e.key === 'tab') {
    return;
  }
  e.preventDefault();
  handleInput(maskCVV, e.key, cvvNumber);
  inputCVV.value = cvvNumber.join('');
});

//** === Input Mask === Add && Process Numbers && Patroness (A-1) */
//**! === pop => Eliminated ultimate element */
const handleInput = (mask, key, arr) => {
  let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  if (key === `backspace` && arr.length > 0) {
    arr.pop();
    return;
  }
  if (numbers.includes(key) && arr.length + 1 <= mask.length) {
    if (mask[arr.length] === '-' || mask[arr.length] == '/') {
      arr.push(mask[arr.length], key);
    } else {
      arr.push(key);
    }
  }
};
