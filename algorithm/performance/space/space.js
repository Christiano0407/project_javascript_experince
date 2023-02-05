//** === Complex Spacial === Memory === Algorithm */
let number = [1, 2, 3, 4, 5];
let numbers = [5, 10, 15, 30, 45, 60, 8, 6];
let numbersPlus = [10, 20, 30, 40, 50];
let plus = [...number, ...numbers, ...numbersPlus];
/* console.log(plus); */

function counter(n) {
  for (let i = 0; i < n.length; i++) {
    console.log(n[i]);
  }
}
counter(number);

function repeat(arr) {
  let array_repeat = arr;
  return console.log(array_repeat);
}
repeat(numbers);

function convertString(arr) {
  let result = arr.map((item) => item.toString());
  return console.log(result);
}
convertString(numbersPlus);

//** === (BI) Two Dimension === */
function dimension(value) {
  let x = new Array(value);

  for (let i = 0; i < value; i++) {
    x[i] = new Array(value).fill(0);
  }
  return console.log(x);
}
dimension(2);
