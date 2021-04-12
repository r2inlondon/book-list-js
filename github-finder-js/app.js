// instace of giet search
const gitSearch = new GitHub();
const ui = new UI();

document.querySelector('#searchUser').addEventListener('keyup',getUser);

function getUser(event){
  
  const user = event.target.value;

  // check that is not blank
  if(user !== ""){
    gitSearch.getUser(user)
    .then(data => {      
      // if blank show alert
      if (data.profile.message === "Not Found"){
        ui.notFound('User Not Found' )
      } else {
        // display user's profile
        ui.showProfile(data.profile);
        // display user's repos
        ui.showRepos(data.repos);
      }
    });    
  } else {
    // clear the profile
    ui.clearProfile();
  }
}