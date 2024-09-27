const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
let requestId;

const bigSquareSize = 300;
const smallSquareSize = 50;
let smallSquare1 = {
  x: Math.random() * (bigSquareSize - smallSquareSize),
  y: Math.random() * (bigSquareSize - smallSquareSize),
};
let smallSquare2 = {
  x: Math.random() * (bigSquareSize - smallSquareSize),
  y: Math.random() * (bigSquareSize - smallSquareSize),
};
let dx1 = Math.floor(Math.random() * 10) - 5;
let dy1 = Math.floor(Math.random() * 10) - 5;
let dx2 = Math.floor(Math.random() * 10) - 5;
let dy2 = Math.floor(Math.random() * 10) - 5;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#f1f1f1";
  ctx.fillRect(0, 0, bigSquareSize, bigSquareSize);

  ctx.fillStyle = "red";
  ctx.fillRect(
    smallSquare1.x,
    smallSquare1.y,
    smallSquareSize,
    smallSquareSize
  );
  ctx.fillStyle = "blue";
  ctx.fillRect(
    smallSquare2.x,
    smallSquare2.y,
    smallSquareSize,
    smallSquareSize
  );

  smallSquare1.x += dx1;
  smallSquare1.y += dy1;
  smallSquare2.x += dx2;
  smallSquare2.y += dy2;

  if (smallSquare1.x < 0 || smallSquare1.x > bigSquareSize - smallSquareSize) {
    dx1 = -dx1;
  }
  if (smallSquare1.y < 0 || smallSquare1.y > bigSquareSize - smallSquareSize) {
    dy1 = -dy1;
  }
  if (smallSquare2.x < 0 || smallSquare2.x > bigSquareSize - smallSquareSize) {
    dx2 = -dx2;
  }
  if (smallSquare2.y < 0 || smallSquare2.y > bigSquareSize - smallSquareSize) {
    dy2 = -dy2;
  }

  requestId = requestAnimationFrame(draw);
}

startBtn.addEventListener("click", () => {
  requestId = requestAnimationFrame(draw);
});

stopBtn.addEventListener("click", () => {
  cancelAnimationFrame(requestId);
});
