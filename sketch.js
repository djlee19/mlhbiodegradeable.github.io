let mobilenet;
let classifier;
let video;
let label = 'loading model';
let happyButton;
let sadButton;
let trainButton;

function modelReady() {
  console.log('Model is ready!!!');
   classifier.load('mlhbiodegradeable.github.io/model.json', customModelReady);
}

 function customModelReady() {
   console.log('Custom Model is ready!!!');
   label = 'model ready';

 }

function videoReady() {
  console.log('Video is ready!!!');
  classifier.classify(gotResults);
}

function setup() {
  createCanvas(320, 270);
  video = createCapture(VIDEO);
  video.hide();
  background(0);
  mobilenet = ml5.featureExtractor('MobileNet', modelReady);
  classifier = mobilenet.classification(video, videoReady);

  /*
  NonBiodegradableButton = createButton('NonBiodegradable'); // aka plastic bag
  NonBiodegradableButton.mousePressed(function() {
    classifier.addImage('Non-Biodegradable');
  });

  BiodegradableButton = createButton('Biodegradable'); // aka phone
  BiodegradableButton.mousePressed(function() {
    classifier.addImage('Biodegradable');
  });

  trainButton = createButton('train');
  trainButton.mousePressed(function() {
    classifier.train(whileTraining);
  });

  saveButton = createButton('save');
  saveButton.mousePressed(function() {
    classifier.save();
  });
  */

}

function draw() {
  background(0);
  image(video, 0, 0, 320, 240);
  fill(255);
  textSize(16);
  text(label, 10, height - 10);
}
/*
function whileTraining(loss) {
  if (loss == null) {
    console.log('Training Complete');
    classifier.classify(gotResults);
  } else {
    console.log(loss);
  }
}
*/




function gotResults(error, result) {
  if (error) {
    //console.error(error);
  } else {
    // updated to work with newer version of ml5
    label = result;
    label = result[0].label;
    classifier.classify(gotResults);
  }
}
