class GitHub {
  constructor(){
    this.clientID = '136fe3cdeab12a11bb30';
    this.clientSecret = '09d3e8642ac5a1ebd21b5c19dd059f3a7d013ae5';
    this.reposCount = 5;
    this.reposSort = 'created: asc';
  }

  async getUser(user) {
    // await response to fetch users
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientID}&${this.clientSecret}`);
    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.reposCount}&sort=${this.reposSort}&client_id=${this.clientID}&${this.clientSecret}`);
  
    // only proceed once is resolved
    const profile = await profileResponse.json();
    const repos = await reposResponse.json();
    
    //only proceed once second promise is resolved
    return {
      profile, 
      repos
    }
    
  }
}
