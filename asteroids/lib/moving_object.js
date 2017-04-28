const MovingObject = function (options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
};

MovingObject.prototype.draw = function () {
  let canvas = document.getElementById('myCanvas');
  let ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
  ctx.fillStyle = this.color;
  ctx.fill();
};

MovingObject.prototype.move = function () {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
};

let m = new MovingObject({ pos: [30, 30], vel: [50, 50], radius: 5, color: "#00FF00"});
m.draw();
m.move();
m.draw();

module.exports = MovingObject;
