// selectors
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let score = 0;

// Events Listener
moles.forEach(mole => { mole.addEventListener('click', e => {    
    scoreBoard.innerText = `${score += 1}`;    
    })
});

// functions
const startGame = () => {
    
}

const randTime = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);    
}

function moleUp(){
    const getHole = function(max){return Math.floor(Math.random() * max);}
    
    const hole = getHole(5);

    holes[hole].className += " up";

    setTimeout(function(){        
        holes[hole].classList.remove('up');
    }, randTime(150,900));    
}

