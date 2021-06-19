// selectors
const   timeLeft = document.querySelector('.display__time-left'),
        beBackAt = document.querySelector('.display__end-time');
        
// functions
let countDown;

function timer(seconds){
    // Get today's date in miliseconds
    const now = Date.now();
    // Convert the seconds (parameter) into miliseconds
    const then = now + seconds * 1000;
    
    renderTime(seconds);
    
    countDown = setInterval(() => {

        const secondsLeft = Math.round((then - Date.now()) / 1000);
        // stop interval when countdown gets to zero
        if(secondsLeft <= 0) clearInterval(countDown);
        // function to         
        renderTime(secondsLeft);
                    
    }, 1000);

    const endTime = new Date(then)
                        .toString()
                        .match(/(\d{2}:\d{2})/)[1];

    renderEnd(endTime);                        
}
    // Render the clock
renderTime = seconds => {
    const hr =  Math.floor(seconds / 60/ 60);
    const min = Math.floor(seconds / 60) - (hr * 60);
    const sec = Math.floor(seconds % 60);
    // convert numbers to string and add 0 at the front when number is < 9  
    timeLeft.innerText = `${hr.toString().padStart(2,'0')}:${min.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`    
}

    //Render be back at time
renderEnd = endTime => {
    beBackAt.innerText = `Be back at ${endTime}`;    
}

// get input from 'Enter Minutes'
document.querySelector('#custom').addEventListener('keyup', (e) => {
    if(e.keyCode === 13){
        const info = parseInt(document.querySelector('input').value);        
        
        if(info === NaN)return;
        console.log(info);
    }     
    e.preventDefault();

});





