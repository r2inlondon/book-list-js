// selectors
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let score = 0;
let lastHole;
let timeUp;

// Events Listener
moles.forEach(mole => { mole.addEventListener('click', e => {    
    mole.parentElement.classList.remove('up');    
    scoreBoard.innerText = `${score += 1}`;        
    }); 
});

// functions
const startGame = () => {
    timeUp = false;
    scoreBoard.innerText = 0;
    moleUp();

    setTimeout(() => {
        timeUp = true;        
    },10000)    
}

const randTime = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);    
}


function randomHole(max){ 
    const index =  Math.floor(Math.random() * max);
    const hole = holes[index];
    
    if(hole === lastHole){
        console.log('Is duplicated Amigo')
        return randomHole(5);
    };
    
    lastHole = hole;
    
    return hole
}


function moleUp(){
    const time = randTime(120, 1000);
    const hole = randomHole(5);

    hole.className += " up";

    setTimeout(function(){        
        hole.classList.remove('up');
        if(timeUp)return;
        moleUp();
    }, time);
    
}

