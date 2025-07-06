// alert("Jai Ganesh");

var buttonColors=["red", "blue", "green", "yellow"];

var gamePattern=[];
var userClickedPattern=[];

var start=false;
var level=-1;

$(document).keypress(function () {
   if(!start){
     $("#level-title").text("Level "+level);
    nextSequence();
    start=true;
   }
});

$(".btn").click(function handler() {
var userChosenColor=$(this).attr("id");
userClickedPattern.push(userChosenColor);
playSound(userChosenColor);
animatePress(userChosenColor);
checkAns(userClickedPattern.length-1);
})

function checkAns(curLevel) {
    if(userClickedPattern[curLevel]===gamePattern[curLevel]){
        if(userClickedPattern.length===gamePattern.length){
            setTimeout(function () {
            nextSequence();
        },1000);
        }
    }
    else{
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout(function () {
             $("body").removeClass("game-over");
        },200);

        startOver();
    }
}

function startOver(){
    level=0;
    start=false;
    gamePattern=[];
    //userClickedPattern=[];

}
function nextSequence(){
    userClickedPattern=[];
    level++;
    $("#level-title").text("Level "+level);
    var randomNumber=Math.floor(Math.random()*4);
   var randomChosenColor=buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    //flash for game click and animate for user click
   
   $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100); 


playSound(randomChosenColor);

}



function playSound(name) {
const audio=new Audio("sounds/"+name+".mp3");
audio.play();
}

function animatePress(currentColor) {
    $("#"+currentColor).addClass("pressed");

    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    },100);
}


