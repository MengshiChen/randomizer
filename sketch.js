// let the variables work

let dogs = [];
// let dogs = a array
let randomIndex;
// randomIndex = int(random(dogs.length))
let animating = false;
// let counter = 0;
let images = [];
//let the images I put from 0-11
let imagecounter = 0;
//count from 0
let startRandomizerButton;
//the botton for start
let addMoreButton;
//create Buttons, create more inputs
let cnv;
//copy number variables
let nameInputs = [];
//input the name that what to random
let firstTime = true;
//for(let i = 0; i < nameInputs.length; i++){ dogs.push(nameInputs[i].value());}

//prepare to load
function preload() {
  //i=0, if the image count from 1, i=1, images[i+1].
  for (let i = 0; i <= 11; i++) {
    // images = pictures that I put
    images[i] = loadImage(`images/glitch_${i}.jpg`);
  }
}

//setup
function setup(){
cnv = createCanvas(600, 600);
//copy number variable, create a canvas: W=600 H=600;
cnv.parent("#canvasDiv");
//the column id is #canvasDiv

background(17,13,255);
//canvas color
imageMode(CENTER);
//images position
frameRate(8);
//the number of frames per second to display is 8
console.log(images);
//console which can see in the inspect
textSize(36);
//size of the text is 36
textStyle(BOLD);
//style of the text is bold
textAlign(CENTER, BOTTOM);
//position of the text
fill("yellow");
//color of the text

// button = createButton ("Click to randomize");
startRandomizerButton = select('#randButton')
//select '#randButton'(Click to randomizer) to start
startRandomizerButton.mousePressed(buttonPressed);
//the method is press the botton

addMoreButton = select('#addMoreButton')
//if peple want to add more blanks to fill, the can use addMoreButton (Add more)
addMoreButton.mousePressed(addAnotherInput);
//the method is press the botton

//if the image‘s serial number = 0, when i <3, i+1
for(let i = 0; i < 3; i++){
nameInputs.push(createInput());
//create an input
nameInputs[nameInputs.length - 1].parent("#inputFields");
//division is #inputFields
}

// setInterval(changeBackground, 1000);
// setTimeout(changeBackground, 1000);
}

//draw to show
function draw(){

// when animating = true,this will happen
  if(animating == true)
  {   clear();
    //clear everything
    image(images[imagecounter], width / 2, height / 2);
    //image counts from 0, the W = 600/2, H=600/2
    if (imagecounter < images.length - 1){
      //if imagecounter 0 < the length(11) of the image - 1;
      imagecounter++;
      // then 0 +1 =1
    }
    //or,
    else {
      imagecounter = 0;
      //image count from 0
    }

  }
}
// input function
function addAnotherInput (){

  nameInputs.push(createInput());
  //add a input
  nameInputs[nameInputs.length - 1].parent("#inputFields");
  //the division is #inputFields

}
// draw a randomizer
function randomizer(){
  //when animating = false; this will happen
  animating = false;
  if (dogs[0]){
    //if the array =0;
     //background(random(194,224));
     clear();
     //then clear everything;
    randomIndex = int(random(dogs.length));
    //random image = an value of the integer is the random number of the array's length(0-11)
      image(random(images), width / 2, height / 2)
      //random an images, the W = 600/2, H= 600/2
      text(dogs[randomIndex], width / 2 , height / 2 );
      //the text random from the array


    dogs.splice(randomIndex, 1);
    //adds adds/removes items to/from an array, and returns the removed item(s), the number here is randomIndex,1
  }
    //or,
    else {
    background(166,255,244);
    //color of the background
    text("Try Again!", width / 2, height / 2);
    //try again will show, size is 600/2, 600/2
    }

}

//when botton is pressed, this will happen
function buttonPressed(){
//when the firstTime pressed, if true, this will happen
if (firstTime == true){
  //when i=0; i < nameinputs(x to y); then i+1
  for(let i = 0; i < nameInputs.length; i++){
    dogs.push(nameInputs[i].value());}
    //push a array

    firstTime = false;
    //if it is false,loop

  }


  animating = true;
  //the animating set is true
  setTimeout(randomizer, 2000);
  //time out 
}
