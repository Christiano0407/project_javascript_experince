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
    //console.log(true, "Yes, it's adult");
  }
  return adultNew;
});
//console.log(isOlder);

const datePlus = people.some((person) => new Date().getDate());
//console.log('Date Plus ', datePlus);

// Array.prototype.every() // is everyone 19 or older?
const everyPeople = people.every(
  (person) => new Date().getFullYear - person.year >= 19
);
//console.log(everyPeople);

// Array.prototype.find()
const findValue = people.find(
  (person) => new Date().getFullYear() - person.year >= 19
);
//console.log(findValue);

const findTwo = (number) => {
  return number.id === 823423;
};
const newFind = comments.find(findTwo);
//console.log(newFind);

const findConnection = (value) => {
  return value.id === 523423;
};
const plusValue = comments.find(findConnection);
//console.log(plusValue);

comments.find((text, id) => {
  //console.log(text, id);
});
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const peopleFilter = (id) => {
  return id.id === 823423;
};
const filterId = comments
  .filter((person) => person.id === 823423)
  .find(peopleFilter);
//console.log('Filter ', filterId);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const newIndex = comments.findIndex((value) => value.id === 823423);
console.log(newIndex);

const cutPlus = comments.splice(newIndex, 1);
console.log(cutPlus);

const newIndexPlus = comments.findIndex((value) => value.id === 542328);
console.log(newIndexPlus);

const newComments = [
  ...comments.slice(0, newIndex),
  ...comments.slice(newIndex + 1),
  ...comments.slice(2, newIndexPlus),
];
console.log(newComments);
