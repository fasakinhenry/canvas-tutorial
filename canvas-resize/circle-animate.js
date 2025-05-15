const canvas = document.querySelector('canvas');

// Set canvas height and width to full
canvas.height = innerHeight;
canvas.width = innerWidth;

// Create the context for drawing on canvas
const c = canvas.getContext('2d');

// create initial values for the circle properties
let x = 200;
let y = 200;
let dx = 5;
let dy = 4;

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  // Draw a circle
  c.beginPath();
  c.arc(x, y, 30, 0, Math.PI * 2);
  c.strokeStyle = 'blue';
  c.stroke();
  x += dx;
  y += dy;
}

animate();
