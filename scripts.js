console.clear();

const canvas = document.querySelector('canvas');

function renderCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const c = canvas.getContext('2d');

  // SQUARE / RECTANGLE
  // c.fillStyle = "#00b300";
  // c.fillRect(100, 100, 100, 100);
  // c.fillStyle = "#00e600";
  // c.fillRect(200, 200, 100, 100);
  // c.fillStyle = "#1aff1a";
  // c.fillRect(300, 300, 100, 100);

  // LINE
  // c.beginPath();
  // c.moveTo(100, 100);
  // c.lineTo(350, 150);
  // c.lineTo(400, 400);
  // c.lineTo(150, 350);
  // c.lineTo(100, 100);
  // c.strokeStyle = "#000"
  // c.stroke();

  // ARC / CIRCLE
  // c.beginPath();
  // c.arc(250, 250, 100, 0, Math.PI * 2, false);
  // c.strokestyle = '#fff'
  // c.stroke();

  // ===== ===== ===== ===== =====

  function Circle(x, y, dx, dy, radius) {

    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function() {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.strokeStyle = '#206020';
      c.fillStyle = '#fff';
      c.stroke();
      c.fill();
    }

    this.update = function() {
      if (this.x + this.radius > innerWidth || this.x < this.radius) {
        this.dx = -this.dx;
      }

      if (this.y + this.radius > innerHeight || this.y < this.radius) {
        this.dy = -this.dy;
      }

      this.x += this.dx;
      this.y += this.dy;

      this.draw();
    }
  }

  let circleArray = [];

  for (let i = 0; i < 100; i++) {

    let radius = 30;
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let y = Math.random() * (innerHeight - radius * 2) + radius;
    let dx = (Math.random() - 0.5) * 10;
    let dy = (Math.random() - 0.5) * 10;

    circleArray.push(new Circle(x, y, dx, dy, radius));
  }

  console.log(circleArray);

  function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < circleArray.length; i++) {
      circleArray[i].update();
    }
  }
  animate();

}

window.addEventListener("resize", renderCanvas);
renderCanvas();
