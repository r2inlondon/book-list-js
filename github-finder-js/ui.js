class UI {
  constructor(){
    this.profile = document.getElementById('profile');
  }

  showProfile(userData){
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
          <!-- avatar photo -->
          <img src="${userData.avatar_url}" class="img-fluid mb-3">
          <!-- bottom to profile -->
          <a href="${userData.url}" target="_blank" class="btn btn-primary btn-block mb-3">View profile</a>
        </div>
        <div class="col-md-9">
          <span class="badge badge-primary">Public Repos: ${userData.public_repos}</span>
          <span class="badge badge-secondary">Public Gists: ${userData.public_gists}</span>
          <span class="badge badge-success">Followers: ${userData.followers}</span>
          <span class="badge badge-primary">Following: ${userData.following}</span>
          <br><br>
          <ul class="list-group">
            <li class="list-group-item">Company: ${userData.company}</li>
            <li class="list-group-item">Website/Blog: ${userData.blog}</li>
            <li class="list-group-item">Location: ${userData.location}</li>
            <li class="list-group-item">Member Since: ${userData.created_at}</li>
          </ul>
        </div>
      </div>
    </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `    
  }
  
  notFound (msg){      
    // Clear any alert
    this.clearAlert();
    // Create Alert Element, class and message
    const div = document.createElement('div');
    div.className = 'alert alert-danger';
    div.innerText = `${msg}`;

    // insert error message
    const searchContainer = document.querySelector('.searchContainer'),
          search = document.querySelector('.search');
    searchContainer.insertBefore(div, search);
    // Clear Alert after 2 seconds
    setTimeout(this.clearAlert,2000);
  }

  // clear alert
  clearAlert(){
    const currentAlert = document.querySelector('.alert');
    if (currentAlert){
      currentAlert.remove();
    }
  }
}