  // select all of the checkboxes
  const checkBoxes = document.querySelectorAll('input[type=checkbox]');

  let lastChecked;

  let inBetween = false;
  // click event works for both mouse and keyboard shift
  checkBoxes.forEach(checkBox => checkBox.addEventListener('click', function(e){ 

    // click + shift
    if (e.target.checked && e.shiftKey) {
      
      console.log(this);
      checkBoxes.forEach(checkBox => {
        
        // console.log(checkBox);
        // this = the box that got checked first
        if(checkBox === this || checkBox == lastChecked){
          // add the inBetween mark to the boxes in between first and last box
          inBetween = !inBetween;          
          // console.log('here');
        }

        if(inBetween){

          checkBox.checked = true;
        }
      });
    
    }

    lastChecked = this;
  }))

