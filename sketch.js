let dogs = [{name:"donut", color:"yellow"}, {name:"fishball", color:"pink"}, {name:"cucumber", color:"orange"}, {name:"shiba", color:"merigold"}, {name:"bobo", color:"black"}, {name:"ben", color:"brown"}];
let randomIndex;
let animating = false;
// let counter = 0;

function setup(){
createCanvas(600, 600);
background(200);
text("click to randomize", 50, 50);
// setInterval(changeBackground, 1000);
// setTimeout(changeBackground, 1000);
}

function draw(){
  if(animating == true)
  {
      ellipse(random(width), random(height), random(50, 200));

  }
}
function randomizer(){
  animating = false;
  if (dogs[0]){
    background(random(200,255));
    randomIndex = int(random(dogs.length));
      text(`${dogs[randomIndex].name} 's favorite color is ${dogs[randomIndex].color}`, 50, 50);
    // text(dogs[randomIndex].name + "'s favorite color is " + dogs[randomIndex].color, 50, 50);
    dogs.splice(randomIndex, 1);
  }
    else {
      background(random(200, 255));
    text("nothing left!", 50, 50);
    }

}
function mousePressed(){
  animating = true;
  setTimeout(randomizer, 2000);
}
