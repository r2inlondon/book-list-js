class Store {
  static defaultCity(city){
     // set default city
     console.log(`default City to ${city}`);
     city = 'London';
     localStorage.setItem('city',JSON.stringify(city));
  }

  static displayCity(city){
    weather.getWeather(city)
      .then(cityData => {       
        ui.showMain(cityData);
        ui.showIcon(cityData.cityWeather.weather[0].icon);                    
    });
  }

  static saveCity(city){
    localStorage.setItem('city',city);
  }
}