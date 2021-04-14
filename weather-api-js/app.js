// create instance 
let weather = new Weather('london');
const ui  = new UI();

// selectors
const saveBtn = document.getElementById('w-change-btn'),
      myModalel = document.getElementById('locModal');

// event listener
window.addEventListener('DOMContentLoaded', loadCity)
saveBtn.addEventListener('click', getCity);

// functions
function getCity(){
  city = document.getElementById('city').value;
  
  weather.changeCity(city);

  weather.getWeather()
    .then(cityData => {               
      ui.showMain(cityData);   
    // clear input field in form
    document.getElementById('city').value = "";
    // close Modal
    $('#locModal').modal('hide');  
    });
  // save to local storage
  // Store.saveCity(city.value);
}


function loadCity(){
  
  weather.getWeather()
  .then(cityData => {       
    ui.showMain(cityData);        
  });
}

// // retriving city from Local storage
// function getStorage(){
//   let city = localStorage.getItem('city');

//   // set default city if Storage is empty
//   if(city === null ){
//     city = 'london';
//     Store.defaultCity(city);
//     Store.displayCity(city);
//   } else {
//     // display current city
//     Store.displayCity(city);
//   }
// }



