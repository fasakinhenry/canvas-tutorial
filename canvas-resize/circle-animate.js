const canvas = document.querySelector('canvas');

// Set canvas height and width to full
canvas.height = innerHeight;
canvas.width = innerWidth;

// Create the context for drawing on canvas
const c = canvas.getContext('2d');

function animate() {
  requestAnimationFrame(animate);
  console.log('Hello');
}

animate();
