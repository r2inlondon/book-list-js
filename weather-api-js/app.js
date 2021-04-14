// create instance 
const weather = new Weather(),
      ui  = new UI();

// selectors
const saveBtn = document.getElementById('w-change-btn'),
      myModalel = document.getElementById('locModal');

// event listener
saveBtn.addEventListener('click', findCity);


// functions

function findCity(){
  let city = document.getElementById('city');
  
  if(city.value === ""){
    console.log('invalid');
  } else {
    
    weather.getWeather(city.value)
      .then(cityData => {       
        ui.showMain(cityData);
        ui.showIcon(cityData.cityWeather.weather[0].icon);                    
      });

  }
  // clear input field in form
  city.value = "";
}



