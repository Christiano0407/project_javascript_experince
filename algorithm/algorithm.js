//** === === === ================================ Algorithm =================================== === === === */
//**! === === */
let numbers = [5, 10, 15, 30, 45, 60, 8, 6];
let numberMaximum = 0;
let position = numbers.length;

function callNumber() {
  for (let i = 0; i < position; i++) {
    if (numberMaximum < numbers[i]) {
      numberMaximum = numbers[i];
      console.log(numberMaximum);
    }
  }
}
//callNumber();

// === Math ===
let maximum = Math.max(5, 10, 15, 30, 45, 60, 8, 6);
//console.log(maximum);

//**! === ===  */
