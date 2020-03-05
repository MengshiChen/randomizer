let dogs = [{name:"donut", color:"yellow"}, {name:"fishball", color:"pink"}, {name:"cucumber", color:"orange"}, {name:"shiba", color:"merigold"}, {name:"bobo", color:"black"}, {name:"ben", color:"brown"}];
let randomIndex;
let animating = false;
// let counter = 0;
let images = [];
let imagecounter = 0;

function preload() {
  for (let i = 1; i <= 12; i++) {
    images[i-1] = loadImage(`/images/glitch_${i}.jpg`);
  }

}

function setup(){
createCanvas(600, 600);
background(200);
text("click to randomize", 50, 50);
imageMode(CENTER);
frameRate(8);
console.log(images);
textStyle(BOLD);
textAlign(CENTER);
button = createButton ("Click to randomize");
button.mousePressed(buttonPressed);
button.class("randomizerButton");
// setInterval(changeBackground, 1000);
// setTimeout(changeBackground, 1000);
}

function draw(){
  if(animating == true)
  {   clear();
    image(images[imagecounter], width / 2, height / 2);
    if (imagecounter < images.length - 1){
      imagecounter++;
    } else {
      imagecounter = 0;
    }

  }
}
function randomizer(){
  animating = false;
  if (dogs[0]){
    background(random(200,255));
    randomIndex = int(random(dogs.length));
      text(`${dogs[randomIndex].name} 's favorite color is ${dogs[randomIndex].color}`, width / 2 , height / 2 );

    // text(dogs[randomIndex].name + "'s favorite color is " + dogs[randomIndex].color, 50, 50);
    dogs.splice(randomIndex, 1);
  }
    else {
      background(random(200, 255));
    text("nothing left!", 50, 50);
    }

}
function buttonPressed(){
  animating = true;
  setTimeout(randomizer, 2000);
}
