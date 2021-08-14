// Selectors
const myCanvas = document.getElementById('myCanvas'),
      ctx = myCanvas.getContext('2d');

// Variables
let xFrogStart = 130, xFrog = 126, yFrog = 128, frogSize = 16, xJump = 28, yJump = 14, carWidth = 30, carHeight = 15;
const speed = getSpeed();
let keys = [];

// Functions

function getSpeed(min = 1, max = 10) {
    return Math.random() * (max - min) + min;
  }

// **** Street ****
  
// function twoWayStreet(yLane){
//     let streetBorder = yLane;
//     let centreLine = 5;    

//     // draw central line
//     for(let i = 1; i < 9; i++){
//         ctx.beginPath();
//         ctx.moveTo(centreLine, streetBorder * 2);
//         ctx.lineTo(centreLine += 30, streetBorder * 2);
//         centreLine += 30
//         ctx.closePath();
//         ctx.strokeStyle = "gray";
//         ctx.stroke();
//     }
//     // draw street
//     for(let i = 0; i < 2; i++){
//         ctx.beginPath();
//         ctx.strokeStyle = "black";
//         ctx.moveTo(0, streetBorder);    
//         ctx.lineTo(myCanvas.width, streetBorder);
//         streetBorder += 40;
//         ctx.closePath();    
//         ctx.stroke();
//     }
// }

// **** Cars ****

class Car {
    constructor(x, y, color, speed){
        this.x = x;
        this.y = y;
        this.color = color;
        this.speed = speed;
    }

    drawRight(){
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
        // check for collisions
        this.collision();
    }

    drawLeft(){
        //clear car previus position
        ctx.clearRect(this.x + 1, this.y, carWidth, carHeight);
        // reset car
        if(this.x < -30 ){
            this.x = 300;
        }    
        // draw car
        ctx.beginPath();
        ctx.fillStyle = this.color;    
        // move car position
        this.x -= this.speed;     
        ctx.fillRect(this.x, this.y, carWidth, carHeight);    
        ctx.closePath();
        // check for collisions        
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

// create cars, in the lane, direction left
function slowLaneLeft(cars, y, speed){
    slowLaneCarDistance = 20;
    
    let activeCars = [];
    for(let i = 0; i < cars; i++ ){
        activeCars.push(new Car(slowLaneCarDistance += 80, y, "blue", speed));
    }
    return activeCars;
}

// create cars, in the lane, direction left
function slowLaneRight(cars, y, speed){
    let activeCars = [];
    for(let i = 0; i < cars; i++ ){
        activeCars.push(new Car(slowLaneCarDistance -= 80, y, "red", speed));
    }
    return activeCars;
}

function carsAndStreet(streetY, blueCarsNum, blueCarsSpeed, redCarsNum, redCarsSpeed ){

    const blueCar = slowLaneLeft(1, streetY + 2, 0.5);
    const redCar = slowLaneRight(1, streetY + 23, 0.5);
    
    const traffic = {
        blueCar: blueCar,
        redCar: redCar,
        street: function (yLane){
            let streetBorder = yLane;
            let centreLine = 5;    
        
            // draw central line
            for(let i = 1; i < 9; i++){
                ctx.beginPath();
                ctx.moveTo(centreLine, streetBorder * 2);
                ctx.lineTo(centreLine += 30, streetBorder * 2);
                centreLine += 30
                ctx.closePath();
                ctx.strokeStyle = "gray";
                ctx.stroke();
            }
            // draw street
            for(let i = 0; i < 2; i++){
                ctx.beginPath();
                ctx.strokeStyle = "black";
                ctx.moveTo(0, streetBorder);    
                ctx.lineTo(myCanvas.width, streetBorder);
                streetBorder += 40;
                ctx.closePath();    
                ctx.stroke();
            }
        }
    }

    // twoWayStreet(streetY);
    // const blueCar = slowLaneLeft(1, streetY + 2, 0.5);
    // const redCar = slowLaneRight(1, streetY + 23, 0.5);

    return traffic;

}

// ****  FROG ****
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
    // clear canvas
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    // draw frog on new position
    drawFrogImage(xFrog, yFrog);
    // check if you won
    didYouWin(yFrog);
    
    console.log({xFrog, yFrog});

    e.preventDefault();       
}

function releasedKey(e){
    // mark keys that were released
    keys[e.keyCode] = false;
}

// check if you won
function didYouWin(yFrog){   
    if(yFrog < 5){
        notification('YOU WIN');
    }
}

function notification(message){
    const playAgain = alert(`${message}`)
    // reload game
    location.reload();    
}

// *** Game On ***

function draw(traffic, yLane){
    
    traffic.blueCar.forEach( car => car.drawLeft());
    traffic.redCar.forEach( car => car.drawRight());
    traffic.street(yLane);
    
                  
}

function animate(traffic, yLane){    
    // creates the animation loop    
    requestAnimationFrame(() => animate(traffic, yLane)); 
    
    draw(traffic, yLane);    
}

let gameOn = false;

function startGame(){
    // Trigers Event lister
    window.addEventListener('keydown', moveFrog);
    window.addEventListener('keyup', releasedKey); 
    
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    
    // Reset Frog to start game
    xFrog = 126, yFrog = xFrogStart;      
    drawFrogImage();

    // const firstLane = slowLaneLeft(2, 21, 0.5);
    // const secondLane = slowLaneRight(4, 42, 0.5);
    const yLane = 19;
    let traffic = carsAndStreet(yLane, 2, 1, 4, 1);
        
    // Conditional prevents cars from increasing speed when clickling on startGame constantly.
    if(gameOn === false){
        animate(traffic, yLane);
        gameOn = true;
    }            
}

// draw street 
// twoWayStreet(19)







