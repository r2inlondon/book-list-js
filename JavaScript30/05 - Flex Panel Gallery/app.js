// Selectors
const panels = document.querySelectorAll('.panel');

// Listeners
panels.forEach(panel => panel.addEventListener('click', turnOn));
panels.forEach(panel => panel.addEventListener('transitionend', turnOn2));

// Functions

function turnOn(){
  this.classList.toggle('open');
}

function turnOn2(e){
  console.log(e.propertyName);
  if(e.propertyName.includes('flex')){
     this.classList.toggle('active');
  }
}