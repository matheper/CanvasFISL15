var brother;
var canvas;
var context;

window.onload = function(){
    startUp();
}


function startUp(){
    canvas = document.getElementById('game_canvas');
    context = canvas.getContext('2d');
    brother = new Brother(10,10);
    window.setInterval(function(){ gameLoop();}, 15);
    window.setInterval(function(){ movimentaBrother();}, 200);
}

function gameLoop(){
    clearCanvas(canvas);
    drawBrother();
}

function movimentaBrother(){
    brother.src_x += 200;
    if (brother.src_x >= 800) {
        brother.src_x = 0;
    }
}

function Brother(des_x, des_y){
    var sprite = new Image();
    sprite.src = "images/walking.png";
    var brother = {
        src_x : 0,      // posicao inicial x do corte na imagem
        src_y : 0,      // posicao inicial y do corte na imagem
        src_w : 200,     // largura do corte / eixo x
        src_h : 200,     // altura do corte / eixo y
        des_x : des_x,  // posicao inicial x onde a imagem sera renderizada
        des_y : des_y,  // posicao inicial y onde a imagem sera renderizada
        des_w : 200,     // largura do corte / eixo x
        des_h : 200,     // altura do corte / eixo y
        sprite : sprite,
    };
    return brother;
}

function drawBrother()
{
    context.drawImage(brother.sprite, brother.src_x, brother.src_y, brother.src_w, brother.src_h, brother.des_x, brother.des_y, brother.des_w, brother.des_h);
}

function clearCanvas(canvas){
    canvas.width = canvas.width;
}
