'use strict';

var canvas = document.getElementById('d7-canvas');
var context = canvas.getContext('2d');

function canvasInit() {
  canvas.width = gridWH;
  canvas.height = canvasH;

  context.imageSmoothingEnabled = true;
  context.imageSmoothingQuality = 'high';
}

function loadMedia() {
  for (var i = 0; i < imagesSrc.length; i++) {
    var img = new Image();
    img.src = 'img/' + imagesSrc[i];
    images[imagesSrc[i]] = img;
    img.onload = function () {
      loadPost();
    };
  }

  for (var _i = 0; _i < audiosSrc.length; _i++) {
    var audio = new Audio('audio/' + audiosSrc[_i].src);
    audios[audiosSrc[_i].src] = audio;
    audio.addEventListener('canplaythrough', function () {
      loadPost();
    }, false);
    if (audiosSrc[_i].loop) {
      audio.addEventListener('ended', function () {
        this.currentTime = 0;
        this.play();
      }, false);
    }
  }
}

function loadPost() {
  loadedObjects++;
  if (loadedObjects === Object.keys(imagesSrc).length + Object.keys(audiosSrc).length) {
    loadingComplete();
  }
}

canvasInit();

var imagesSrc = [numberedPiecesImgNames[0], numberedPiecesImgNames[1], numberedPiecesImgNames[2], numberedPiecesImgNames[3], numberedPiecesImgNames[4], numberedPiecesImgNames[5], numberedPiecesImgNames[6], solidImgName, crackedImgName, drop7BlueImgName, drop7GreyImgName, gameoverImgName, avgScoreUpImgName, avgScoreDownImgName];

var audiosSrc = [explosionAudioName, musicAudioName];

var images = {};
var audios = {};

var loadedObjects = 0;