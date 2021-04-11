// instace of giet search
const gitSearch = new GitHub();
const ui = new UI();

document.querySelector('#searchUser').addEventListener('keyup',getUser);

function getUser(event){
  
  const user = event.target.value;

  // check that is not blank
  if(user !== ""){
    gitSearch.getUser(user)
    .then(userData => {
      if (userData.message === "Not Found"){
        console.log('user not found');
      } else {
        ui.showProfile(userData);
      }
    });
    
  } else {
    // clear the profile
  }
}