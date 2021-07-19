let img;
var angle = 0;
var x = 0;
var y = 0;
function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    img = loadImage('gt.png');
    
    
}

function rotate_and_draw_image(img_x, img_y, img_width, img_height, img_angle){
    imageMode(CENTER);
    translate(img_x+img_width/2, img_y+img_width/2);
    rotate(PI/180*angle);
    image(img, 0, 0, img_width, img_height);
    rotate(-PI / 180 * img_angle);
    translate(-(img_x+img_width/2), -(img_y+img_width/2));
    imageMode(CORNER);
  }

function draw(){
    clear()
    angle += 2.5;

    x+=1;
    if (x >width){
      x = 0;
    } 
  
    y -=1;
    if (y < 0){
      y = height;
    } 
    rotate_and_draw_image(x+2, y, 150, 150, angle);
    rotate_and_draw_image(x*2, y-123, 300, 100, angle);
    rotate_and_draw_image(mouseX, mouseY, 150, 150, angle);
    rotate_and_draw_image(x*0.1, y*1.5, 50, 100, angle);

}