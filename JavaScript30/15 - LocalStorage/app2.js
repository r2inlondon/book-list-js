const addItems = document.querySelector('.add-items'),     
      itemsList = document.querySelector('.plates');

let items = [];

// even listeners                       
addItems.addEventListener('submit', addItem);


// functions

function addItem(e){
  console.log('Item Added');

  e.preventDefault();
}