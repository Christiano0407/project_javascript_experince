//** ===  =========== Array Data ============= ===  */
//**? === Methods: Map(), filter(), sort(), reduce() ===  */

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
];

const people = [
  'Bernhard, Sandra',
  'Bethea, Erin',
  'Becker, Carl',
  'Bentsen, Lloyd',
  'Beckett, Samuel',
  'Blake, William',
  'Berger, Ric',
  'Beddoes, Mick',
  'Beethoven, Ludwig',
  'Belloc, Hilaire',
  'Begin, Menachem',
  'Bellow, Saul',
  'Benchley, Robert',
  'Blair, Robert',
  'Benenson, Peter',
  'Benjamin, Walter',
  'Berlin, Irving',
  'Benn, Tony',
  'Benson, Leana',
  'Bent, Silas',
  'Berle, Milton',
  'Berry, Halle',
  'Biko, Steve',
  'Beck, Glenn',
  'Bergman, Ingmar',
  'Black, Elk',
  'Berio, Luciano',
  'Berne, Eric',
  'Berra, Yogi',
  'Berry, Wendell',
  'Bevan, Aneurin',
  'Ben-Gurion, David',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bennington, Chester',
  'Bierce, Ambrose',
  'Billings, Josh',
  'Birrell, Augustine',
  'Blair, Tony',
  'Beecher, Henry',
  'Biondo, Frank',
];

const data = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck',
];

//**TODO ===================================== */
//**! ===  Filter() === */
const addInventors = inventors.filter((inventor) =>
  inventor.year >= 1500 && inventor.year < 1600 ? true : false
);
//console.log(addInventors);
//console.table(addInventors);

const yearInventor = inventors.filter((inventor) =>
  inventor.year >= 1600 && inventor.year <= 1960 ? true : false
);
//console.table(yearInventor);

const inventorAll = inventors.filter((inventor) =>
  inventor.year >= 1600 && inventor.passed <= 1750 ? true : false
);
//console.table(inventorAll);

const passedOn = inventors.filter((inventor) =>
  (inventor.passed !== 1955) !== inventor.passed <= 1980 ? true : false
);

const passedOnPlus = inventors.filter((inventor) =>
  inventor.passed !== 1955 ? true : false
);
//console.log(passedOn);
//console.log(passedOnPlus);

//**! === map() === */
const newList = inventors.map(
  (people) => ` My name is: ${people.first}  ${people.last}`
);
console.log(newList);

const simpleList = inventors.map(
  (inventor) => `Hello, I'm ${inventor.first} and my year ${inventor.year}`
);
console.log(simpleList);

const listPlus = inventors
  .filter((inventor) => inventor.year >= 1800)
  .map((name) => `Hello I'm ${name.first}`);
console.log(listPlus);

//**! === Sort() === */
/* const yearList = inventors.sort((a, b) => (a.year > b.year ? 1 : -1)); // return
console.log(yearInventor); */

const newListYear = inventors.sort((a, b) => {
  let nameA = a.first.toUpperCase();
  let nameB = b.first.toUpperCase();

  if (nameA < nameB) {
    return -1;
  }

  if (nameA > nameB) {
    return 1;
  }
});
//console.log(newListYear);

//**! === reduce() === */
let inventorsAll = 0;

const sumInventors = inventors.reduce(
  (accumulate, current) => accumulate + current.year,
  0
);
//console.log('sum Years: ' + sumInventors);

const plusYear = inventors
  .sort((a, b) => {
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;

    return lastGuy > nextGuy ? -1 : 1;
  })
  .reduce((total, current) => total + (current.passed - current.year), 0);

//console.log(plusYear);

const peoplePlus = people.sort((a, b) => (a > b ? -1 : 1));

const peoplePlusTwo = people.sort((lastOne, nextOne) => {
  const [last, first] = lastOne.split(', ');
  console.log(last, first);
});

console.log(peoplePlus);
console.log(peoplePlusTwo);

//==
const allDataCar = data.reduce((total, current) => {
  if (!total[current]) {
    total[current] = 0;
  }

  total[current]++;
  return total;
}, {});
console.log(allDataCar);
