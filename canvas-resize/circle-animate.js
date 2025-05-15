const canvas = document.querySelector('canvas');

// Set canvas height and width to full
canvas.height = innerHeight;
canvas.width = innerWidth;

// Create the context for drawing on canvas
const c = canvas.getContext('2d');

function animate() {
  requestAnimationFrame(animate);
  // Draw a circle
  c.beginPath();
  c.arc(200, 200, 30, 0, Math.PI * 2);
  c.strokeStyle = 'blue';
  c.stroke();
}

animate();
