const Engine=Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world
var box
var division
var Di=[]
var plinkos=[];
var particle=[]

function setup() {
  createCanvas(490,700);
  //createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world; 

  box=new Ground(240,695,480,10)

  for (var k=5; k<500; k=k+80){
    Di.push(new Division(k,650,5,150))
   }

   for (var j = 75; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,75));
   }

   for (var j = 50; j <=width-10; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,175));
   }

    for (var j = 75; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,275));
   }

    for (var j = 50; j <=width-10; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,375));
   }

}

function draw() {
  background(0);  
  Engine.update(engine)
  box.display();
  //division.display();

  
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  if(frameCount%60===0){
    particle.push(new Particle(random(width/2-30, width/2+30), 10,10));

  }

 for (var j = 0; j < particle.length; j++) {
  
    particle[j].display();
  }

  for (var k = 0; k < Di.length; k++) {
     
    Di[k].display();
  }
  
  drawSprites();
}