var car,car1,wall;
var speed,speed1, weight; 
function setup() {
  createCanvas(1600, 400);
  speed=random(55,90)
  speed1=random(55,90)
	weight=random(400,1500)
  car=createSprite(50, 100, 50,50);  
  car1= createSprite(50,250,50,50); 
  car.velocityX = speed;
  car1.velocityX = speed1;
  car.shapeColor=color(0,255,0);
  car1.shapeColor=color(0,255,0);
  wall=createSprite(1500,300, 60, height/2)
  wall.shapeColor=color(0,0,0)
  wall1=createSprite(1500,100, 60, height/2)
  wall1.shapeColor=color(0,0,0)
  wall2=createSprite(1520,200, 60,400)
  wall2.shapeColor=color(255)
  wall3=createSprite(1540,200, 60,400)
  wall3.shapeColor=color(0,255,255)
  wall4=createSprite(1560,200, 60,400)
  wall4.shapeColor=color(255,0,255)
  wall5=createSprite(1580,200, 60,400)
  wall5.shapeColor=color(255,0,0)
  wall6=createSprite(1600,200, 60,400)
  wall6.shapeColor=color(255,255,0)
}

function draw() {
  background("purple");
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX=0;
  	var deformation=0.5 * weight * speed* speed/22509;
	if(deformation>180)
	{
    car.shapeColor=color(255,0,0);
	}
	if(deformation<180 && deformation>100)
	{
    car.shapeColor=color(230,230,0);
	}
	if(deformation<100)
	{
    car.shapeColor=color(0,255,0);
	}
  }

  if(wall.x-car1.x < (car1.width+wall.width)/2)
  {
    car1.velocityX=0;
  	var deformation=0.5 * weight * speed* speed/22509;
	if(deformation>180)
	{
    car1.shapeColor=color(255,0,0);
	}
	if(deformation<180 && deformation>100)
	{
    car1.shapeColor=color(230,230,0);
	}
	if(deformation<100)
	{
    car1.shapeColor=color(0,255,0);
	}
  }  
  drawSprites();
}
