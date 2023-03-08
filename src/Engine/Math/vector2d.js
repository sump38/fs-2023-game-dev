export default class Vector2D {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  set(x,y) {
    if(x instanceof Vector2D) {
      this.x = x.x;
      this.y = x.y;
    } else {
      this.x = x;
      this.y = y;
    }
    return this;
  }

  get magnitude() {
    return (Math.sqrt(this.x*this.x + this.y*this.y));
  }

  add(x, y) {
    if(x instanceof Vector2D) {
      this.set(this.x + x.x, this.y + x.y);
    } else {
      this.set(this.x + x,this.y + y);
    }
    return this;
  }

  divide(value) {
    this.set(this.x/value, this.y/value);
    return this;
  }

  multiply(value) {
    return this.set(this.x * value, this.y * value);
  }

  static dot(vectorA, vectorB) {
    return (vectorA.x * vectorB.x) + (vectorA.y + vectorB.y);
  }



  /**
   * returns a new normilized version of the vector
   * @param {Vector2D} vector 
   * @returns {Vector2D} normalized vector
   */
  normalize() {
    const magnitude = this.magnitude;
    return this.set(this.x/magnitude, this.y/magnitude);
  }


}