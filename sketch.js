
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



function preload() {
    backgroundImg = loadImage("background.png");
    
}

function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;
    
    groundObj = new ground (0,600,3000,20)
    block1 = new block (900,100,70,70)
    block2 = new block (900,100,70,70)
    block3 = new block (900,100,70,70)
    block4 = new block (900,100,70,70)
    block5 = new block (900,100,70,70)
    block6 = new block (900,100,70,70)
    block7 = new block (800,100,70,70)
    block8 = new block (800,100,70,70)
    block9 = new block (800,100,70,70)
    block10 = new block (800,100,70,70)
    block11 = new block (800,100,70,70)
    block12 = new block (800,100,70,70)
    block13 = new block (700,100,70,70)
    block14 = new block (700,100,70,70)
    block15 = new block (700,100,70,70)
    block16 = new block (700,100,70,70)
    block17 = new block (700,100,70,70)
    block18 = new block (700,100,70,70)
    block19 = new block (700,100,70,70)
    block20 = new block (700,100,70,70)
    
    ball1 = new ball (50,50,10,10)
    

    SlingShot1 = new SlingShot (ball1.body, {x:200, y:400})

    monster1 = new monster (1100,500,400,400)
}

function draw(){
    background (backgroundImg)
    Engine.update(engine);
    groundObj.display()
    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()
    block8.display()
    block9.display()
    block10.display()
    block11.display()
    block12.display()
    block13.display()
    block14.display()
    block15.display()
    block16.display()
    block17.display()
    block18.display()
    block19.display()
    block20.display()
    SlingShot1.display()
    ball1.display()
    monster1.display()
    
    
    }


function mouseDragged(){
    Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    SlingShot1.fly();
}


