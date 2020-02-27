let dogs = [{
  name: "donut",
  color: "pink"
}, {
  name: "Paws",
  color: "broom"
}, {
  name: "ferrari",
  color: "red"
}];

let randomIndex;

function setup() {
  createCanvas(600, 600);
  background(200);
  window.alert("1");
  randomIndex = int( random (dogs.length));

  console.log(dogs[randomIndex].name);
  text(dogs[randomIndex].name,50,50)

}

function draw() {}
