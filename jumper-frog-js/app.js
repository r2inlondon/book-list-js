// selectors
const myCanvas = document.getElementById('myCanvas'),
      ctx = myCanvas.getContext('2d');

// variables
let frog = {x:200, y:200}
let x = 140, y = 140;

// functions
function drawFrogPart(){
    ctx.beginPath();
    ctx.lineWidth = "2";
    ctx.strokeStyle = "green";
    ctx.rect(x, y, 10, 5);
    ctx.stroke();
}

function startGame(){    
    drawFrogPart();
}

startGame();