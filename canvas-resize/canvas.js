const canvas = document.querySelector('canvas');

// Resize the canvas
canvas.width = innerWidth;
canvas.height = innerHeight;

// create a drawing context
const ctx = canvas.getContext('2d');

// Draw rectangles at different positions on the screen
ctx.fillRect(100, 100, 100, 100);
ctx.fillRect(300, 300, 100, 100);
ctx.fillRect(400, 100, 100, 100);
