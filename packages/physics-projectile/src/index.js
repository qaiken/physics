function Projectile({
  selector,
  initV = 250,
  g = -10,
  frictionCo = 0.5,
  degrees = 90,
  initXPos = 0,
  initYPos = -50
}) {
  if (!selector) {
    throw new Error('must supply a selector');
  }

  this.projectile = selector;
  this.initV = initV;
  this.g = g;

  this.frictionCo = frictionCo;
  this.frictionalA = this.getFrictionalA();

  this.theta = this.degreesToRadians(degrees);

  this.initXPos = initXPos;
  this.initYPos = initYPos;

  this.initVx = this.getInitVx();
  this.initVy = this.getInitVy();

  this.animationStartTime = 0;
  this.frictionStartTime = 0;
}

Projectile.prototype.getFrictionalA = function() {
  return this.frictionCo * this.g;
};

Projectile.prototype.degreesToRadians = function(degrees) {
  return degrees * (Math.PI / 180);
};

Projectile.prototype.getInitVx = function() {
  return this.initV * Math.cos(this.theta);
};

Projectile.prototype.getInitVy = function() {
  return this.initV * Math.sin(this.theta);
};

Projectile.prototype.projectileFrame = function(t) {
  this.animationStartTime = this.animationStartTime || t;
  t = t - this.animationStartTime;

  // seconds
  t = t / 1000;

  let frictionTime = 0;

  let yPos =
    this.initYPos + this.initVy * t + (1 / 2) * this.g * Math.pow(t, 2);
  yPos = Math.max(0, yPos);

  if (this.projectileAnimation > 1 && yPos === 0) {
    this.frictionStartTime = this.frictionStartTime || t;
    frictionTime = t - this.frictionStartTime;
  }

  let prevXPos = +this.projectile.style.left.slice(0, -2);

  let xPos =
    this.initXPos +
    this.initVx * t +
    (1 / 2) * this.frictionalA * Math.pow(frictionTime, 2);

  xPos = Math.max(prevXPos, xPos);

  this.projectile.style.left = xPos + 'px';
  this.projectile.style.bottom = yPos + 'px';

  if (t === 0 || xPos !== prevXPos) {
    this.projectileAnimation = requestAnimationFrame(
      this.projectileFrame.bind(this)
    );
    return null;
  }

  this.stopAnimation();
};

Projectile.prototype.startAnimation = function() {
  this.projectile.style.left = this.initXPos + 'px';
  this.projectile.style.bottom = this.initYPos + 'px';

  this.projectileAnimation = requestAnimationFrame(
    this.projectileFrame.bind(this)
  );

  return true;
};

Projectile.prototype.stopAnimation = function() {
  cancelAnimationFrame(this.projectileAnimation);
  this.projectileAnimation = undefined;

  return true;
};

export default Projectile;
