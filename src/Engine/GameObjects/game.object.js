import Vector2D from "../Math/vector2d";

export default class GameObject {
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
    
    //calculate new angle
    this.angle = this.angle + this.torque;
    const normilizedAngle = this.angle + Math.PI/2;
    //calculate new direction vector
    const direction = new Vector2D(Math.cos(normilizedAngle), Math.sin(normilizedAngle)).multiply(this.velocity.y);
    this.position.add(direction);


    // this.position.set(this.position.x + this.velocity.x, this.position.y + this.velocity.y);
  }

}