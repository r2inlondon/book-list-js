// selectors
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let score = 0;
let lastHole;
let timeUp;

// Events Listener
moles.forEach(mole => { mole.addEventListener('click', e => {
    // Mole hides on click    
    mole.parentElement.classList.remove('up');    
    // score adds up
    scoreBoard.innerText = `${score += 1}`;        
    }); 
});

// functions
const startGame = () => {
    // start the timer
    timeUp = false;
    // set score to zero
    scoreBoard.innerText = 0;
    // Moles start comming up
    moleUp();
    // game timer
    setTimeout(() => {
        // set timeUp to true to stop game
        timeUp = true;        
    },10000)    
}

const randTime = (min, max) => {
    // generate randome number for moles
    return Math.round(Math.random() * (max - min) + min);    
}


function randomHole(max){ 
    // generate random number for the hole' indexes
    const index =  Math.floor(Math.random() * max);
    // select the hole
    const hole = holes[index];
    // prevent mole to appear on same hole in a row
    if(hole === lastHole){
        console.log('Is duplicated Amigo')
        // generate new time
        return randomHole(5);
    };
    // part of the above if
    lastHole = hole;
    
    return hole
}

function moleUp(){
    const time = randTime(120, 1000);
    const hole = randomHole(5);
    // mole will come up
    hole.className += " up";
    // mole will hide  
    setTimeout(function(){        
        hole.classList.remove('up');
        // stop game if timeUp is set to True
        if(timeUp)return;
        moleUp();
    }, time);
    
}

