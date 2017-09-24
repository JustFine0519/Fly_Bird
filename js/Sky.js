(function (Game) {
  function Sky(option) {
    //属性
    this.ctx = option.ctx;
    this.img = option.img;
    this.index = option.index;
    this.x = 0;
    this.y = 0;
    this.width = this.img.width;
    this.height = this.img.height;
    this.offset = 0;
    this.scalewdith = this.ctx.canvas.height / this.img.height * this.img.width;
    //最终图片的宽
    this.x = this.index * this.scalewdith;
  }
  
  Sky.prototype = {
    constructor: Sky,
    draw: function () {
      this.offset -= 10;
      if (this.offset < -this.scalewdith) {
        this.offset = 0;
      }
      var x = this.x + this.offset;
      this.ctx.drawImage(this.img, 0, 0, this.width, this.height, this.x,this.y, this.scalewdith, this.ctx.canvas.height);
    }
  }
  Game.Sky = Sky;
})(Game)