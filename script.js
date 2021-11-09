var gamePattern = [];
var userClickedPattern = [];
var currentLevel = 0;




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
$('h1').text("Level " + currentLevel);

currentLevel++;
}

$('.button').on("click", function(){

var userChosenColor = $(this).attr('id');
userClickedPattern.push(userChosenColor)
console.log(userClickedPattern);
var clickedSound = "/sounds/" + userChosenColor + ".mp3";
var specificSound = new Audio(String(clickedSound));
specificSound.play();
$(this).fadeOut(150).fadeIn(150);


checkAnswer(userClickedPattern.length - 1);
console.log(gamePattern);
console.log(userChosenColor);
});

$(document).on("keypress", nextSequence);

function checkAnswer(currentLevel){
if((gamePattern.length - 1) == (userClickedPattern.length - 1)){
  console.log("success!")

}else{
  console.log("wrong!")
}

};


