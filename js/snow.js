const canvas = document.getElementById('snowfallCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
 
const flakes = [];

function createSnowflakes() {
  for (let i = 0; i < 100; i++) {
    flakes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 3 + 1, 
      speed: Math.random() * 3 + 1, 
      opacity: Math.random(),
    });
  }
}

function drawSnowflakes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const flake of flakes) {
    ctx.beginPath();
    ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
    ctx.fill();

    flake.y += flake.speed;

    if (flake.y > canvas.height) {
      flake.y = 0;
    }
  }

  requestAnimationFrame(drawSnowflakes);
}

createSnowflakes();
drawSnowflakes();