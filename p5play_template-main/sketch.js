var XIS, uparrow, downarrow, leftarrow, rightarrow
function preload() {
  up_arroww= loadImage("arrow.png")
  down_arroww= loadImage("arrow.png")
  left_arroww= loadImage("arrow.png")
  right_arroww= loadImage("arrow.png")
}
function setup() {
  createCanvas(400,400);
XIS = createSprite(200,200,20,20)
uparrow = createSprite(200,1050,20,20)
uparrow.addAnimation("up_arrow",up_arroww)
downarrow = createSprite(200,1350,20,20)
downarrow.addAnimation("down_arrow",down_arroww)
leftarrow = createSprite(1050,200,20,20)
leftarrow.addAnimation("left_arrow",left_arroww)
rightarrow = createSprite(2500,200,20,20)
rightarrow.addAnimation("right_arrow",right_arroww)
}

function draw() 
{
  background(30);
  if(keyIsDown(RIGHT_ARROW)){
    XIS.position.x=XIS.position.x +5;
    background("red")
  rightarrow.x=250}
  else{rightarrow.x=2050}
  if(keyIsDown(LEFT_ARROW)){
    XIS.position.x=XIS.position.x -5;
    background("green")
  leftarrow.x=150}
  else{leftarrow.x=1050}
    if(keyIsDown(UP_ARROW)){
      XIS.position.y=XIS.position.y -5;
      background("blue")
    uparrow.y=150}
    else{uparrow.y=1050}
    if(keyIsDown(DOWN_ARROW)){
      XIS.position.y=XIS.position.y +5;
    background("yellow")
  downarrow.y=250}
  else{downarrow.y=2500}
    uparrow.rotation= 270
    uparrow.scale= 0.5
    downarrow.rotation= 90
    downarrow.scale= 0.5
    leftarrow.rotation= 180
    leftarrow.scale= 0.5
    rightarrow.scale= 0.5
    if(XIS.x>=385){
      XIS.x=385
    }
    if(XIS.x<=15){
      XIS.x=15
    }
    if(XIS.y>=385){
      XIS.y=385
    }
    if(XIS.y<=15){
      XIS.y=15
    }
  drawSprites()
}
