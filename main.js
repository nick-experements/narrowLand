
    
$('#pressToPlay').click(()=>{
    $('#pressToPlay').remove()
    $('#mainHead').remove()
})
var playerVeiws = ['./img/Head.png', './img/head2.png']
$('body').keypress(()=>{
    $('#pressToPlay').remove()
    $('#mainHead').remove()
})

var score = 0
function Player(x, y,img, speed){
    this.x = x;
    this.y = y;
    this.image = img;
    this.speed = speed
    this.draw()
}
Player.prototype.draw = function() {
    var viewPlayer = '<img src="'+this.image+'"">';
    this.playerElement = $(viewPlayer);
    this.playerElement.css({
        position: "absolute", 
        left: this.x,
        top: this.y,
        width: 50,
        transform: 'translate(-50%, -50%)',
        transition: '0.1s',
        transitionTimingFunction: 'linear',
        
    });
    $('body').append(this.playerElement);
};

Player.prototype.moveLeft = function () {
    this.x -= this.speed;
    this.playerElement.css({
        left: this.x,
        top: this.y
    });
};

Player.prototype.moveUp = function () {
    this.y -= this.speed;
    this.playerElement.css({
        left: this.x,
        top: this.y
    });
};
Player.prototype.moveDown = function () {
    this.y += this.speed;
    this.playerElement.css({
        left: this.x,
        top: this.y
    });
};
Player.prototype.moveRight = function(){
    if (this.x < screen.width){
        
        this.x += this.speed;
        this.playerElement.css({
            left: this.x,
            top: this.y,
        })
    }
}

function FlagR(x, y,img){
    this.x = x;
    this.y = y;
    this.image = img;
    this.draw()
}
FlagR.prototype.draw = function() {
var viewFlagR = '<img src="'+this.image+'"">';
this.flagRElement = $(viewFlagR);
this.flagRElement.css({
    position: "absolute", 
    left: this.x,
    top: this.y,
    width: 50,
    transform: 'translate(-50%, -50%)',
    transition: '0.1s',
    transitionTimingFunction: 'linear',

});
$('body').append(this.flagRElement);
};
FlagR.prototype.move = function(){
if (distanse < 50 && distanse4>50 && distanse1 > 50){
    player.speed = 7
    this.x = player.x;
    this.y = player.y;
    this.flagRElement.css({
        left: this.x,
        top: this.y,
    })
}
else{
    player.speed = 10
    this.x = position2.left;
    this.y = position2.top;
    this.flagRElement.css({
        left: this.x,
        top: this.y,
    })

}
}
function FlagB(x, y,img){
    this.x = x;
    this.y = y;
    this.image = img;
    this.draw()
}
FlagB.prototype.draw = function() {
var viewFlagB = '<img src="'+this.image+'"">';
this.flagBElement = $(viewFlagB);
this.flagBElement.css({
    position: "absolute", 
    left: this.x,
    top: this.y,
    width: 50,
    transform: 'translate(-50%, -50%)',
    transition: '0.1s',
    transitionTimingFunction: 'linear',

});
$('body').append(this.flagBElement);
};
FlagB.prototype.move = function(){
if (distanse2 < 50 && distanse1 > 50 &&distanse3 > 50){
    player1.speed = 7
    this.x = player1.x;
    this.y = player1.y;
    this.flagBElement.css({
        left: this.x,
        top: this.y,
    })
}
else{
    player1.speed = 10
    this.x = position4.left;
    this.y = position4.top;
    this.flagBElement.css({
        left: this.x,
        top: this.y,
    })

}
}

var position = $('#houseB').position();
var position1 = $('#flagB').position();
var position2 = $('#cross1').position();
var position3 = $('#houseR').position()
var position4 = $('#cross2').position();

