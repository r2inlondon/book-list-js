window.addEventListener('load',() => {
  
  const canvas = document.querySelector('#canvas');
  const ctx = canvas.getContext('2d');

  ctx.canvas.width  = window.innerWidth;
  ctx.canvas.height = window.innerHeight;

  // ctx.beginPath();
  ctx.arc(400, 275, 100, 0, 2 * Math.PI);
  ctx.stroke(); 


})