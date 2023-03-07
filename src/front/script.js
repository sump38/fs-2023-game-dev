import './style.css';
import GameObject from '../Engine/GameObjects/game.object';
import Controller from '../Engine/Controllers/keyboard.controller';
import Spaceship from '../Engine/GameObjects/spaceship';

window.onload = () => {

  /** @type {HTMLCanvasElement} */
  const myCanvas = document.getElementById('gameCanvas');
  const ctx = myCanvas.getContext('2d');
  const gameObjects = [];

  const startButton = document.getElementById('startButton');
  const stopButton = document.getElementById('stopButton');
  let gameInterval = null;
  let animationInterval = null;

  startButton.addEventListener('click', () => {
    if(!gameInterval) {
      gameInterval = window.setInterval(() => {
        keyboardController.update();
        gameObjects.forEach(obj => {
          obj.update();
        })
      },17);
    }
    if(!animationInterval) {
      animationInterval = window.setInterval(() => {
        ctx.clearRect(0,0,640,480);
    
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
  const player = new Spaceship(50,50, keyboardController);
  gameObjects.push(player);

}