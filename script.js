// var gamePattern = [];
// var userClickedPattern = [];
// var currentLevel = 0;




// var buttonColors = ["red", "blue", "green", "yellow"];



// function nextSequence(){
// var randomNumber = Math.floor(Math.random()*4);
// var randomColor = buttonColors[randomNumber];
// gamePattern.push(randomColor);
// var chosenButton = $(String("."+randomColor));
// var chosenSound = "/sounds/" + randomColor + ".mp3";
// console.log(chosenSound);
// var currentSound = new Audio(String(chosenSound));
// currentSound.play();
// chosenButton.fadeOut(150).fadeIn(150);
// $('h1').text("Level " + currentLevel);

// currentLevel++;
// }

// $('.button').on("click", function(){

// var userChosenColor = $(this).attr('id');
// userClickedPattern.push(userChosenColor)
// console.log(userClickedPattern);
// var clickedSound = "/sounds/" + userChosenColor + ".mp3";
// var specificSound = new Audio(String(clickedSound));
// specificSound.play();
// $(this).fadeOut(150).fadeIn(150);


// console.log(gamePattern);
// console.log(userChosenColor);
// });

// $(document).on("keypress", nextSequence);

// function checkAnswer(currentLevel){
// if((gamePattern.length - 1) === (userClickedPattern.length - 1)){
//   console.log("success!")
//   setTimeout(nextSequence, 1000);
//   gamePattern = [];
  
// }else{
//   console.log("wrong!")
// }

// };

var gamePattern = [];
var playerChosenPattern = [];
var currentLevel = 0; 
var possibleColors = ["green", "red", "yellow", "blue"];


function checkAnswer(){
if(gamePattern.length === playerChosenPattern.length){
  for(i=0; i <= (gamePattern.length - 1); i++){
if(gamePattern[i] == playerChosenPattern[i]){
console.log("Item " + i + " matches");


} else {
  return console.log("Item " + i + " didn't match. Game Over!")
}

  }
  

}else{

  return console.log("Need more inputs");
}


};
$(document).on('keypress', startGame);

function startGame(){
currentLevel++;
$('h1').text('Level ' + currentLevel);
var randomNumber = Math.floor(Math.random() * 4);
var randomColor = possibleColors[randomNumber];
gamePattern.push(randomColor);
console.log(gamePattern);


}


$('.button').on("click", function(){
var buttonId = $(this).attr('id');
var clickedSoundFile = "/sounds/" + buttonId + ".mp3";
var clickedAudio = new Audio(clickedSoundFile);
playerChosenPattern.push(buttonId);
clickedAudio.play();
console.log(playerChosenPattern);
checkAnswer();

});



