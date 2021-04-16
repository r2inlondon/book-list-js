// Selectors
const userName = document.getElementById('name'),
      postcode = document.getElementById('postcode'),
      email = document.getElementById('email'),
      mobile = document.getElementById('mobile');

// Event listener
userName.addEventListener('blur', checkName);
postcode.addEventListener('blur', checkPostcode);
email.addEventListener('blur', checkEmail);
mobile.addEventListener('blur', checkMobile);

// Functions
    //Validate Name
function checkName (e){
  // Regex for name 2 to 10 Characters
  const re = /\A\w{2,10}$/;
  
  if(re.test(userName.value)){
    userName.classList.remove('is-invalid');    
  } else {
    userName.className += " is-invalid";
  }
}
    //validate postcode
function checkPostcode(){
  // Regex for postcode UK
  const re = /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i;

  if(re.test(postcode.value)){
    postcode.classList.remove('is-invalid');    
  } else {
    postcode.className += " is-invalid";
  }
}

function checkEmail (){
  // Regex for email
  const re = /\S+@\S+\.\S+/;

  if(re.test(email.value)){
    email.classList.remove('is-invalid');    
  } else {
    email.className += " is-invalid";
  }
}

function checkMobile(){
  // Regex for mobile
  const re = /^\(?\d{4}\)?[._ ]?\d{4}[._ ]?\d{3}$/;

  if(re.test(mobile.value)){
    mobile.classList.remove('is-invalid');    
  } else {
    mobile.className += " is-invalid";
  }

}