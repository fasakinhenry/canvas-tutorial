const canvas = document.querySelector('canvas');

// Set canvas height and width to full
canvas.height = innerHeight;
canvas.width = innerWidth;

// Create the context for drawing on canvas
const c = canvas.getContext('2d');

// Create the circle class
class Circle {
  constructor(x, y, radius, dx, dy) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
  }
  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    c.fill();
  }
  update() {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0)
      this.dx = -this.dx;
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0)
      this.dy = -this.dy;
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  }
}

// create initial values for the circle properties
let x = Math.random() * innerWidth;
let y = Math.random() * innerHeight;
let radius = 30;
let dx = (Math.random() - 1) * 8;
let dy = (Math.random() - 1) * 8;

// create a circle object
const circle = new Circle(x, y, radius, dx, dy);

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  // Draw a circle
  circle.update();
}

animate();
