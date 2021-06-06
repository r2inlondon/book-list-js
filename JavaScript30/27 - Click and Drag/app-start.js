// variables
let startX;
let scrollLeft;

// selectors
const items = document.querySelector('.items');

// event listeners
items.addEventListener('mousedown', moveItems);
items.addEventListener('mouseup', stopEvents);

// functions
function moveItems(e){    
    // add active class to scaled and highlight items element
    items.classList.add("active");
    // get the anchor or initial position where the click occurred
    startX = e.pageX - items.offsetLeft
    // where does the scroll was at the time of the intial mousedown event
    scrollLeft = this.scrollLeft;    
    // call function for drag
    this.addEventListener('mousemove', scrollPosition);     
}
// function to stop the drag
function stopEvents(e){    
    items.classList.remove("active");    
    this.removeEventListener('mousemove', scrollPosition); 
}

//function the actual drag
function scrollPosition(e){      
    // recalculate position everytime we move the mouse
    const x = e.pageX - items.offsetLeft
    // this variable is to tell us how far we move from the initial click or x
    const walk = (x - startX) * 2;
    // set the scroll position
    items.scrollLeft = scrollLeft - walk;
    
    e.preventDefault();
}
