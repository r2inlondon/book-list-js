const inputs = document.querySelectorAll('.controls input');

function handleChange (){
  
  // track value changes when moving mouse
  const values = this.value;
  // get the data sizing value of input elements
  const pixels = this.dataset.sizing || "";

  // change value of css variables
  document.documentElement.style
    .setProperty(`--${this.name}`, `${values + pixels}`);
  
}

inputs.forEach(input => input.addEventListener('change', handleChange));
inputs.forEach(input => input.addEventListener('mousemove', handleChange));