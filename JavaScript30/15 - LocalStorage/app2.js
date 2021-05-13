const addItems = document.querySelector('.add-items'),     
      itemsList = document.querySelector('.plates');

let items = [];

// even listeners                       
addItems.addEventListener('submit', addItem);


// functions

function addItem(e){
  // get user input
  const text = addItems.querySelector('input[name=item]').value;  
  
  const item = {
    text,
    checkbox: false
  }

  // add new item to array
  items.push(item);
  // insert new item into DOM
  displayItems(items);
  // clear form field
  addItems.reset();
  
  e.preventDefault();
}

function displayItems( plates = []){  
  // save it to html and convert to string using join.
  const html = plates.map((plate, index) => {
    return `  
      <li>        
        <input type="checkbox" id="item-${index}">
        <label for="item-${index}">${plate.text}</label>                  
      </li> 
    `    
  }).join("");

  // insert items into the DOM
  itemsList.innerHTML = html;
    
}