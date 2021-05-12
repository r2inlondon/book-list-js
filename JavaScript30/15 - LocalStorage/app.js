// Selectors
const addItems = document.querySelector('.add-items'),     
      itemsList = document.querySelector('.plates');

const items = [];

// even listener
addItems.addEventListener('submit', addFood);

// functions
function addFood(e){
  // get user inputn
  const item = addItems.querySelector('input[name=item]');  
  // create li element  
  const li = document.createElement('li');
  // insert input and label into li element
  li.innerHTML = `
    <input type="checkbox" id="item">
    <label for="item">${item.value}</label>`
  // insert li into the DOM
  itemsList.appendChild(li);
  // clear form
  item.value = "";

  e.preventDefault();
}

