var gamePattern = [];

const blueSound = new Audio('/sounds/blue.mp3');
const greenSound = new Audio('/sounds/green.mp3');
const redSound = new Audio('/sounds/red.mp3');
const yellowSound = new Audio('/sounds/yellow.mp3');

var buttonColors = ["red", "blue", "green", "yellow"];
function nextSequence(){
var randomNumber = Math.floor(Math.random()*4);
var randomColor = buttonColors[randomNumber];
gamePattern.push(randomColor);
var chosenButton = $(String("."+randomColor));
var chosenSound = "/sounds/" + randomColor + ".mp3";
console.log(chosenSound);
var currentSound = new Audio(String(chosenSound));
currentSound.play();
chosenButton.fadeOut(150).fadeIn(150);
}

