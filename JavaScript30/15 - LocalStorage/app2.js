const addItems = document.querySelector('.add-items'),     
      itemsList = document.querySelector('.plates');

let items = [];

// even listeners                       
addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleCheckbox);

// functions

function addItem(e){
  // get user input
  const text = addItems.querySelector('input[name=item]').value;  
  // create new item object
  const item = {
    text,
    done: false
  }
  // add new item to array
  items.push(item);
  // insert new item into DOM
  displayItems(items);
  // clear form field
  addItems.reset();
  // prevent window from reloading  
  e.preventDefault();
}

function displayItems( plates = []){  
  // save it to html and convert to string using join.
  const html = plates.map((plate, index) => {
    return `  
      <li>        
        <input type="checkbox" data-index=${index} id="item-${index}">
        <label for="item-${index}">${plate.text}</label>                  
      </li> `    
  }).join("");
  // insert items into the DOM
  itemsList.innerHTML = html;  
}

function toggleCheckbox(e){
  // if it doesnt match, then exit function
  if(!e.target.matches('input')) return;
  // grab the input element
  const ele = e.target;
  // Get the index from the input element
  const index = ele.dataset.index;
  // find item in array and update done attribute
  items[index].done = !items[index].done;  
}