  // select all of the checkboxes
  const checkBoxes = document.querySelectorAll('input[type=checkbox]');

  let lastChecked;

  
  // click event works for both mouse and keyboard shift
  checkBoxes.forEach(checkBox => checkBox.addEventListener('click', function(e){ 
    
    let inBetween = false;
    
    if (e.target.checked && e.shiftKey) {
      // this is the checkbox that was check using click and shift
      
      checkBoxes.forEach(checkBox => {
        
        console.log(checkBox);
        // 
        if(checkBox === this || checkBox == lastChecked){
          // add the inBetween mark to the boxes in between first and last box
          inBetween = !inBetween;          
          console.log('inBetween elements here');
        }

        if(inBetween){

          checkBox.checked = true;
        }
      });
    
    }
      
    // this variable will be reassing to the checkbox that was checked without 
    // the shift key
    lastChecked = this;

    
  }))

