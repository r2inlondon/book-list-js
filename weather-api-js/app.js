// create instance 
const weather = new Weather(),
      ui  = new UI();

// selectors
const saveBtn = document.getElementById('w-change-btn'),
      myModalel = document.getElementById('locModal');

// event listener
window.addEventListener('DOMContentLoaded', getStorage)
saveBtn.addEventListener('click', findCity);


// functions

function findCity(){
  let city = document.getElementById('city');
  
  if(city.value === ""){
    console.log('invalid');
  } else {
    // get data from Weather API
    weather.getWeather(city.value)
      .then(cityData => {       
        ui.showMain(cityData);
        ui.showIcon(cityData.cityWeather.weather[0].icon);                    
      });
    // save to local storage
    Store.saveCity(city.value);
  }
  // clear input field in form
  city.value = "";
  // close Modal
  $('#locModal').modal('hide');
}

// retriving city from Local storage
function getStorage(){
  let city = localStorage.getItem('city');

  // set default city if Storage is empty
  if(city === null ){
    city = 'london';
    Store.defaultCity(city);
    Store.displayCity(city);
  } else {
    // display current city
    Store.displayCity(city);
  }
}



