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

//**! === Practice One: Performance Time and Space === (01) */
//** === Análisis Asintótico === (02) */
function printNumber(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
printNumber(3); // 3 * 3 => 9 (Al cuadrado)
