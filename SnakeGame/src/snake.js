// Playing board
var blockSize = 25;
var rows = 20;
var columns = 20;
var board;
var context;

// Snake head
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

// Food
var foodX;
var foodY;

window.onload = function(){
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = columns * blockSize;
    // Used for drawing on the board
    context = board.getContext("2d"); 
    
    placeFood();
    document.addEventListener("keyup", changeDirection);
    update();
}

function update(){
    context.fillStyle="black";
    // X, Y coordinates, then width and height
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle="blue";
    context.fillRect(snakeX, snakeY, blockSize, blockSize);

    context.fillStyle = "red";
    context.fillRect(foodX, foodY, blockSize, blockSize);
}


function changeDirection(){

}


function placeFood(){
    // Math.random = number between 0-1
    foodX = Math.floor(Math.random() * columns) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;
}