// reference the canvas
const canvas = document.querySelector('canvas');

// set the height and width of the canvas
canvas.height = innerHeight;
canvas.width = innerWidth;

// Create a context for drawing
const c = canvas.getContext('2d');

// Create a mouse object to hold the x and y coordinates
const mouse = {
  x: undefined,
  y: undefined,
};

addEventListener('mousemove', (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
});

// circle class
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
    c.fillStyle = 'blue';
    c.fill();
  }
  update() {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}

// Create a circle array to hold all circles
const circleArray = [];

// For loop to get multiple circles
for (let i = 0; i < 100; i++) {
  const radius = 30;
  const x = Math.random() * (innerWidth - radius * 2) + radius;
  const y = Math.random() * (innerHeight - radius * 2) + radius;
  const dx = (Math.random() - 1) * 8;
  const dy = (Math.random() - 1) * 8;
  circleArray.push(new Circle(x, y, radius, dx, dy));
}
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  // animate circle
  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

animate();
