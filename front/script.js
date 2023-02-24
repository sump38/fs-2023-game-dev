window.onload = () => {


  /** @type {HTMLCanvasElement} */
  const myCanvas = document.getElementById('gameCanvas');
  const ctx = myCanvas.getContext('2d');
  // ctx.strokeRect(100, 100, 50, 50);
  // ctx.clearRect(0,0,640,480);
  // ctx.fillRect(100, 300, 200, 100);
  // ctx.fillText('Hello canvas', 20, 20);

  let x = 0;

  window.setInterval(() => {
    ctx.clearRect(0,0,640,480);
    ctx.strokeRect(x, 100, 40, 40);
    if(x >= 600) {
      x = 0;
    } else {
      x+=2;
    }
  }, 17);




}

console.log('script started');
