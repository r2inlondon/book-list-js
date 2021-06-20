// selectors
const   timeLeft = document.querySelector('.display__time-left'),
        beBackAt = document.querySelector('.display__end-time'),
        timerButtons = document.querySelector('.timer__controls'),
        tapTitle = document.querySelector('title');
        
// functions
let countDown;

function timer(seconds){
    // Clear user's input
    document.querySelector('input').value = "";
    // Get today's date in miliseconds
    const now = Date.now();
    // Convert the seconds (parameter) into miliseconds
    const then = now + seconds * 1000;
    // show the starting time
    renderTime(seconds);
    // reset count to stop previous timer
    clearInterval(countDown);
    // this is the actual count down function
    countDown = setInterval(() => {
        // magic happens in this line
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        // stop interval when countdown gets to zero
        if(secondsLeft <= 0) clearInterval(countDown);
        // function to         
        renderTime(secondsLeft);
                    
    }, 1000);
    // save the time back in a variable
    const endTime = new Date(then)
                        .toString()
                        .match(/(\d{2}:\d{2})/)[1];
    // display time back
    renderEnd(endTime);                        
}
    // Render the clock
renderTime = seconds => {    
    // convert seconds to hr, min and sec
    const hr =  Math.floor(seconds / 60/ 60);
    const min = Math.floor(seconds / 60) - (hr * 60);
    const sec = Math.floor(seconds % 60);
    // convert numbers to string and add 0 at the front when number is < 9  
    timeLeft.innerText = `${hr.toString().padStart(2,'0')}:${min.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`    
    // show timmer on browser's tap
    tapTitle.innerText = timeLeft.innerText;
}

//Render be back at time
renderEnd = endTime => {
    beBackAt.innerText = `Be back at ${endTime}`;    
}

// get input from 'Enter Minutes'
document.querySelector('#custom').addEventListener('submit', (e) => {       
    // get the user's input and convert to numbers    
    let info = parseInt(document.querySelector('input').value);       
    // exit function when invalid input
    if(info === NaN)return;
    // convert minutes to seconds
    info = info * 60;    
    // run timer
    timer(info);
                          
    e.preventDefault();
});

// Button functions
timerButtons.addEventListener('click', (e) => {
    // get data-time from the button via click
    const seconds = e.target.getAttribute('data-time');
    // exit when clicking on 'enter minutes'
    if(seconds === null)return;
    // run timer
    timer(seconds);        
});








