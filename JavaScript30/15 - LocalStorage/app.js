const addItems = document.querySelector('.add-items'),
      itemsList = document.querySelector('.plates');

const items = [];

addItems.addEventListener('submit', addFood);


function addFood(e){
  console.log("Added");


  e.preventDefault();
}