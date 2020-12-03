var hypnoticBall, database;
var position;
var allPlayers ;
var distance = 0 ;

var car1, car2, car3, car4;
var cars;

//https://github.com/whitehatjr/CarRacingGame1.0

var gameState = 0;
var playerCount;

var datebase;
var form,player,game;

function setup(){
  createCanvas(displayWidth-20,displayHeight-30);

  database = firebase.database();
  console.log(database);
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background("white");

  if(playerCount === 4){
    game.update(1);

  }
  if(gameState === 1){
    clear();
    game.play();
  }

  
}
