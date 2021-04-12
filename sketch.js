



var canvas;
var music;
var box;




var r1,r2,r3,r4;

var wall1,wall2,wall3,wall4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(725,600);
   box = createSprite(350,50,20,20);
   box.shapeColor="white";
    //create 4 different surfaces

    r1 = createSprite(90,580,165,20);
    r1.shapeColor="yellow";

    r2 = createSprite(270,580,170,20);
    r2.shapeColor="red";
    r3 = createSprite(450,580,170,20);
    r3.shapeColor="blue";
    r4 = createSprite(630,580,170,20);
    r4.shapeColor="green";



    wall1 = createSprite(10,200,5,800);
    wall1.shapeColor="black";

    

    wall2 = createSprite(715,200,5,800);
    wall2.shapeColor="black";

    

    wall3 = createSprite(350,10,800,5);
    wall3.shapeColor="black";

    

    wall4 = createSprite(325,590,800,5);
    wall4.shapeColor="black";


    //create box sprite and give velocity

}

function draw() {
    background("lightBlue");
    //create edgeSprite

    createEdgeSprites();
    //add condition to check if box touching surface and make it box

    if(box.isTouching(r1)){
        box.shapeColor="yellow";
    }

    if(box.isTouching(r2)){
        box.shapeColor="red";
    }

    if(box.isTouching(r3)){
        box.shapeColor="blue";
      
    }

    if(box.isTouching(r4)){
        box.shapeColor="green";
    }

if(keyDown("space")){
    box.velocityY = -5;
    box.velocityX = 5;
}


box.bounceOff(wall1);
box.bounceOff(wall2);
 
box.bounceOff(wall3);
box.bounceOff(wall4);



box.bounceOff(r1);
box.bounceOff(r2);
 
box.bounceOff(r3);
box.bounceOff(r4);

textSize(25);
text("Press 'Space' To Start", 15, 40);

    drawSprites();
}
