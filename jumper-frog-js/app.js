// Selectors
const myCanvas = document.getElementById('myCanvas'),
      ctx = myCanvas.getContext('2d');

// Variables
let xFrogStart = 130, xFrog = 126, yFrog = 128, frogSize = 16, xJump = 28, yJump = 14, xCar = 0, yCar = 114, carWidth = 30, carHeight = 15;
const speed = getSpeed();
let keys = [];
const gap = 15;

// Functions

function getSpeed(min = 1, max = 10) {
    return Math.random() * (max - min) + min;
  }
  
function drawGrid(gap){
    ctx.beginPath();
    // Horizontal lines
    for(let i = 0; i < 20; i++){
        let lineY = gap + (i * gap);
        ctx.moveTo(0, lineY);
        ctx.lineTo(300, lineY);
    }
                   
    ctx.lineWidth = 0.7;
    ctx.closePath();
    ctx.stroke();    
}

function drawFrogImage(x = 127, y = 129){        
    base_image = new Image();    
    base_image.src = 'img/frog.svg';    
    base_image.onload = function(){
        ctx.drawImage(base_image, x, y, frogSize, frogSize);
    }        
}

function moveFrog(e){
    // store any key pressed
    keys[e.keyCode] = true;    
    // Left - canvas limit
    if(keys[37] && xFrog > 14){
        // left frog's jump length
        xFrog -= xJump;
    }
    // right - canvas limit
    if(keys[39] && xFrog < 266){
        // right frog's jump length
        xFrog += xJump;
    }
    // down - canvas limit
    if(keys[38]){
        // down frog's jump length
        yFrog -= yJump;
    }
    // up - canvas limit
    if(keys[40] && yFrog < xFrogStart ){
        // up frog's jump length
        yFrog += yJump;
    }    
    
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    // to draw the frog on the new position
    drawFrogImage(xFrog, yFrog);
    // check if you won
    // didYouWin(yFrog);
    drawGrid(gap);
    
    console.log({xFrog, yFrog});

    e.preventDefault();       
}

function releasedKey(e){
    // mark keys that were released
    keys[e.keyCode] = false;
}

class Car {
    constructor(x, y, color, speed){
        this.x = x;
        this.y = y;
        this.color = color;
        this.speed = speed;
    }

    draw(){
        //clear car previus position
        ctx.clearRect(this.x - 1, this.y, carWidth, carHeight);
        // reset car
        if(this.x > 300 ){
            this.x = 0;
        }    
        // draw car
        ctx.beginPath();
        ctx.fillStyle = this.color;    
        // move car position
        this.x += this.speed;     
        ctx.fillRect(this.x, this.y, carWidth, carHeight);    
        ctx.closePath();
        
        this.collision();
    }
    
    collision(){
        if( this.x < xFrog + frogSize &&
            this.x + carWidth > xFrog &&
            this.y < yFrog + frogSize &&
            this.y + carHeight > yFrog
            ){
              notification('Frog is dead');
        }
    }
}

const blueCar = new Car(0,114, "blue", 1);
const redCar = new Car(80,114, "red", 1);


// check if you won
function didYouWin(yFrog){   
    if(yFrog === 2){
        alert('YOU WON!')
        startGame();
    }
}


function notification(message){
    const playAgain = alert(`${message}`)
    
    location.reload();
    
}

function draw(){
    ctx.clearRect(xCar, yCar, carWidth, carHeight);
    // ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    
    blueCar.draw();
    
    redCar.draw();
  
        
}

function animate(){    
    // creates the animation loop    
    requestAnimationFrame(animate); 
    draw();
    // draw the street to be
    drawGrid(gap);    
    
}

let gameOn = false;

function startGame(){
    // Trigers Event lister
    window.addEventListener('keydown', moveFrog);
    window.addEventListener('keyup', releasedKey); 
    
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    
    // Reset Frog
    xFrog = 126, yFrog = xFrogStart;      
    drawFrogImage();    

    // Conditional prevents cars from increasing speed when clickling on startGame constantly.
    if(gameOn === false){
        animate();
        gameOn = true;
    }  
        
    drawGrid(gap);
  
}

drawGrid(gap);





