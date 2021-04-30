// Listen for keys
window.addEventListener('keydown', playDrum);

// functions
function playDrum(e){

  // select the audio key
  const drums = document.querySelector(`audio[data-key="${e.keyCode}"]`)  
  // select the letter's buttom 
  const keyDrum = document.querySelector(`[data-key="${e.keyCode}"]`);
  
  // if key doesnt match any sound, exit
  if(!drums) return;
  
  // rewind sound to the start
  keyDrum.classList += ' playing';

  // to be able to play repetitive
  drums.currentTime = 0;

  // remove key border 
  setTimeout(function(){
    keyDrum.classList.remove('playing');
  },45);
  
  // play sound
  drums.play();
}