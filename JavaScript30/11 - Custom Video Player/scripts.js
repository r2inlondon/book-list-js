//Get elements
const theVideo = document.querySelector('.player__video'),
      videoScreen = document.querySelector('.viewer'),
      playButton = document.querySelector('[title="Toggle Play"]'),
      progress = document.querySelector('.progress__filled'),
      progressBar = document.querySelector('.progress'),
      volControl = document.querySelector('[name="volume"]'),
      playbackRate = document.querySelector('[name="playbackRate"]'),
      skipButtons = document.querySelectorAll('[data-skip]');

//Event listeners
playButton.addEventListener('click', playMovie);
videoScreen.addEventListener('click', playMovie);
skipButtons.forEach(skipButton => skipButton.addEventListener('click', skipVideo));
volControl.addEventListener('change', SetVolume);
playbackRate.addEventListener('change',SetPlaybackRate);
progressBar.addEventListener('click', scrub);


//The functions

// play and pause function
function playMovie(){    
  // console.log(theVideo.currentTime);  
  let playProgress;
  // play and pause video on click  
  if(theVideo.paused){
    // play the video
    theVideo.play()
    playButton.innerText = '❚ ❚';     
    // calling video progress bar 
    theVideo.ontimeupdate = function(){progressBar()} 
  } else {
    theVideo.pause();
    playButton.innerText = '►';
    }
  //video progress bar function  
  function progressBar(){
    progress.style.flexBasis = `${(100 * (theVideo.currentTime / theVideo.duration)).toFixed(2)}%`;
  }   
}
// click on progress bar to move play
function scrub(e){
  console.log('scrub');
  const scrubTime = (e.offsetX / progressBar.offsetWidth) * theVideo.duration;

  theVideo.currentTime = scrubTime;

}

// function for the volume
function SetVolume(){  
  theVideo.volume = this.value /100;
}

// function play back rate
function SetPlaybackRate(){
  theVideo.playbackRate = playbackRate.value;
}

// skip controls
function skipVideo(e){
  // get the skip value from html data-skip
  const skip = parseInt(e.target.getAttribute('data-skip'));
  // get current video time and apply the fwd or rewind
  vid_currentTime = theVideo.currentTime;
  theVideo.currentTime = vid_currentTime + skip;  
}


