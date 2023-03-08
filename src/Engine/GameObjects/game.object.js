import Vector2D from "../Math/vector2d";
import Util from "../Math/util";

export default class GameObject {
  constructor() {
    this.position = new Vector2D(0, 0);
    this.velocity = new Vector2D(0, 0);
    this.force = new Vector2D(0, 0);
    this.movespeed = 400;
    this.maxSpeed = 10;
    this.rotationspeed = 2.2;
    this.damping = 0.99;
    this.angle = 0;
    this.torque = 0;
  }

  static minNumber = 0.01;

  render(ctx) {
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  /**
   * 
   * @param {number} dt 
   */
  update(dt) {
    //calculate new angle
    this.angle = (this.angle + Util.trunc(this.torque * dt));
    this.angle = this.angle % (Math.PI * 2);
    //const normalizedAngle = this.angle + Math.PI/2; //rotate angle to match coordinate system
    //calculate new direction vector
    //const direction = new Vector2D(Math.cos(normalizedAngle), Math.sin(normalizedAngle));
    this.velocity.add(
      this.force.x * dt,
      this.force.y * dt
    ).multiply(this.damping);

    //.multiply(this.velocity.y);
    this.position.add(
      Util.trunc(this.velocity.x * dt),
      Util.trunc(this.velocity.y * dt)
    );

    speedIndicator.innerHTML = JSON.stringify(this.velocity);
    positionIndicator.innerHTML = this.angle;




    // this.position.set(this.position.x + this.velocity.x, this.position.y + this.velocity.y);
  }

}