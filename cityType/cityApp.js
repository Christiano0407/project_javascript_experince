const search = document.querySelector(`.search`);
const suggestions = document.querySelector(`.suggestions`);
const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
//console.log(cities);

const callCities = async () => {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    cities.push(...data);
  } catch (err) {
    console.log('We have error an call API Cities');
  }
};
callCities();

/* fetch(endpoint)
  .then((response) => response.json())
  .then((data) => cities.push(...data)); */

const findMatch = (wordToMatch, cities) => {
  try {
    return cities.filter((place) => {
      const regex = new RegExp(wordToMatch, 'gi');
      return place.city.match(regex) || place.state.match(regex);
    });
  } catch (error) {
    console.log('We have Two Error');
  }
};
//**! ADD Expr Regular */
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
  try {
    const keyMatch = findMatch(this.value, cities);
    console.log(keyMatch);
    const html = keyMatch
      .map((town) => {
        const regex = new RegExp(this.value, 'gi');
        const townName = town.city.replace(
          regex,
          `<span class="h1">${this.vale}</span>`
        );
        return `
        <li>
             <span class="h1">${town.city}, ${town.state}</span>
             <span class="population">${numberWithCommas(
               town.population
             )}</span>
             <span class="latitude">${numberWithCommas(town.latitude)}</span>
        </li>
        `;
      })
      .join('');
    suggestions.innerHTML = html;
  } catch (error) {
    console.log('Error Server API');
  }
}

search.addEventListener(`change`, displayMatches);
search.addEventListener(`keyup`, displayMatches);
