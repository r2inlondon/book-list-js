//event Listener
document.querySelector('.get-jokes').addEventListener('click', generateJokes);

// functions
function generateJokes (event){


  const xhr = new XMLHttpRequest();

  xhr.open('GET','http://api.icndb.com/jokes/random/1', true);

  xhr.onload = function () {
    if(this.status === 200){
      let joke = JSON.parse(this.responseText).value[0].joke;
      
      const output = `<ul><li>${joke}</li></ul>`;

      document.querySelector('.jokes-list').innerHTML = output;
    }
  }
  
  xhr.send();
  
  


  event.preventDefault();
}