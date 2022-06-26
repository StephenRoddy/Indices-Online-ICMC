let mobile, desktop, intro;

function preload(){
  intro = createVideo("video/SeaGan1.mp4");
}

function setup() {

    createCanvas(windowWidth, windowHeight);
    intro.hide();

    choice_text = createDiv("<p>Please choose your platform...</p>");
    choice_text.addClass("choice_text");

    mobile = createButton("Mobile");
    mobile.addClass("mobile-btn");

    desktop = createButton("Laptop \\ Desktop");
    desktop.addClass("desktop-btn");


    mobile.mousePressed(go_mobile);
    desktop.mousePressed(go_desktop);

}

function draw(){

image(intro, (windowWidth/2)-intro.width/2,(windowHeight/2)-intro.height/2);
filter(THRESHOLD,.9);

//tint(127, 0, 0, 127);
//image(intro, (windowWidth/2)-intro.width/2,(windowHeight/2)-intro.height/2);

  }

function go_desktop() {
  window.open("./desktop.html","_self")
}

function go_mobile() {
  window.open("./mobile.html","_self")
}

function mouseMoved() {
  intro.play();
  }
