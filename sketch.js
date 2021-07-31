var box;
function setup() {
  createCanvas(600,600);
  box = createSprite(200,300,30,30)
}

function draw() 
{
  background(30);
  if(keyDown(LEFT_ARROW)){
    box.x = box.x - 5;
  }
  if(keyDown(RIGHT_ARROW)){
    box.x = box.x + 5;
  }
drawSprites()
}




