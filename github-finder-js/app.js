document.querySelector('#searchUser').addEventListener('keyup',getUser);

function getUser(event){
  
  const user = event.target.value;

  // check that is not blank
  if(user !== ""){
    const gitSearch = new GitHub();
    gitSearch.getUser(user).then(theUser => console.log(theUser));
    
  } else {
    // user doesnt exist
  }
}