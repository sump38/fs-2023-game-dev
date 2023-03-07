export default class Sprite2D {
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