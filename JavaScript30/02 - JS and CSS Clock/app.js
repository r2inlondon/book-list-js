// Selectors

// select the seconds hand
const secondHand = document.querySelector('.second-hand');

// select the seconds hand
const minHand = document.querySelector('.min-hand');

// select the hours hand
const hourHand = document.querySelector('.hour-hand');

function setDate(){ 
  // Get todays date and time
  const time = new Date();
  // get the seconds of current minute
  const seconds = time.getSeconds();
  // get seconds in Degrees
  const secondsDeg = ((seconds / 60) * 360) + 90;
  // animate hand
  secondHand.style.transform = `rotate(${secondsDeg}deg)`;

  // Minutes
  const minutes = time.getMinutes();
  // get Minutes in Degrees
  const minutesDeg = ((minutes / 60) * 360) + 90;
  // animate hand
  minHand.style.transform = `rotate(${minutesDeg}deg)`;


  // hours
  const hours = time.getHours();
  // get Minutes in Degrees
  const hoursDeg = ((minutes / 24) * 360) + 90;
  // animate hand
  hourHand.style.transform = `rotate(${hoursDeg}deg)`;
  
}

setInterval(setDate, 1000);