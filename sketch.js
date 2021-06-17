var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var frameCount;

var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
 }

 // create division object
 for (var k =0; k <=160; k = k +80){
   divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
 }

 
 // create division object
 for (var k =0; k <=240; k = k +80){
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}


 // create division object
 for (var k =0; k <=360; k = k +80){
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}


 // create division object
 for (var k =0; k <=400; k = k +80){
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}


 // create division object
 for (var k =0; k <=480; k = k +80){
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}


 // create division object
 for (var k =0; k <=560; k = k +80){
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}


 // create division object
 for (var k =0; k <=640; k = k +80){
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}


 // create division object
 for (var k =0; k <=720; k = k +80){
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}


 // create division object
 for (var k =0; k <=800; k = k +80){
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}


 //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 25; j <=width-08; j=j+50)
  {
    plinkos.push(new Plinko(j,275));
  }

  //create 4th row of plinko objects
  for (var j = 05; j <=width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,375));
  }
}
  //create particle objects

    
      function draw() {
    background("black");
    textSize(20)

    if(frameCount%60===0){
      particle.push(new Particle(random(width/2-10),10,10));
  
  }
    
  
    Engine.update(engine);
    ground.display();
    
    //display the plinkos 
    for (var i = 0; i < plinkos.length; i++) {
      plinkos[i].display();   
    }
    
    for (var j = 0; j < particle.length; j++) {
      particle[j].display();   
    }

    //display the divisions
    for (var k = 0; k < divisions.length; k++) {
      divisions[k].display();
    }

    //display the paricles 
    
  

  }