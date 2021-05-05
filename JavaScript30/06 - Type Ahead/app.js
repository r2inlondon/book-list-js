const apiUrl = ('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json');

const cities = []


fetch(apiUrl)
  .then(response => response.json())
  .then(data => cities.push(...data));

function findMatches(wordToMatch, cities){
  return cities.filter(place => {
    
    const reg = new RegExp(wordToMatch, 'gi');    
    return place.city.match(reg);

  });

}

const suggestions = document.querySelector('.suggestions');

document.querySelector('.search').addEventListener('keyup', displayMatches);  
          
function displayMatches(){
  const found = findMatches(this.value, cities);

  console.log(found);

  const html = found.map(place => {
    return `
    <li>
      <span class="name">${place.city}, ${place.state}</span>
      <span class="population">${place.population}</span>
    </li>
    `    
  }).join('');
  suggestions.innerHTML = html;
  
}


