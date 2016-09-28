/*
  CodeChangers Graphics Library 0.2

  Developed by Ridley Larsen for CodeChangers. It is provided without warranty.

  This library is licensed under the Creative Commons CC-BY-SA.
  More details about the license can be found at this URL:
    https://creativecommons.org/licenses/by-sa/2.0/
*/
var canvas, ctx, fillMode;
var canvases = document.getElementsByTagName('canvas');
var stop = false;

if (canvases.length > 1) {
  console.log("There is more than one canvas on the page. " +
    "You will need to use start(canvas) to use the graphics library."
  );
} else {
  canvas = canvases[0];
}




function drawBall(){
  //body...
}

function start(in_canvas) {
  if (in_canvas !== undefined) {
    canvas = in_canvas;
  }
  ctx = canvas.getContext('2d');
  clearCanvas();
}

if (canvas !== undefined) {
  start(canvas);
}

function setColor(color) {
  if (color.indexOf("rgb") < 0){
    if (color[0] !== "#") {
      console.log("Oops! You need to supply a CSS color like #00CC00 or rgb(200, 1, 50).", "You supplied:", color);
      return;
    }
  }
  ctx.fillStyle = color;
  ctx.strokeStyle = color;
}

function setFillMode(mode) {
  fillMode = mode;
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function setRandomColor() {
  var red = Math.floor(255 * Math.random());
  var green = Math.floor(255 * Math.random());
  var blue = Math.floor(255 * Math.random());

  setColor("rgba(" + red + ", " + green + ", " + blue + ", 1)")
}

function drawRectangle(x, y, width, height) {
  if (fillMode === "stroke") {
    ctx.strokeRect(x, y, width, height);
  } else {
    ctx.fillRect(x, y, width, height);
  }
}

function drawSquare(x, y, width) {
  drawRectangle(x, y, width, width)
}

function drawCircle(x, y, radius) {
  ctx.beginPath();
  var startAngle = 0;
  var endAngle = Math.PI+(Math.PI*2)/2;
  ctx.arc(x, y, radius, startAngle, endAngle, false);
  if (fillMode == "fill") {
    ctx.fill();
  } else {
    ctx.stroke();
  }
}
