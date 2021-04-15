// Storage Instance
const store = new Store();   
// Get stored location data from Local Storage
const weatherLocation = store.getCityStorage();

// Weather instance to fetch from API
const weather = new Weather(weatherLocation.city);

// UI ( user interface) Instace
const ui  = new UI();

// Get Weather on DOM load
window.addEventListener('DOMContentLoaded', loadCity)

document.getElementById('w-change-btn').addEventListener('click', function(){
  // get user input
  city = document.getElementById('city').value;
  // send city to API
  weather.changeCity(city);
  // set location in LS
  store.setCity(city);
  // Get Weather
  loadCity();
  // clear input field in form
  document.getElementById('city').value = "";
  // close Modal using JQuery ( is a boostrap thing)
  $('#locModal').modal('hide');    
});

// Fetch Weather from API
function loadCity(){  
  weather.getWeather()
  .then(cityData => {        
    ui.showMain(cityData.reponseData);        
  });
}



