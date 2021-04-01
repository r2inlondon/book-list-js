/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

//Variables
let min = 1,
    max = 10,
    randomN = generateRandomN(min, max),
    winNumber = parseInt(randomN.toFixed()),
    attempsLeft = 3;

// Selectors
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      userInput = document.querySelector('#user-input'),
      guessBnt = document.querySelector('#guess-btn'),
      message = document.querySelector('.message');

// Show min and max range UI message
minNum.innerText = min;
maxNum.innerText = max;

// event listeners
  // play game
guessBnt.addEventListener('click', play);
  // play again
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
});


// functions
function play(e){
 
  // convert user input from string to number
  let userNumber = parseInt(userInput.value);

  if( userNumber < min || userNumber > max || isNaN(userNumber)){
    sendMessage(`Wrong input, enter a number between ${min} and ${max}`, 'red');
  }  
  // Check if won
  if(userNumber === winNumber){    
    userInput.disabled = true;
    gameOver(`${userNumber} is Correct!!`, true);
  // Wrong guess
  }else if (userNumber >= min && userNumber <= max) {
    attempsLeft -= 1;
    sendMessage(`${userNumber} is wrong, try again, ${attempsLeft} guesses left`, 'black')
    //clear input
    userInput.value = "";
    // validate number of attemps left
    if(attempsLeft <= 0){
      gameOver(`Sorry, you lost, the number was ${winNumber}`, false);                  
    }
  }        
}

//Game Message
function sendMessage(msg, color){
  message.style.color = color;
  userInput.style.borderColor = color;
  message.innerText = msg;
}

//Genarete random number
function generateRandomN(min, max) {
  return Math.random() * (max - min) + min;
}

// game Over
function gameOver(msg, won){
  let color;
  won === true ? color = 'green' : color = 'red';
  userInput.disabled = true;
  sendMessage(msg, color);
  // modify buttom
  guessBnt.value = "Play Again";
  guessBnt.className += 'play-again';  
}