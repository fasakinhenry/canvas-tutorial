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

// create an event listener for resize
addEventListener('resize', () => {
  // set the height and width of the canvas
  canvas.height = innerHeight;
  canvas.width = innerWidth;

  init();
});

// Create an event listener for mouse movement
addEventListener('mousemove', (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
});

let maxRadius = 40;
let minRadius = 5;

let colorArray = ['#2c3e50', '#e74c3c', '#ECF0F1', '#3498db', '#2980b9'];

// circle class
class Circle {
  constructor(x, y, radius, dx, dy) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.minRadius = radius;
    this.dx = dx;
    this.dy = dy;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
  }
  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    c.fillStyle = this.color;
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

    // Interactivy with mouse
    if (
      mouse.x - this.x < 50 &&
      mouse.x - this.x > -50 &&
      mouse.y - this.y < 50 &&
      mouse.y - this.y > -50
    ) {
      if (this.radius < maxRadius) {
        this.radius += 1;
      }
    } else if (this.radius > this.minRadius) {
      this.radius -= 1;
    }
    this.draw();
  }
}

// Create a circle array to hold all circles
const circleArray = [];

// Create a function to initialize the circles
function init() {
  circleArray.length = 0; // Clear the array
  for (let i = 0; i < 600; i++) {
    const radius = Math.random() * 8 + 4;
    const x = Math.random() * (innerWidth - radius * 2) + radius;
    const y = Math.random() * (innerHeight - radius * 2) + radius;
    const dx = (Math.random() - 1) * 2;
    const dy = (Math.random() - 1) * 2;
    circleArray.push(new Circle(x, y, radius, dx, dy));
  }
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  // animate circle
  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

// Initialize the circles
init();
animate();
