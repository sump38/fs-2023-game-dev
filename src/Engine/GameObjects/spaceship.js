import Controller from "../Controllers/keyboard.controller";
import GameObject from "./game.object";
import Sprite2D from "../Graphics/sprite2d";

export default class Spaceship extends GameObject {

  /**
   * 
   * @param {number} x x position
   * @param {number} y y position
   * @param {Controller} controller 
   */
  constructor(x, y, controller) {
    super();
    this.spaceshipImage = new Sprite2D('./assets/ship/ship3.png', 64, 64);
    this.position.set(x, y);
    controller.register((controller) => {
      this.handleIO(controller);
    })

  }

  /**
   * 
   * @param {Controller} c 
   */
  handleIO(c) {
    this.velocity.set(0, 0);
    this.torque = 0;
    if (c.leftButton) {
      // this.velocity.x -= this.movespeed;
      this.torque -= this.rotationspeed;
    }
    if (c.rightButton) {
      // this.velocity.x += this.movespeed;
      this.torque += this.rotationspeed;
    }
    if (c.upButton) {
      this.velocity.y -= this.movespeed;
    }
    if (c.downButton) {
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