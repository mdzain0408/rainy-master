const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint =Matter.Constraint;

var body,bodySprite;
var thunderBolt,t1,t2,t3,t4,bodyW,max = 100,drop1 = [], thunderBoltFrame;

function preload(){
    
     t1= loadImage("images/thunderbolt/1.png");
   t2 = loadImage("images/thunderbolt/2.png");
     t3= loadImage("images/thunderbolt/3.png");
    t4 = loadImage("images/thunderbolt/4.png");
    
    
}

function setup(){
    var canvas = createCanvas(500,700);
    engine = Engine.create();
    world = engine.world; 
    um = new umbrella (250,500) ;
    max = 100
   
    for(var i = 0; i<max; i++){

        console.log("hello")
        drop1.push(new drop(random(0,500),random(0,650)))
    }

      
    
   
    
}

function draw(){
    background("black")
    Engine.update(engine);

     um.display();
    
        
     for (var i = 0; i < drop1.length; i++) {
        drop1[i].display();
        drop1[i].update();
     }


     rand = Math.round(random(1,4))
     if(frameCount%60 === 0){
        
        thunderBoltFrame = frameCount;
        thunderBolt = createSprite(random(10,370), random(10,30), 10, 10);

        switch(rand){
            case 1: thunderBolt.addImage(t1);
            break;
            case 2: thunderBolt.addImage(t2);
            break;
            case 3: thunderBolt.addImage(t3);
            break;
            case 4: thunderBolt.addImage(t4);
            break;
            default:break;
        }
        thunderBolt.scale = 0.7;
    }

    if (thunderBoltFrame + 10 === frameCount){

thunderBolt.destroy();


    }
       
    drawSprites();
} 

