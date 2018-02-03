console.clear();

const canvas = document.querySelector('canvas');

function renderCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const c = canvas.getContext('2d');

  c.fillRect(100, 100, 100, 100);
  c.fillRect(200, 200, 100, 100);
  c.fillRect(300, 300, 100, 100);

}

window.addEventListener("resize", renderCanvas);
renderCanvas();
