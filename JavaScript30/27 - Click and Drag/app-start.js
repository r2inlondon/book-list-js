// selectors
const items = document.querySelector('.items');

// event listeners
items.addEventListener('mousedown', moveItems);
items.addEventListener('mouseup', stopItems);

// functions
function moveItems(e){    
    // add active class to scaled and highlight items element
    items.classList.add("active");
    // call function for drag
    this.addEventListener('mousemove', scrollPosition);     
}
// function to stop the drag
function stopItems(e){    
    items.classList.remove("active");    
    this.removeEventListener('mousemove', scrollPosition); 
}

//function the actual drag
function scrollPosition(e){      
    // set scroll postion
    items.scrollTo(e.clientX * 2.7,0);    
}
