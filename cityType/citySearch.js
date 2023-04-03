const cities = [];
const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
//console.log(endpoint);
const searchInput = document.querySelector(`.search`);
const suggestions = document.querySelector(`.suggestions`);

/* const addApiCities = async () => {
  try {
    const blob = await fetch(
      'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
    );
    //console.log(blob);
    const data = await blob.json();
    // console.log(data);
    cities.push(...data);
    //console.log(cities);
    findMatches(wordToMatch, cities);
  } catch (error) {
    console.log('Error with Call API');
  }
};
console.log(addApiCities()); */
fetch(endpoint)
  .then((response) => response.json())
  .then((data) => cities.push(...data));

const findMatches = (wordToMatch, cities) => {
  return cities.filter((place) => {
    const regex = new RegExp(wordToMatch, `gi`);
    return place.city.match(regex) || place.state.match(regex);
  });
};
//console.log(findMatches('new', cities));

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
  const keyMatch = findMatches(this.value, cities);
  console.log(keyMatch);
  const html = keyMatch
    .map((city) => {
      const regex = new RegExp(this.value, 'gi');
      const cityName = city.city.replace(
        regex,
        `<span class="h1">${this.value}</span>`
      );
      return `
        <li>
         <span class="name">${cityName}, ${city.state}</span>
         <span class="population">${numberWithCommas(city.population)}</span>
        </li>
      `;
    })
    .join('');
  suggestions.innerHTML = html;
}
//displayMatches();

searchInput.addEventListener(`change`, displayMatches);
searchInput.addEventListener(`keyup`, displayMatches);
