// Selectors
const myCanvas = document.getElementById('myCanvas'),
      ctx = myCanvas.getContext('2d');

// Variables
let x = 30, y = 15, deltaX = 142, deltaY = 144;    
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

function drawFrogImage(deltaX, deltaY){
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
    // move left and don't exceed the canvas limit
    if(keys[37] && deltaX > 7){
        deltaX -= x;
    }
    // right
    if(keys[39] && deltaX < 277){
        deltaX += x;
    }
    // down
    if(keys[38] ){
        deltaY -= y;
    }
    // up
    if(keys[40] && deltaY < 129){
        deltaY += y;
    }
    
    console.log({deltaX, deltaY})
    
    e.preventDefault();       
    // to draw the frog on the new position
    drawFrogImage(deltaX, deltaY);        
    // check if you won
    didYouWin(deltaX, deltaY);

    drawGrid(gap);
}

function releasedKey(e){
    // mark keys that were released
    keys[e.keyCode] = false;
}

// check if you won
function didYouWin(deltaX, deltaY){   
    if(deltaY === -6){
        alert('YOU WON!')
        startGame();
    }
}

// function drawCar(xPos = 0, yPos = 0){
//     ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);   
//     ctx.beginPath();
//     ctx.fillStyle = "#FF0000";    
//     ctx.fillRect(xPos, yPos, 30, 15);    
// }

// function moveCar(){    
//     while(xPos < 280 ){
//         xPos += 1;        
//         drawCar(xPos, yPos);        
//     }
// }

var xPos = 0;
var yPos = myCanvas.height-30;

function drawCar(){
    ctx.clearRect(xPos, yPos, 30, 15);   
    ctx.beginPath();
    ctx.fillStyle = "#FF0000";    
    xPos += 2;    
    ctx.fillRect(xPos, yPos, 30, 15);
    ctx.closePath();
}


function startGame(){
    deltaX = 127, deltaY = 129;    
    drawFrogImage(deltaX, deltaY);
    drawGrid(gap);    
    setInterval(drawCar, 10);
}
drawGrid(gap);





