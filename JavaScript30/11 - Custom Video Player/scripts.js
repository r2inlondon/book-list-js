//Get elements
const theVideo = document.querySelector('.player__video'),
      videoScreen = document.querySelector('.viewer'),
      playButton = document.querySelector('[title="Toggle Play"]'),
      progress = document.querySelector('.progress__filled'),
      skipButtons = document.querySelectorAll('[data-skip]');

//Event listeners
playButton.addEventListener('click', playMovie);
videoScreen.addEventListener('click', playMovie);
skipButtons.forEach(skipButton => skipButton.addEventListener('click', skipVideo));

//The functions

// plan and pause function
function playMovie(){    
  // console.log(theVideo.currentTime);
  
  let playProgress;
  
  // play and pause video on click
  // theVideo.paused ? theVideo.play() : theVideo.pause();

  if(theVideo.paused){
    // play the video
    theVideo.play()
    // calling video progress bar 
    theVideo.ontimeupdate = function(){progressBar()} 
  } else {

    theVideo.pause();
    }

  //video progress bar function  
  function progressBar(){
    progress.style.flexBasis = `${(100 * (theVideo.currentTime / theVideo.duration)).toFixed(2)}%`;
  }
    
}
  
// skip controls
function skipVideo(e){
  // get the skip value from html data-skip
  const skip = parseInt(e.target.getAttribute('data-skip'));
  // get current video time and apply the fwd or rewind
  vid_currentTime = theVideo.currentTime;
  theVideo.currentTime = vid_currentTime + skip;  
}

