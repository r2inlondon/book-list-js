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
    const hr =  Math.floor(seconds / 60/ 60);
    const min = Math.floor(seconds / 60) - (hr * 60);
    const sec = Math.floor(seconds % 60);
    // convert numbers to string and add 0 at the front when number is < 9  
    renderTimeLeft.innerText = `${hr.toString().padStart(2,'0')}:${min.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`    
    
}

