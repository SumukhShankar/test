var canvas;
var database;
var Contestantcount;
var allcontestant;
var gameState = 0;


var quiz,contestant,question;
function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();

  quiz= new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
background("Pink");
if(Contestantcount === 2){
  quiz.update(1);
}

if(gameState === 1){
  clear();
  quiz.play();
}
  
}
