window.addEventListener('load',() => {
  
  const canvas = document.querySelector('#canvas');
  const ctx = canvas.getContext('2d');

  ctx.canvas.width  = window.innerWidth;
  ctx.canvas.height = window.innerHeight;

  // ctx.beginPath();

  let painting = false;

  function startPaiting(){
    painting = true;
  }
  
  function stopPaiting(){
    painting = false;
    
  }

  function draw(e){
    // exit if not painting
    if(!painting) return;
    // pen's thickness
    ctx.lineWidth = 15;
    // pen's border would be rounded
    ctx.lineCap = "round";
    // mouse move
    ctx.lineTo(e.clientX, e.clientY);
    // the actual pen's ink
    ctx.stroke();    
  }

  canvas.addEventListener('mousedown', startPaiting);
  canvas.addEventListener('mouseup', stopPaiting);
  canvas.addEventListener('mousemove', draw);

})