var gamePattern = [];

var buttonColors = ["red", "blue", "green", "yellow"];
function nextSequence(){
var randomNumber = Math.floor(Math.random()*4);
var randomColor = buttonColors[randomNumber];
gamePattern.push(randomColor);
var chosenButton = $(String("."+randomColor));
chosenButton.fadeOut(200).fadeIn(200);
}

