// Selectors
const userName = document.getElementById('name'),
      postcode = document.getElementById('postcode'),
      email = document.getElementById('email'),
      mobile = document.getElementById('mobile');

// Event listener
userName.addEventListener('blur', checkName);


// Functions
function checkName (e){
  const re = /\A\w{2,10}$/i;
  const result = re.test(userName.value);

  console.log(result);
}
