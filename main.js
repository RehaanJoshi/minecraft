var canvas = new fabric.Canvas("myCanvas")

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object = "";
var block_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Image) {
        player_object = Image;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x

        });
        canvas.add(player_object)
    });
}
function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Image) {
        block_object = Image;
        block_object.scaleToWidth(block_image_width);
        block_object.scaleToHeight(block_image_height);
        block_object.set({
            top: player_y,
        left: player_x

    });
    canvas.add(block_object)
} )
}
window.addEventListener("keydown", mykeydown);
function mykeydown(e) {
    keypressed = e.keyCode
    console.log(keypressed)
    if (e.shiftKey == true && keypressed == '80') {
        console.log("p and shift key are pressed together")
        block_image_height += 10; document.getElementById("current_height").innerHTML=block_image_height
        block_image_width += 10;  document.getElementById("current_width").innerHTML=block_image_width
}
if (e.shiftKey == true && keypressed == '77') {
    console.log("m and shift key are pressed together")
    block_image_height -= 10; document.getElementById("current_height").innerHTML=block_image_height
    block_image_width -= 10;  document.getElementById("current_width").innerHTML=block_image_width
}
if (keypressed == '37') {
    console.log("left key is pressed")
   left();
}
if (keypressed == '38') {
    console.log("up key is pressed")
   up();
}
if (keypressed == '39') {
    console.log("right key is pressed")
   right();
}
if (keypressed == '40') {
    console.log("down key is pressed")
   down();
}
if (keypressed == '85') {
    console.log("u key is pressed")
   new_image('unique.png');
}
if (keypressed == '82') {
    console.log("r key is pressed")
   new_image('roof.jpg');
}
if (keypressed == '76') {
    console.log("l key is pressed")
   new_image('light_green.png');
}
if (keypressed == '68') {
    console.log("d key is pressed")
   new_image('dark_green.png');
}
if (keypressed == '84') {
    console.log("t key is pressed")
   new_image('trunk.jpg');
}
if (keypressed == '87') {
    console.log("w key is pressed")
   new_image('wall.jpg');
}
if (keypressed == '71') {
    console.log("g key is pressed");
   new_image('ground.png');
}
if (keypressed == '89') {
    console.log("y key is pressed");
   new_image('yellow_wall.png');
}
if (keypressed == '67') {
    console.log("c key is pressed");
   new_image('cloud.jpg');
}
}
function up(){
if(player_y>0)
{

 player_y = player_y-block_image_height;
 console.log("player x ="+ player_x + "player y ="+ player_y );
 console.log("block image height ="+ block_image_height);
canvas.remove( player_object);
player_update();
}}

function down(){
    if(player_y<500)
    {
    
     player_y = player_y+block_image_height;
     console.log("player x ="+ player_x + "player y ="+ player_y );
     console.log("block image height ="+ block_image_height);
    canvas.remove( player_object);
    player_update();
    }}

    function left(){
        if(player_x>0)
        {
        
         player_x = player_x-block_image_width;
         console.log("player x ="+ player_x + "player y ="+ player_y );
         console.log("block image width ="+ block_image_width);
        canvas.remove( player_object);
        player_update();
        }}
        function right (){
            if(player_x<1000)
            {
            
             player_x = player_x+ block_image_width;
             console.log("player x ="+ player_x + "player y ="+ player_y );
             console.log("block image width ="+ block_image_width);
            canvas.remove( player_object);
            player_update();
            }}