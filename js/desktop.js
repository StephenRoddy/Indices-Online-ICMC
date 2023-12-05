let x,y, highMidMap, bassMap, midMAp,sentiment,prediction,saScore,sntMnt, indNum, cover,audio,corpus,comp1,comp2,index9,index15,index18,index21,index22,index24,index27,index32,index45,index46,index47,index51,toggleBtn,txtNotesganVid, ganVid1,ganVid2,ganVid3,ganVid4,ganVid5,ganVid6,ganVid7,ganVid8, degs;
let b_w = 75;
let b_h = 75;
let b_d = 75;
let cnv_w = 500;
let cnv_h = 500;
let t = 10; //drunk walk parameters
let T = 10000;
let vidInd =0;
let timCnt =0;
let clickCheck = false;


function preload() {

    audio = loadSound("audio/Corpus.mp3");
    corpus = loadSound("audio/Corpus.mp3");
    index9 = loadSound("audio/Index 9.mp3");
    index15 = loadSound("audio/Index 15.mp3");
    index18 = loadSound("audio/Index 18.mp3");
    index21 = loadSound("audio/Index 21.mp3");
    index22 = loadSound("audio/Index 22.mp3");
    index24 = loadSound("audio/Index 24.mp3");
    index27 = loadSound("audio/Index 27.mp3");
    index32 = loadSound("audio/Index 32.mp3");
    index45 = loadSound("audio/Index 45.mp3");
    index46 = loadSound("audio/Index 46.mp3");
    index47 = loadSound("audio/Index 47.mp3");
    index51 = loadSound("audio/Index 51.mp3");
    comp1 = loadSound("audio/comp1.mp3");
    comp2 = loadSound("audio/comp2.mp3");

    ganVid1 = createVideo("video/SkyGan1.mp4");
    ganVid2 = createVideo("video/SkyGan2.mp4");
    ganVid3 = createVideo("video/SkyGan3.mp4");
    ganVid4 = createVideo("video/SkyGan4.mp4");
    ganVid5 = createVideo("video/SkyGan5.mp4");
    ganVid6 = createVideo("video/SeaGan1.mp4");
    ganVid7 = createVideo("video/SeaGan2.mp4");
    ganVid8 = createVideo("video/SeaGan3.mp4");

    ganVid1.hide();
    ganVid2.hide();
    ganVid3.hide();
    ganVid4.hide();
    ganVid5.hide();
    ganVid6.hide();
    ganVid7.hide();
    ganVid8.hide();


     ganArr = [ganVid1,ganVid2,ganVid3,ganVid4,ganVid5,ganVid6,ganVid7,ganVid8];


     plyArr = [corpus,index9,index15,index18,index21,index22,index24,index27,index32,index45,index46,index47,index51,comp1,comp2];
     txtArr =["Audio only: No text"," 9. A body's visible, the soul is not. We can easily see that a paralytic cannot move his good leg. We cannot see that a bad man cannot move his good soul: but we should take it as the effect of a paralysis of the soul. And we have to struggle against it and subdue it. Such is the foundation of ethics, my dear Nicomachos.","15. The body's an envelope: and so it serves to contain what it then has to develop. The development is interminable. The finite body con- tains the infinite, which is neither soul nor spirit, but in fact the develop- ment of the body.","18. The body's simply a soul. A soul, wrinkled, fat or dry, hairy or callous, rough, supple, cracking, gracious, flatulent, iridescent, pearly, daubed with paint, wrapped in muslin or camouflaged in khaki, multicol- ored, covered with grease, wounds, warts. The soul is an accordion, a trumpet, the belly of a viola.","21. A body is a difference. Since it is a difference from every other body-while minds are identical-it's never done with differing. It also differs from itself. How are we to ponder a baby and an old man next to one another?","22. Different, bodies are all somewhat deformed. A perfectly formed body is a disturbing, indiscreet body in the world of bodies, unacceptable. It's a diagram, not a body.","24. A headless body's closed in on itself. It ties its muscles together, hooks its organs up to one another. The head's simple, a combination of alveoli and liquids in a triple envelope.","27. Bodies cross paths, rub up and press against each other, embrace or collide with one another: they send each other all these signals, so many signals, addresses, notices, which no defined sense can exhaust. Bodies produce a sense beyond sense. They're an extravagance of sense. Which is why a body seems to assume its sense only once it's dead, fixed. And maybe why we interpret the body as the soul's tomb. In reality, a body never stops stirring. Death freezes the movement of letting go and declin- ing to stir. A body is the stirring of the soul.","32. Eating isn't incorporating, but opening the body to the thing we devour, exhaling our insides in the tasting of fish or fig. Running unfolds those same insides with strides, fresh air on the skin, spent breath. Think- ing swings tendons, and various springs, back and forth with jets ofsteam and forced steps over great salt lakes with no discernable horizon. There's never any incorporation, but always exits, twists, openings-out, channel- ings or disgorgings, crossings, balancings. Intussusception is a metaphysi- cal chimera.","45. The body is ours and proper to us precisely to the degree that it doesn't belong to us and evades the intimacy of our proper being, if this being ever even exists, something the body, precisely, should make us seri- ously doubt. But to this degree, which suffers no limitation, our body isn't just outs but us, ourselves, even unto death, meaning its death and decomposition, in which we can be, and are, identically decomposed.","46. Why indices? Because there's no totality to the body, no synthetic unity. There are pieces, zones, fragments. There's one bit after another, a stomach, an eyelash, a thumb-nail, a shoulder, a breast, a nose, an upper intestine, a choledoch, a pancreas: anatomy is endless, until eventually running into an exhaustive enumeration of cells. But this doesn't yield a totality. On the contrary, we must immediately run through the whole nomenclatute allover again, so as to find, if possible, a trace of the soul imprinted on every piece. But the pieces, the cells, change as the calcula- tion enumerates in vain.","47. The body's exteriority and alterity include the unbearable: dejec- tion, filth, the ignoble waste that is still part of it, still belongs to its sub- stance and especially its activity, since it has to expel it, which is not one of its lesser functions. From excrement to the outgrowth of nails, hairs, or every kind of wart or purulent malignity, it has to put outside, and sepa- rate from itself, the residue or excess of its assimilatory processes, the ex- cess of its own life. The body doesn't want to say, see, or smell this. It feels shame about it, and all kinds of daily distress and embarrassment. The soul enjoins itself to silence concerning a whole part of the body whose own form it is.","51. Beauty spot: this is the name for those brown or black particles, slightly prominent, that sometimes (and, for some, often) make a point, a mark, or a mole on the skin. Rather than spot the skin, they accentuate its whiteness, or at least this is what was often said in days when snow and milk served as points of comparison par excellence for women's skin. Women would then, if need be, put velvet ''flies'' on their cheeks and neck. Today, we prefer darker skin, sunbathed or tanned. But the beauty spot keeps its appeal: it signals skin, sets off its expanse, and configures it, guides the eye and affects it as a mark of desire. We'd almost be inclined to call a beauty spot the seed of desire, a minuscule rise in intensity, a corpuscle whose dark tint concentrates the energy of the entire body, as does the nipple of the breast.","15. The body's an envelope: and so it serves to contain what it then has to develop. The development is interminable. The finite body con- tains the infinite, which is neither soul nor spirit, but in fact the develop- ment of the body.</br>22. Different, bodies are all somewhat deformed. A perfectly formed body is a disturbing, indiscreet body in the world of bodies, unacceptable. It's a diagram, not a body.</br>27. Bodies cross paths, rub up and press against each other, embrace or collide with one another: they send each other all these signals, so many signals, addresses, notices, which no defined sense can exhaust. Bodies produce a sense beyond sense. They're an extravagance of sense. Which is why a body seems to assume its sense only once it's dead, fixed. And maybe why we interpret the body as the soul's tomb. In reality, a body never stops stirring. Death freezes the movement of letting go and declin- ing to stir. A body is the stirring of the soul.","21. A body is a difference. Since it is a difference from every other body-while minds are identical-it's never done with differing. It also differs from itself. How are we to ponder a baby and an old man next to one another? </br> 7. The soul is extended everywhere along the body, says Descartes; it is entirely everywhere all along it, on its very surface, insinuated within it,and slipped into it, infiltrated, impregnating, tentacular, inflating, model- ing, omnipresent.</br>3. A body isn't empty. It's full of other bodies, pieces, organs, parts, tissues, knee-caps, rings, tubes, levers, and bellows. It's also full of itself: that's all it is.</br>"];
  }

