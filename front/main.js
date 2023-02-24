window.onload = ()=> {
  initGame();
};

const initGame = () => {


  const shipImage = new Image();
  shipImage.src = './assets/ship/ship.png';
  shipImage.onload = () => {
    /** @type {HTMLCanvasElement} */
    const canvas = document.getElementById('gameCanvas');
    const context = canvas.getContext('2d');
    context.translate(32,32);
    context.rotate(0.4);
    context.translate(-32,-32);
    context.drawImage(shipImage, 0, 0);
  };

}
