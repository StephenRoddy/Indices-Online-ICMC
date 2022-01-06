let mobile, desktop;

function setup() {

    //toggleBtn.mousePressed(toggleBtn);
    // initialize sentiment analysis
    //set up button and listeners
    mobile = createButton("Mobile");
    mobile.addClass("mobile-btn");

    desktop = createButton("Desktop\Laptop");
    desktop.addClass("desktop-btn");


    mobile.mousePressed(go_mobile);
    dekstop.mousePressed(go_dekstop);


}

function draw() {

}

function go_mobile() {
    window.open("/mobile.html","_self")
}

function go_dekstop() {
  window.open("/desktop.html","_self")


}
