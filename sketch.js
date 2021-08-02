
var database,gameState = 0,playerCount = 0;
var form,player,game;
var allPlayers;
var car1,car2,car3,car4,cars;

function setup(){
    createCanvas(displayWidth - 30,displayHeight - 150);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
   
    if(playerCount === 4) {
        game.update(1);
    }3
    
    if(gameState ===1) {
        game.play();
    }
}

