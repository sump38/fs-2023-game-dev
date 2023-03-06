window.onload = () => {
  /** @type {HTMLCanvasElement} */
  const myCanvas = document.getElementById('gameCanvas');
  const ctx = myCanvas.getContext('2d');
  const gameObjects = [];

  const keyboardController = new Controller();


  const player = new Spaceship(50,50, keyboardController);
  

  gameObjects.push(player);

  window.setInterval(() => {
    keyboardController.update();
    gameObjects.forEach(obj => {
      obj.update();
    })
  },17);



  window.setInterval(() => {
    ctx.clearRect(0,0,640,480);

    gameObjects.forEach(obj => {
      obj.render(ctx);
    });


  }, 17);
}

class GameObject {
  constructor() {
    this.position = new Vector2D(0,0);
    this.speed = new Vector2D(0,0);
    this.velocity = new Vector2D(0,0);
    this.movespeed = 10;
    this.rotationspeed = 0.1;
    this.angle = 0;
    this.torque = 0;

  }

  render(ctx) {
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    this.position.set(this.position.x + this.velocity.x, this.position.y + this.velocity.y);
    this.angle = this.angle + this.torque;
  }

}

class Spaceship extends GameObject {
  /**
   * 
   * @param {number} x x position
   * @param {number} y y position
   * @param {Controller} controller 
   */  
  constructor(x, y, controller) {
    super();

    this.spaceshipImage = new Sprite2D('./assets/ship/ship3.png', 64,64);

    this.position.set(x,y);
    controller.register((controller) => {
      this.handleIO(controller);
    })

  }

  /**
   * 
   * @param {Controller} c 
   */
  handleIO(c) {
      this.velocity.set(0,0);
      this.torque = 0;
      if(c.leftButton) {
        // this.velocity.x -= this.movespeed;
        this.torque -= this.rotationspeed;
      }
      if(c.rightButton) {
        // this.velocity.x += this.movespeed;
        this.torque += this.rotationspeed;
      }
      if(c.upButton) {
        this.velocity.y -= this.movespeed;
      }
      if(c.downButton) {
        this.velocity.y += this.movespeed;
      }
  }

  update() {
    super.update();
  }






  /**
   * 
   * @param {CanvasRenderingContext2D} ctx 
   */
  render(ctx) {
    this.spaceshipImage.render(ctx, this.position.x, this.position.y, this.angle);
  }




}

class Vector2D {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  set(x,y) {
    this.x = x;
    this.y = y;
  }
}

class Controller {
  constructor() {
    this.upButton = false;
    this.downButton = false;
    this.leftButton = false;
    this.rightButton = false;
    this.actionOne = false;
    this.actionTwo = false;


    this.events = [];
    
    window.addEventListener('keydown', (event) => {
      switch(event.code) {
        case ('ArrowRight'): {
          this.rightButton = true;
          break;
        }
        case ('ArrowLeft'): {
          this.leftButton = true;
          break;
        }
        case ('ArrowUp'): {
          this.upButton = true;
          break;
        }
        case ('ArrowDown'): {
          this.downButton = true;
          break;
        }
        case ('ControlLeft'): {
          this.actionOne = true;
          break;
        }
        case ('Space'): {
          this.actionTwo = true;
        }
        default: {
          break;
        }
      }
    });

    window.addEventListener('keyup', (event) => {
      switch(event.code) {
        case ('ArrowRight'): {
          this.rightButton = false;
          break;
        }
        case ('ArrowLeft'): {
          this.leftButton = false;
          break;
        }
        case ('ArrowUp'): {
          this.upButton = false;
          break;
        }
        case ('ArrowDown'): {
          this.downButton = false;
          break;
        }
        case ('ControlLeft'): {
          this.actionOne = false;
          break;
        }
        case ('Space'): {
          this.actionTwo = false;
        }
        default: {
          break;
        }
      }
    });
  }

  update() { 
    this.events.forEach(event => {
      event(this);
    })
  }

  register(callback) {
    this.events.push(callback);
  }


}

class Sprite2D {
  constructor(imageUrl, width, height) {
    this.image = new Image(width, height);
    this.image.src = imageUrl;
  }

  /**
   * 
   * @param {CanvasRenderingContext2D} ctx 
   */
  render(ctx, x, y, angle = 0, scale = {x:1,y: 1}) {
    
    ctx.save();
    ctx.translate(x,y);
    ctx.rotate(angle);
    ctx.scale(scale.x, scale.y);
    ctx.drawImage(this.image, this.image.width/-2,this.image.height/-2);
    ctx.restore();

  }



}