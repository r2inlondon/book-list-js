// Selectors
const myCanvas = document.getElementById('myCanvas'),
      ctx = myCanvas.getContext('2d');

// Variables
let xFrog = 126, yFrog = 128, xJump = 28, yJump = 14, xCar = 0, yCar = 114, xSpeed = 2, carWidth = 30, carHeight = 15;   
let keys = [];
const gap = 15;



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
        // gap = gap * 2;
        // for ( let i = 0; i < 10; i++) {
        //     let lineX = gap + (i * gap );        
        //     ctx.moveTo(lineX, 0);
        //     ctx.lineTo(lineX, 300);
        // }                      
    ctx.lineWidth = 0.7;
    ctx.closePath();
    ctx.stroke();    
}

function drawFrogImage(x = 127, y = 129){
    // ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    base_image = new Image();
    base_image.src = 'img/frog.svg';    

    base_image.onload = function(){
        ctx.drawImage(base_image, x, y, 20, 20);
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
    if(keys[40] && yFrog < 128 ){
        // up frog's jump length
        yFrog += yJump;
    }    
    
    // to draw the frog on the new position
    drawFrogImage(xFrog, yFrog);        
    // check if you won
    didYouWin(yFrog);
    drawGrid(gap);

    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

    e.preventDefault();       
}

function releasedKey(e){
    // mark keys that were released
    keys[e.keyCode] = false;
}

function drawCar(){
    
    if(xCar === 300 ){
        xCar = 0;
    }
    ctx.clearRect(xCar, yCar, carWidth, carHeight);   
    ctx.beginPath();
    ctx.fillStyle = "#FF0000";    
    xCar += xSpeed;     
    ctx.fillRect(xCar, yCar, carWidth, carHeight);
    didYouDie();
    ctx.closePath();
        
}

// check if you won
function didYouWin(yFrog){   
    if(yFrog === 2){
        alert('YOU WON!')
        startGame();
    }

}

//check if frog has been run over
function didYouDie(){
    let xCarW = (xCar + carWidth), xFrogS = ( xFrog - xSpeed);
    console.log({xFrog, yFrog});
    if(xFrog   === (xCar + carWidth) && yFrog === yCar){
        alert('DEAD!');
    }
    
}

let gameOn = false;

function animate(){
    // creates the animation loop    
    requestAnimationFrame(animate)
    // draw the car
    drawCar();
    // draw the street to be
    drawGrid(gap);
}


function startGame(){        
    // Event listers
    window.addEventListener('keydown', moveFrog);
    window.addEventListener('keyup', releasedKey); 

    // get Frog on start position by resetting keys values
    xFrog = 126, yFrog = 128
    animate();
    // draw the frog       
    drawFrogImage();
    drawGrid(gap);
  
}

drawGrid(gap);





