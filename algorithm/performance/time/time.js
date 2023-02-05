//** === Performance Time => performance.now === */
const performance = require(`perf_hooks`);

//** ===  */
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function numberNow(n) {
  for (let i = 0; i < n.length; i++) {
    console.log(n[i]);
  }
}
//numberNow(number);
//** === */
function counter(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}
let init_time = performance.performance.now();
counter(5);
let finished_time = performance.performance.now();
const duration = init_time - finished_time;
console.log(`This algorithm duration is: ${duration}ms`);

//** === === Time === === */
function timer(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}
console.time(`Time-init`);
timer(15);
console.timeEnd(`Time-End`);
