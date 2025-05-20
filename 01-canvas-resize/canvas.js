const canvas = document.querySelector('canvas');

// Resize the canvas
canvas.width = innerWidth;
canvas.height = innerHeight;

// create a drawing context
const ctx = canvas.getContext('2d');

// Draw rectangles at different positions on the screen
ctx.fillStyle = 'rgba(255, 0, 0, 0.7)';
ctx.fillRect(100, 100, 100, 100);
ctx.fillStyle = 'rgba(0, 0, 255, 0.7)';
ctx.fillRect(300, 300, 100, 100);
ctx.fillStyle = 'rgba(0, 255, 0, 0.7)';
ctx.fillRect(400, 100, 100, 100);

// Draw lines
ctx.beginPath();
ctx.moveTo(100, 300);
ctx.lineTo(300, 100);
ctx.lineTo(400, 300);
ctx.strokeStyle = 'rgba(0, 0, 255, 0.7)';
ctx.stroke();

// Arc / Circle
ctx.beginPath();
ctx.arc(300, 300, 30, 0, Math.PI * 2);
ctx.strokeStyle = 'blue';
ctx.stroke();

// Randomize drawing certain number of circles on the screen
for (let i = 0; i < 50; i++) {
  const x = Math.random() * innerWidth;
  const y = Math.random() * innerHeight;
  ctx.beginPath();
  ctx.arc(x, y, 30, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba';
  ctx.stroke();
}
