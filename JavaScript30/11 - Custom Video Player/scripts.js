//Get elements
const theVideo = document.querySelector('.player__video'),
      playButton = document.querySelector('[title="Toggle Play"]'),
      skipButtons = document.querySelectorAll('[data-skip]');

//Event listeners
playButton.addEventListener('click', playMovie);


//The functions

// plan and pause function
function playMovie(){
  // play and pause video on click
  theVideo.paused ? theVideo.play() : theVideo.pause();
}
  


