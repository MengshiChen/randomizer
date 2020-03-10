let dogs = [];


let randomIndex;
let animating = false;
// let counter = 0;
let images = [];
let imagecounter = 0;
let startRandomizerButton;
let addMoreButton;
let cnv;
let nameInputs = [];
let firstTime = true;

function preload() {
  //i=0, if the image count from 1, i=1, images[i-1].
  for (let i = 0; i <= 11; i++) {
    // images = pictures that I put
    images[i] = loadImage(`images/glitch_${i}.jpg`);
  }
}

function setup(){
cnv = createCanvas(600, 600);
cnv.parent("#canvasDiv");

background(224,194,255);
imageMode(CENTER);
frameRate(8);
console.log(images);
textSize(36);
textStyle(BOLD);
textAlign(CENTER, BOTTOM);
fill("blue");
// button = createButton ("Click to randomize");
startRandomizerButton = select('#randButton')
startRandomizerButton.mousePressed(buttonPressed);

addMoreButton = select('#addMoreButton')
addMoreButton.mousePressed(addAnotherInput);


for(let i = 0; i < 3; i++){
nameInputs.push(createInput());
nameInputs[nameInputs.length - 1].parent("#inputFields");
}

// setInterval(changeBackground, 1000);
// setTimeout(changeBackground, 1000);
}

function draw(){


  if(animating == true)
  {   clear();
    image(images[imagecounter], width / 2, height / 2);
    if (imagecounter < images.length - 1){
      imagecounter++;
    }
    else {
      imagecounter = 0;
    }

  }
}

function addAnotherInput (){

  nameInputs.push(createInput());
  nameInputs[nameInputs.length - 1].parent("#inputFields");

}

function randomizer(){
  animating = false;
  if (dogs[0]){
     //background(random(194,224));
     clear();
    randomIndex = int(random(dogs.length));
      image(random(images), width / 2, height / 2)
      text(dogs[randomIndex], width / 2 , height / 2 );

    // text(dogs[randomIndex].name + "'s favorite color is " + dogs[randomIndex].color, 50, 50);

    dogs.splice(randomIndex, 1);
  }
    else {
    background(224,194,255);
    text("nothing left!", width / 2, height / 2);
    }

}
function buttonPressed(){

if (firstTime == true){

  for(let i = 0; i < nameInputs.length; i++){
    dogs.push(nameInputs[i].value());}

    firstTime = false;

  }


  animating = true;
  setTimeout(randomizer, 2000);
}
