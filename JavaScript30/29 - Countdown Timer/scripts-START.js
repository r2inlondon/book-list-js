// selectors
const renderTimeLeft = document.querySelector('.display__time-left');

// functions
let countDown;

function timer(seconds){
    // Get today's date in miliseconds
    const now = Date.now();
    // Convert the seconds (parameter) into miliseconds
    const then = now + seconds * 1000;

    
    displayTime(seconds);
    
    countDown = setInterval(() => {

        const secondsLeft = Math.round((then - Date.now()) / 1000);
        // stop interval when countdown gets to zero
        if(secondsLeft <= 0) clearInterval(countDown);
        
        
        displayTime(secondsLeft);
                    
    }, 1000);
    
}

displayTime = seconds => {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    renderTimeLeft.innerText = `${min}:${sec}`
    console.log({min, sec});
}