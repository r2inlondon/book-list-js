// Selectors
const myCanvas = document.getElementById('myCanvas'),
      ctx = myCanvas.getContext('2d');

// Variables
let xFrog = 127, yFrog = 129, xCar = 0, yCar = 114, xSpeed = 1, carWidth = 30, carHeight = 15;   
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
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    base_image = new Image();
    base_image.src = 'img/frog.svg';    

    base_image.onload = function(){
        ctx.drawImage(base_image, x, y, 20, 20);
    }
}

function moveFrog(e){
    // store any key pressed
    keys[e.keyCode] = true;    
    // move left and don't exceed the canvas limit
    if(keys[37] && xFrog > 7){
        xFrog -= 30;
    }
    // right
    if(keys[39] && xFrog < 277){
        xFrog += 30;
    }
    // down
    if(keys[38] ){
        yFrog -= 15;
    }
    // up
    if(keys[40] && yFrog < 129){
        yFrog += 15;
    }
    
    console.log({xFrog, yFrog});
    // to draw the frog on the new position
    drawFrogImage(xFrog, yFrog);        
    // check if you won
    didYouWin(yFrog);
    drawGrid(gap);

    e.preventDefault();       
}

function releasedKey(e){
    // mark keys that were released
    keys[e.keyCode] = false;
}

function drawCar(){
    // console.log(xCar);
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
    if(yFrog === -6){
        alert('YOU WON!')
        startGame();
    }

}

//check if frog has been run over
function didYouDie(){
    console.log({xCar, xFrog});
    if(xFrog  === (xCar + carWidth) && yFrog === yCar){
        alert('DEAD!');
    }    
}

let gameOn = false;

function startGame(){         
    // get Frog on start position by resetting keys values
    xFrog = 127, yFrog = 129
    // draw the frog       
    drawFrogImage();
    drawGrid(gap);
    // Prevents the cars increasing speed when repetitly click on Start Game.
    if(gameOn === false){
        setInterval(drawCar, 20);
        gameOn = true;
    }    
    
}
drawGrid(gap);





