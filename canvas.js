let img;
var angle = 0;
var x = 0;
var y = 0;
function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(1,0);
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
    rotate_and_draw_image(x+30, y+6, 150, 150, angle*10);
    rotate_and_draw_image(x+5, y*3, 300, 100, angle*2);
    rotate_and_draw_image(x*1.8, y*1.9, 50, 100, angle*5.8);
    rotate_and_draw_image(x*2.9, y*5, 150, 150, angle*5.5);
    rotate_and_draw_image(x*5.2, y*7.9, 300, 100, angle*8.8);
    rotate_and_draw_image(x*5.5, y*1.3, 50, 100, angle*3.9);
    rotate_and_draw_image(x*3.6, y*3.8, 150, 150, angle*3.9);
    rotate_and_draw_image(x*1.1, y*2.4, 300, 100, angle*3);
    rotate_and_draw_image(x*1.8, y*2.9, 50, 100, angle*6.5);
    rotate_and_draw_image(x*5.6, y*1.7, 150, 150, angle*3.3);
    rotate_and_draw_image(x*4.3, y*2.1, 300, 100, angle*2.9);
    rotate_and_draw_image(x*2.3, y*2.4, 50, 100, angle)*2.9;
}