
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stones=[];

function preload()
{
  mangoImg = loadImage("mango.png");
  mangoTreeImg = loadImage("mangoTree1.jfif");
  bgImg = loadImage("background.jfif");
  slingshotImg = loadImage("slingshot.png");
  stoneImg = loadImage("stone.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height+300,width*2,20);
  tree = createSprite(width/2+250,height-300);
  tree.addImage(mangoTreeImg);
  tree.scale = 2.5;
  
  mango1 = new Mango(width/2+240,height-430,30,30);
  mango2 = new Mango(width/2+290,height-330,30,30);
  mango3 = new Mango(width/2+390,height-390,30,30);
  mango4 = new Mango(width/2+200,height-340,30,30);
  mango5 = new Mango(width/2+350,height-370,30,30);
  mango6 = new Mango(width/2+320,height-290,30,30);

  var options={
    isStatic:true
  }
  boy = Bodies.rectangle(100,height-300,70,180,options);
  World.add(engine.world,boy);

 
  
  
}


function draw() 
{
  background(bgImg);
  Engine.update(engine);
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  
  image(slingshotImg,boy.position.x,boy.position.y,50,150);

  for (var i = 0; i < stones.length; i++) 
  {
    showStones(stones[i], i);
    
          
     Matter.World.remove(world, balls[i].body);
     balls.splice(i, 1);
     i--;
        
  }

  drawSprites();
}
function showStones(stone, index) {
  stone.display();
  //stone.animate();
  if (stone.body.position.x >= width || stone.body.position.y >= height - 50) 
  {
    if(!stone.isSink)
    {
      stone.remove(index)
    }
  }
}
