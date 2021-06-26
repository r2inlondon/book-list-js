// selectors
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');

// functions
const startGame = () => {
    
}

const randTime = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
    
}

function moleUp(){
    const getHole = function(max){return Math.floor(Math.random() * max);}
    
    const hole = getHole(5);

    console.log(hole);

    holes[hole].className += " up";

    setTimeout(function(){        
        holes[hole].classList.remove('up');
    }, randTime(150,1000));

    
}