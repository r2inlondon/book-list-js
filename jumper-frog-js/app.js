// Selectors
const myCanvas = document.getElementById('myCanvas'),
      ctx = myCanvas.getContext('2d');

// Variables
let x = 30, y = 15;
let deltaX = 142, deltaY = 144;
let keys = [];
const gap = 15;


// Event listers
window.addEventListener('keydown', moveFrog);
window.addEventListener('keyup', releasedKey);

// Functions

function drawGrid(gap){
    ctx.beginPath();

    // Horizontal lines
    for(let i = 0; i < 20; i++){
        let lineY = gap + (i * gap);
        ctx.moveTo(0, lineY);
        ctx.lineTo(300, lineY);
    }
    // Vertical lines
    gap = gap * 2;
    for ( let i = 0; i < 10; i++) {
        let lineX = gap + (i * gap );        
        ctx.moveTo(lineX, 0);
        ctx.lineTo(lineX, 300);
    }  
                    
    ctx.lineWidth = 0.7;
    ctx.closePath();
    ctx.stroke();
    
}

function drawFrogImage(){
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    base_image = new Image();
    base_image.src = 'img/frog.svg';    
    base_image.onload = function(){
        ctx.drawImage(base_image, deltaX, deltaY, 20, 20);
    }
}

function moveFrog(e){
    // store any key pressed
    keys[e.keyCode] = true;
    
    // left
    if(keys[37]){
        deltaX -= x;
    }
    // right
    if(keys[39]){
        deltaX += x;
    }
    // down
    if(keys[38]){
        deltaY -= y;
    }
    // up
    if(keys[40]){
        deltaY += y;
    }

    
    console.log({deltaX, deltaY});
    
    e.preventDefault();       
    // to draw the frog on the new position
    drawFrogImage();
    // check if you won
    crossedStreet(deltaY);
    drawGrid(gap);
}

function releasedKey(e){
    // mark keys that were released
    keys[e.keyCode] = false;
}

// check if you won
function crossedStreet(deltaY){
    if(deltaY === -6){
        alert('YOU WON!');
    }
}

function startGame(){
    deltaX = 127, deltaY = 129;    
    // drawFrog();
    drawFrogImage();
    drawGrid(gap);
}
drawGrid(gap);