var player = new Player(/*screen.width*0.76$('#houseB').x*/position.left, /*screen.height*0.88$('#houseB').y*/position.top, playerVeiws[Math.floor(Math.random()*2)], 10)
var player1 = new Player(position3.left, position3.top, playerVeiws[Math.floor(Math.random()*2)], 10)
var flagR = new FlagR(position2.left, position2.top, './img/FlagR.png', )
var flagB = new FlagB(position4.left, position4.top, './img/FlagB.png', )
const xOfRedFlag =  flagR.x
const yOfRedFlag =  flagR.y
const xOfBlueFlag = flagB.x
const yOfBlueFlag = flagB.y
var getDistanse = function(px, py, frx, fry ){
    var diffX = px - frx
    var diffY = py - fry
    return Math.sqrt(diffX ** 2 + diffY **2 );
}
var getDistanse1 = function(px, p1x, py, p1y){
    var diffX1 = px - p1x
    var diffY1 = py - p1y
    return Math.sqrt(diffX1 ** 2 + diffY1 **2 );
}
var getDistanse2 = function(px, py, fbx, fby){
    var diffX2 = fbx - px
    var diffY2 = fby - py
    return Math.sqrt(diffX2 ** 2 + diffY2 **2 );
}
var getDistanse3 = function(frx, fbx, fry, fby){
    var diffX3 = fbx - frx
    var diffY3 = fby - fry
    return Math.sqrt(diffX3 ** 2 + diffY3 **2 );
}
var getDistanse4 = function(frx, fbx, fry, fby){
    var diffX4 = fbx - frx
    var diffY4 = fby - fry
    return Math.sqrt(diffX4 ** 2 + diffY4 **2 );
}
var distanse;
var distanse1;
var distanse2;
var distanse3;
var distanse4;
var keyActions = {
    87: 'up',
    65: 'left',
    83: 'down',
    68: 'right', 
    38: 'up1',
    37: 'left1',
    40: 'down1',
    39: 'right1'
}
var upPressed = false;
var leftPressed = false;
var downPressed = false;
var rightPressed = false;
var upPressed1 = false;
var leftPressed1 = false;
var downPressed1 = false;
var rightPressed1 = false;
    $('body').keydown((event)=>{
        if(keyActions[event.keyCode] === 'up'){
            upPressed = true
        }
        if(keyActions[event.keyCode] === 'left'){
            leftPressed = true
        }
        if(keyActions[event.keyCode] === 'down'){
            downPressed = true
        }
        if(keyActions[event.keyCode] === 'right'){
            rightPressed = true
        }
    })
    $('body').keyup((event)=>{
        if(keyActions[event.keyCode] === 'up'){
            upPressed = false;
        }
        if(keyActions[event.keyCode] === 'left'){
            leftPressed = false;
        }
        if(keyActions[event.keyCode] === 'down'){
            downPressed = false;
        }
        if(keyActions[event.keyCode] === 'right'){
            rightPressed = false;
        }
    })
    $('body').keydown((event)=>{
        if(keyActions[event.keyCode] === 'up1'){
            upPressed1 = true
        }
        if(keyActions[event.keyCode] === 'left1'){
            leftPressed1 = true
        }
        if(keyActions[event.keyCode] === 'down1'){
            downPressed1 = true
        }
        if(keyActions[event.keyCode] === 'right1'){
            rightPressed1 = true
        }
    })
    $('body').keyup((event)=>{
        if(keyActions[event.keyCode] === 'up1'){
            upPressed1 = false;
        }
        if(keyActions[event.keyCode] === 'left1'){
            leftPressed1 = false;
        }
        if(keyActions[event.keyCode] === 'down1'){
            downPressed1 = false;
        }
        if(keyActions[event.keyCode] === 'right1'){
            rightPressed1 = false;
        }
    })
    var intervalId = setInterval(()=>{
        distanse = getDistanse(player.x, player.y, flagR.x, flagR.y)
        distanse1 = getDistanse1(player.x, player1.x, player.y, player1.y)
        distanse2 = getDistanse2(player1.x, player1.y, flagB.x, flagB.y)
        distanse3 = getDistanse1(xOfRedFlag, flagB.x, yOfRedFlag, flagB.y)
        distanse4 = getDistanse1(flagR.x, xOfBlueFlag, flagR.y, yOfBlueFlag)
        if(upPressed){
            player1.moveUp()
        }
        if(leftPressed){
            player1.moveLeft()
        }
        if(downPressed){
            player1.moveDown()
        }
        if(rightPressed){
            player1.moveRight()
        }
        if(upPressed1){
            player.moveUp()
        }
        if(leftPressed1){
            player.moveLeft()
        }
        if(downPressed1){
            player.moveDown()
        }
        if(rightPressed1){
            player.moveRight()
        }
        $('#score').text('Score: ' + score)
        flagR.move()
        flagB.move()
        if (player.x <= 30 &&  player.y >= 860){
            $('body > *').remove()
            $('body').append('o')
        }

    }, 30)