function setup() {

    ganVid = ganArr[6];
    createCanvas(windowWidth, windowHeight, WEBGL);

    noStroke();
    background(0);

    //toggleBtn.mousePressed(toggleBtn);

    fft = new p5.FFT();
    fft.setInput(audio);

    txtNotes = createDiv('<p>This piece is an online audiovisual installation that uses machine-learning techniques to reflect on the interplay of the artist and the artifact in the context of technologically mediated arts collaborations.</p>

<p>This project involved the artistic collective AMAE, artist/curator Pier Giorgio De Pinto and philosopher Jean-Luc Nancy with Music and Code written by Dr. Stephen Roddy. It emerged from an earlier project entitled 58+1/63 Indices on the Body. Adopting Nancy’s view of the body as extended in the work of AMAE/DePinto and Roddy, the piece asks what happens to the body when we begin to rely heavily on translations across disembodied technologies to mediate both our communication and art-making. It reflects on how meaning mutates and transforms as the work is translated across various technologies and media.</p>

<p>This work focuses on Nancy’s 58 indices on the body, written in 2006 by Jean-Luc Nancy and presented, alongside 4 additional new compositions, in the 2008 translation (by Richard A. Rand) of his 1992 book Corpus (Nancy 1992, Nancy 2008). Throughout this project, Nancy has produced 5 additional indices. As part of this project Jean Luc Nancy recorded himself reading his 58 indices on the body. 
Each of the pieces presented here was assembled in a similar manner. Each respond to the English translations of the text, but they are guided by the ebb and flow of Nancy’s voice as he reads the pieces. The prosody in his voice, the vocal patterns of stress and release convey much new information and modulate the meanings of the words as they were written on the page.</p>
');
    txtNotes.addClass("txt-note");

    // initialize sentiment analysis
    sentiment = ml5.sentiment('movieReviews', modelReady);
    //set up button and listeners
    toggleBtn = createButton("Play Index");
    toggleBtn.addClass("toggle-btn");

    toggleBtn.mousePressed(toggleMedia);
    toggleBtn.mousePressed(textHandler);
    toggleBtn.mousePressed(getSentiment);
    toggleBtn.mousePressed(fullscreen);

    clickCheck = false; // update to false after page is set up to interrupt the  resetCheck method that resets the page. Prevents page from resetinng continually when idle on landing area.


}

function draw() {


push();
    texture(ganVid);
    plane(windowWidth, windowHeight);
pop();

//  console.log.txtNotes(values);
  fft.setInput(audio);
  let waveform = fft.waveform(); // amplitudes along time domain
  let spectrum = fft.analyze();
  let bass, lowMid, mid, highMid, treble;

  bass = fft.getEnergy("bass"); // each an 8bit integer 0-255
 //lowMid = fft.getEnergy("lowMid");
  mid = fft.getEnergy("mid");
  highMid = fft.getEnergy("highMid");
 // treble = fft.getEnergy("treble");



push();
  if(saScore > .4){ // sentiment is scored from 0-1 with .5 being neutral.
    rotateY(millis() /  1000);
    //Unique color coding for each case.
    bassMap_Red = 0;
    midMap_Green  = (90*saScore) + ((mid/250)*160);
    highMidMap_Blue = (90*saScore) +((highMid/250)*160);

  } else{
    rotateY(millis() / -1000);
    //Unique color coding for each case.
    bassMap_Red = (90*saScore) +((bass/250)*160);
    midMap_Green  = 0;
    highMidMap_Blue = (90*saScore)+((highMid/250)*160);

  }

  sph_rad = width*.2;
  ambientMaterial(250);
  sphere(sph_rad);
pop();

//Drunk walk Generator to control light directionality
  x = noise(t);
  x = map(x,0,1,0,width);
  y = noise(T);
  y = map(y,0,1,0,height);
  t =t+0.01;
  T =T+0.01;

pointLight(bassMap_Red,midMap_Green, highMidMap_Blue, x, y, 5);


// pointLight(bassMap_Red,midMap_Green, highMidMap_Blue, x, y, (sph_rad*-1)-10);

resetCheck(); // Checks to see if the piece should be reset for the enxt person.
console.log(clickCheck);
}


function toggleMedia() {

    vidInd = Math.floor((Math.random() * ganArr.length));
    ganVid = ganArr[vidInd];
    ganVid.size(1024,1024);
    ganVid.loop();

    if (audio.isPlaying()) {
      audio.stop();
      rndIndx = Math.floor((Math.random() * plyArr.length));
      audio = plyArr[rndIndx];
      indNum = rndIndx;
      audio.play();

    } else {
      audio.stop();
      rndIndx = Math.floor((Math.random() * plyArr.length));
      audio = plyArr[rndIndx];
      indNum = rndIndx;
      audio.play();

    }
      clickCheck = true;
      return audio, indNum, vidInd;
}

function textHandler() {
  txtNotes.remove();
  txtNotes = createDiv('<p>'+txtArr[indNum]+'<div class = "att"></br>-Jean-Luc Nancy, <i>Corpus, 2008 edition:(Trans. R.A. Rand)</i></div>'+'</p>');
  txtNotes.addClass("txt-note");

  return txtArr
}

 //Check to see if the piece should be reset.
function resetCheck(){
if((timCnt % frameRate() * 5) === 0 && clickCheck == true) {
  if (audio.isPlaying()){

  } else{
    window.location.href = 'https://stephenroddy.github.io/Indices-Online-ICMC/desktop.html';
    timCnt=0;
    }
  }
timCnt++ //increament our timer for checking when to reset the piece
}

function getSentiment() {
  // make the prediction
//  var prediction = sentiment.predict(txtNotes);
  const prediction = sentiment.predict(txtArr[indNum]);  // return the prediction

  saScore = prediction.score;
  console.log(saScore);
  return saScore;
}

function modelReady() {
  // model is ready
  console.log("Model Loaded!");
}

function fullScren() {
    let fs = fullscreen();
    fullscreen(!fs);
}

function windowResized() {
    resizeCanvas(windowWidth*.5, windowHeight*.5);
}
