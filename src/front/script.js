import './style.css';
import GameObject from '../Engine/GameObjects/game.object';
import Controller from '../Engine/Controllers/keyboard.controller';
import Spaceship from '../Engine/GameObjects/spaceship';


let positionIndicator;
let speedIndicator;

window.onload = () => {

  /** @type {HTMLCanvasElement} */
  const myCanvas = document.getElementById('gameCanvas');
  const ctx = myCanvas.getContext('2d');
  const gameObjects = [];

  const startButton = document.getElementById('startButton');
  const stopButton = document.getElementById('stopButton');

  let gameInterval = null;
  let animationInterval = null;

  let timestampCurrent = performance.now();
  let timestampPrevious = timestampCurrent;

  startButton.addEventListener('click', () => {
    if(!gameInterval) {
      timestampCurrent = performance.now();
      timestampPrevious = timestampCurrent;

      gameInterval = window.setInterval(() => {
        timestampPrevious = timestampCurrent;
        timestampCurrent = performance.now();
        keyboardController.update();
        gameObjects.forEach(obj => {
          obj.update((timestampCurrent - timestampPrevious)* 0.001);
        })
      },17);
    }
    if(!animationInterval) {
      animationInterval = window.setInterval(() => {
        ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);

        ctx.fillStyle = '#121c3b';
        ctx.fillRect(0,0,ctx.canvas.width, ctx.canvas.height);
    
        gameObjects.forEach(obj => {
          obj.render(ctx);
        });
      }, 17);
    }

    startButton.setAttribute('disabled', true);
    stopButton.removeAttribute('disabled')
  });

  stopButton.addEventListener('click', () => {
    if(animationInterval) {
      window.clearInterval(animationInterval);
    }
    if(gameInterval) {
      window.clearInterval(gameInterval);
    }
    animationInterval = null;
    gameInterval = null;
    startButton.removeAttribute('disabled');
    stopButton.setAttribute('disabled', true)
  });


  const keyboardController = new Controller();
  //register debug menu with buttons

  const upArrowIndicator = document.getElementById('upArrowIndicator');
  const downArrowIndicator = document.getElementById('downArrowIndicator');
  const leftArrowIndicator = document.getElementById('leftArrowIndicator');
  const rightArrowIndicator = document.getElementById('rightArrowIndicator');

  keyboardController.register((c) => {
    upArrowIndicator.classList.toggle('active', c.upButton);
    downArrowIndicator.classList.toggle('active', c.downButton);
    rightArrowIndicator.classList.toggle('active', c.rightButton);
    leftArrowIndicator.classList.toggle('active', c.leftButton);
  });


  positionIndicator = document.getElementById('positionIndicator');
  speedIndicator = document.getElementById('speedIndicator');


  const player = new Spaceship(50,50, keyboardController);
  gameObjects.push(player);

}