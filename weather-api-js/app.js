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
  const city = document.getElementById('city').value
  
  if(city === ""){
    console.log('invalid');
  } else {
    weather.getWeather(city)
      .then(cityData => {
        ui.showMain(cityData);
        ui.showIcon(cityData.cityWeather.weather[0].icon);                    
      });

  }
}



