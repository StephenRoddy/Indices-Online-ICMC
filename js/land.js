let sentiment,prediction,saScore,sntMnt, indNum, cover,audio,corpus,comp1,comp2,index9,index15,index18,index21,index22,index24,index27,index32,index45,index46,index47,index51,toggleBtn,txtNotes;
let degs;
let b_w = 75;
let b_h = 75;
let b_d = 75;
let cnv_w = 500;
let cnv_h = 500;
let highMidMap, bassMap, midMAp;
let x,y;
let t = 10; //drunk walk parameters
let T = 10000;


function setup() {

    //toggleBtn.mousePressed(toggleBtn);
    // initialize sentiment analysis
    //set up button and listeners
    mobile = createButton("Mobile");
    mobile.addClass("toggle-btn");

    desktop = createButton("Desktop\Laptop");
    desktop.addClass("toggle-btn");


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
