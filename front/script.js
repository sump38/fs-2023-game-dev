window.onload = () => {
  /** @type {HTMLCanvasElement} */
  const myCanvas = document.getElementById('gameCanvas');
  const ctx = myCanvas.getContext('2d');
  const gameObjects = [];
  

  gameObjects.push(new GameObject(40, 40));

  window.setInterval(() => {
    ctx.clearRect(0,0,640,480);
    gameObjects.forEach(obj => {
      obj.move();
      obj.render(ctx);
    });



    // x = x + speed;

  }, 17);
}

class GameObject {
  constructor(width, height, speed = 0) {
    this.x = 0;
    this.y = 0;
    this.width = width;
    this.height = height;
    this.speed = speed;

    window.addEventListener('keydown', (event) => {
      switch(event.code) {
        case ('ArrowRight'): {
          this.speed = 5;
          break;
        }
        case ('ArrowLeft'): {
          this.speed = -5;
          break;
        }
        default: {
          this.speed = 0;
          break;
        }
      }
      
    });



  }

  render(ctx) {
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  move() {
    this.x = this.x + this.speed;
    // if(this.x >= 600 && this.speed > 0) {
    //   this.speed = this.speed * -1;
    // }
    // if(this.x <= 0 && this.speed <= 0) {
    //   this.speed = this.speed * -1;
    // }
  }

  setSpeed(newSpeed) {
    this.speed = newSpeed;
  }



}