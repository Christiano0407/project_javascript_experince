//** === ============================================== Methods Array TWO ======================================= === */
// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 },
];
// Some and Every Checks
const yearPeople = people.some(
  (person) => new Date().getFullYear() - person.year <= 19
);
//console.log('Date One ', yearPeople);
const newDate = people.some((people) => {
  return new Date().getFullYear() - people.year <= 25;
});
//console.log('Date Two ', newDate);
// Array.prototype.some() // is at least one person 19 or older?
let isAdult = 19;
const isOlder = people.some((person) => {
  const adultNew = new Date().getFullYear();

  if (adultNew - person.year >= 19) {
    console.log(true, "Yes, it's adult");
  }
  return adultNew;
});
//console.log(isOlder);

// Array.prototype.every() // is everyone 19 or older?
const everyPeople = people.every(
  (person) => new Date().getFullYear - person.year >= 19
);
console.log(everyPeople);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
