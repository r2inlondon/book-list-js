const inputs = document.querySelectorAll('.controls input');

function handleChange (){
  
  // track value changes when moving mouse
  const values = this.value || "";
  // get the data sizing value of input elements
  const pixels = this.dataset


  console.log(pixels);
}

inputs.forEach(input => input.addEventListener('change', handleChange));
inputs.forEach(input => input.addEventListener('mousemove', handleChange));