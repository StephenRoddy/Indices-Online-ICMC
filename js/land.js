let mobile, desktop;

function setup() {



    choice_text = createDiv("<p>Please choose your platform...</p>");
    choice_text.addClass("choice_text");

    mobile = createButton("Mobile");
    mobile.addClass("mobile-btn");

    desktop = createButton("Laptop or Desktop");
    desktop.addClass("desktop-btn");


    mobile.mousePressed(go_mobile);
    desktop.mousePressed(go_dekstop);


}

function go_dekstop() {
  window.open("./desktop.html","_self")
}

function go_mobile() {
  window.open("./mobile.html","_self")
}
