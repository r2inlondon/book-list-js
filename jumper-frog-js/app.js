// Selectors
const myCanvas = document.getElementById('myCanvas'),
      ctx = myCanvas.getContext('2d');

// Variables
let x = 22, y = 12;
let deltaX = 142, deltaY = 144;

// Event listers
window.addEventListener('keydown', moveFrog, false);

// Functions
function drawFrog(){
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    // the frog
    ctx.beginPath();
    ctx.lineWidth = "2";
    ctx.strokeStyle = "#34eb98";
    ctx.rect(deltaX, deltaY, 10, 5);
    ctx.stroke();
    // fill color
    ctx.fillStyle = "#34eb98";
    ctx.fill();    
}

function moveFrog(e){
    switch(e.keyCode) {
        case 37:            
            // left key pressed            
            deltaX -= x;
            break;
        case 38:
            // up key pressed            
            deltaY -= y;
            break;
        case 39:
            // right key pressed            
            deltaX += x;
            break;
        case 40:
            // down key pressed            
            deltaY += y;
            break;  
    }
    console.log({deltaX, deltaY});
    e.preventDefault();       
    drawFrog()
}

// function startGame(){    
// }

drawFrog();
