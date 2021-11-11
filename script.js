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

  $("h1").text("Game Over! You made it to level " + currentLevel + ". Press A to start again")
  currentLevel = 0;
  gamePattern = [];
  return console.log("Item " + i + " didn't match. Game Over!");
 
}

  }
  

}else{

  return console.log("Need more inputs");
}

setTimeout(nextLevel, 1000);
playerChosenPattern = [];
};
$(document).on('keypress', function(){
  if (currentLevel >= 1){

    return
  } else {


    nextLevel();
  }


});

// function playGamePattern(){
// for(i=0; i <= (gamePattern.length - 1); i++){
  
//   var color = gamePattern[i];
//   var colorSoundFile = "/sounds/" + color + ".mp3";
//   var colorSound = new Audio (colorSoundFile);
//   var colorId = String("#" + color);

// setTimeout(function (){
//  colorSound.play();
// $(colorId).fadeOut(150).fadeIn(150);

// }, 1000);
  
  

  

// } 


// }
function nextLevel(){
currentLevel++;
$('h1').text('Level ' + currentLevel);
var randomNumber = Math.floor(Math.random() * 4);
var randomColor = possibleColors[randomNumber];
var randomSoundFile = "/sounds/" + randomColor + ".mp3";
var randomSound = new Audio (randomSoundFile);
var randomButton = String("#" + randomColor);
$(randomButton).fadeOut(150).fadeIn(150);
randomSound.play();
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
$(this).fadeOut(150).fadeIn(150);

setTimeout(checkAnswer, 1000);

});



