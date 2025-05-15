const canvas = document.querySelector('canvas');

// Set canvas height and width to full
canvas.height = innerHeight;
canvas.width = innerWidth;

// Create the context for drawing on canvas
const c = canvas.getContext('2d');

// create initial values for the circle properties
let x = Math.random() * innerWidth;
let y = Math.random() * innerHeight;
let radius = 30;
let dx = (Math.random() - 0.5) * 8;
let dy = (Math.random() - 0.5) * 8;

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  // Draw a circle
  c.beginPath();
  c.arc(x, y, radius, 0, Math.PI * 2);
  c.fill();
  if (x + radius > innerWidth || x - radius < 0) dx = -dx;
  if (y + radius > innerHeight || y - radius < 0) dy = -dy;
  x += dx;
  y += dy;
}

animate();
