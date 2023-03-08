import Controller from "../Controllers/keyboard.controller";
import GameObject from "./game.object";
import Sprite2D from "../Graphics/sprite2d";
import Vector2D from "../Math/vector2d";

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
    this.force.set(0,0);
    this.torque = 0;
    if (c.leftButton) {
      // this.velocity.x -= this.movespeed;
      this.torque = -this.rotationspeed;
    } else if (c.rightButton) {
      // this.velocity.x += this.movespeed;
      this.torque = this.rotationspeed;
    }

    const normalizedAngle = this.angle - Math.PI/2; //rotate angle to match coordinate system
    const directionNormalized = new Vector2D(Math.cos(normalizedAngle), Math.sin(normalizedAngle));


    if (c.upButton) {
      this.force.set(directionNormalized).multiply(this.movespeed);
    } else if (c.downButton) {
      this.force.set(directionNormalized).multiply(-this.movespeed);
    }
  }

  update(dt) {
    super.update(dt);
  }

  /**
   * 
   * @param {CanvasRenderingContext2D} ctx 
   */
  render(ctx) {

    this.spaceshipImage.render(ctx, this.position.x, this.position.y, this.angle);
  }
}