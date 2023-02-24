window.onload = () => {
  /** @type {HTMLCanvasElement} */
  const myCanvas = document.getElementById('gameCanvas');
  const ctx = myCanvas.getContext('2d');
  const gameObjects = [];
  

  gameObjects.push(new Spaceship());

  window.setInterval(() => {
    ctx.clearRect(0,0,640,480);
    gameObjects.forEach(obj => {
      obj.move();
      obj.render(ctx);
    });
  }, 17);
}

class GameObject {
  constructor(width, height) {
    this.position = new Vector2D(0,0);
    this.width = width;
    this.height = height;
    this.speed = new Vector2D(0,0);

    window.addEventListener('keydown', (event) => {
      switch(event.code) {
        case ('ArrowRight'): {
          this.speed.x = 5;
          break;
        }
        case ('ArrowLeft'): {
          this.speed.x = -5;
          break;
        }
        case ('ArrowUp'): {
          this.speed.y = -5;
          break;
        }
        case ('ArrowDown'): {
          this.speed.y = 5;
          break;
        }
        default: {
          this.speed.x = 0;
          this.speed.y = 0;
          break;
        }
      }
      
    });

    window.addEventListener('keyup', (event) => {
      this.speed.x = 0;
      this.speed.y = 0;
    })



  }

  render(ctx) {
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  move() {
    this.position.x = this.position.x + this.speed.x;
    this.position.y = this.position.y + this.speed.y;
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

class Spaceship extends GameObject {
  constructor() {
    super(64,64);
    this.image = new Image();
    this.image.src = './assets/ship/ship.png';
    // this.image.onload = () => {
    //   console.log('image loaded');
    // }
  }

  /**
   * 
   * @param {CanvasRenderingContext2D} ctx 
   */
  render(ctx) {
    ctx.drawImage(this.image, this.position.x, this.position.y);
  }




}

class Vector2D {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}