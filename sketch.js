var canvas;
var backgroundImage,player1_img,player2_img;
var pencilImg,brokenpencilImg,crumbledballImg;
var canvasImg;

function preload() {
  backgroundImage = loadImage("./assets/background.jpg"),
  player1_img = loadImage("./assets/player 1.jpg"),
  player2_img = loadImage("./assets/player2.jpg"),
  pencilImg = loadImage("./assets/pencil.png"),
  brokenpencilImg = loadImage("./assets/broken pencil.png"),
  crumbledballImg = loadImage("./assets/crumbled ball.png"),
  canvasImg=loadImage("./assets/canvas.jpg")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(backgroundImage);  
  drawSprites();
}