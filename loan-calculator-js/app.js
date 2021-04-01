//Selectors
const loanForm = document.querySelector('#loan-form');
const monthlyP = document.querySelector('#monthly-payment');
const totalP = document.querySelector('#total-payment');
const totalI = document.querySelector('#total-interest');
const loader = document.querySelector('#loading');
const results = document.querySelector('#results');

//Event listener
loanForm.addEventListener('submit', function(e){
  // hide previous results
  results.hidden = true;
  //show loader
  loader.removeAttribute('hidden');
  // run calculation
  setTimeout(calculate, 1500);
  
  e.preventDefault();
});

//Funcitons
function calculate(e){
  const amount = document.querySelector('#amount').value;
  const interest = document.querySelector('#interest').value;
  const years = document.querySelector('#years').value;


  const principal = parseFloat(amount);
  const calculatedInterest = parseFloat(interest) / 100 / 12;
  const calculatedPayments = parseFloat(years) * 12;

  // Compute monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal*x*calculatedInterest)/(x-1);

  if(isFinite(monthly)) {
    monthlyP.value = monthly.toFixed(2);
    totalP.value = (monthly * calculatedPayments).toFixed(2);
    totalI.value = ((monthly * calculatedPayments)-principal).toFixed(2);
    // hide the loader
    loader.hidden = true;
    // show results
    results.removeAttribute('hidden');
    showResults();
  } else {
    showError('Please check your numbers');
  }    
}

function showError(error) {
  //built the error element
  const errorDiv = document.createElement('div');
  errorDiv.className = 'alert alert-danger';
  errorDiv.innerText = error;
  // display error before heading
  const heading = document.querySelector('.heading')
  document.querySelector('.card').insertBefore(errorDiv,  heading);
  // hide loader and results
  loader.hidden = true;
  results.hidden = true;
  // Clear error from screen
  setTimeout(clearError, 3000);
}

function clearError(){
  document.querySelector('.alert').remove();
}

